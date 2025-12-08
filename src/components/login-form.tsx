"use client";

import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";

export function LoginForm() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok) {
        window.location.href = "/";
      } else {
        setError(data.message || "密码错误");
      }
    } catch (error) {
      setError("登录失败，请重试");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <Card className="w-full max-w-md shadow-xl border-0">
        <CardHeader className="space-y-4 pb-8 pt-10">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full">
            <Image
              src="/epslogo.png"
              alt="EPS TEC Logo"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">大格4表合一数据分析系统</h1>
            <CardDescription className="text-gray-600">请输入访问密码以继续使用系统</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="px-8 pb-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                访问密码
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="请输入访问密码"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10 h-11 border-gray-200 focus:border-orange-400 focus:ring-orange-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {error && (
                <p className="text-sm text-red-500">{error}</p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full h-11 bg-orange-400 hover:bg-orange-500 text-white font-medium shadow-sm transition-all"
              disabled={isLoading}
            >
              <Lock className="mr-2 h-4 w-4" />
              {isLoading ? "验证中..." : "验证并进入"}
            </Button>
            <p className="text-center text-sm text-gray-500">
              验证成功后将保持登录状态 15 天
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
