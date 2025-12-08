import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    const systemPassword = process.env.SYSTEM_PASSWORD;

    if (!systemPassword) {
      return NextResponse.json(
        { message: "系统配置错误" },
        { status: 500 }
      );
    }

    if (password === systemPassword) {
      // 设置认证cookie，有效期15天
      const cookieStore = await cookies();
      cookieStore.set("auth_token", "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 15, // 15天
        path: "/",
      });

      return NextResponse.json(
        { message: "登录成功" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "密码错误" },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "登录失败，请重试" },
      { status: 500 }
    );
  }
}
