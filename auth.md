📘 Better Auth 登录验证（支持 Google / GitHub / 多种方式）

Better Auth 是一个 与框架无关、全面可扩展的 TypeScript 身份验证与授权库，支持多种登录方式（邮箱/密码、Google、GitHub 及更多社交登录等），可以让你的用户登录体验既安全又便捷。

🧱 1. Better Auth 简要介绍

✅ 什么是 Better Auth？
Better Auth 是一个与框架无关的身份验证（Authentication）与授权（Authorization）框架，提供开箱即用的认证功能，还支持插件扩展、高级安全策略、社交登录等。

✅ 支持多种登录方式：

邮箱及密码

Google 登录

GitHub 登录

Discord、Apple 等多种社交登录

自定义 OAuth2 / OpenID 提供商（通过 Generic OAuth 插件）

✅ 可在前端框架（React、Vue、Next.js、Astro 等）和后端服务无缝集成。

🔧 2. 安装与基础配置
📦 安装 Better Auth
npm install better-auth


你可以在你的 Web 应用项目中添加好库，后续将进行 OAuth 等配置。

🔐 3. 配置登录方式

Better Auth 支持在服务器端配置不同验证方法，在 betterAuth() 选项里开启你想要的登录方式，包括社交登录提供商：

import { betterAuth } from "better-auth";

export const auth = betterAuth({
  // 基础配置
  appName: "My Awesome App",
  
  // 启用各种验证方式
  authentication: {
    emailAndPassword: { enabled: true },
    socialProviders: {
      google: { enabled: true },
      github: { enabled: true },
    },
  },
  
  // 数据库 adapter
  database: myDatabaseAdapter,
});


✅ 上述配置示例中启用了邮件密码、Google 和 GitHub 登录。

🌐 4. Google 登录（OAuth 配置）

要启用 Google 登录：

✅ 步骤：

去 Google Cloud Console 创建一个新项目。

创建 OAuth 2.0 凭据（Client ID 和 Client Secret）。

在授权重定向 URL 中添加你的回调 URL，例如：

本地开发：http://localhost:3000/api/auth/callback/google

生产环境：https://yourdomain.com/api/auth/callback/google

将凭据配置到 Better Auth 的社交提供者设置中。

✅ 设置完成后，用户点击 “使用 Google 登录” 时会触发标准的 OAuth 流程。

🐙 5. GitHub 登录（OAuth 配置）

要启用 GitHub 登录：

✅ 步骤：

前往 GitHub Developer Portal 获取 Client ID 和 Client Secret。

在 OAuth 应用设置的 Authorization callback URL 中添加你的回调链接，如：

http://localhost:3000/api/auth/callback/github

https://yourdomain.com/api/auth/callback/github

将这些凭据配置到 Better Auth 的 socialProviders.github 中。

✅ 配置完成后就可以支持 GitHub 社交登录。

📡 6. 客户端调用社交登录方法

在前端使用 Better Auth 客户端库调用登录方法。例如在 React 中：

import { createAuthClient } from "better-auth/react";

const authClient = createAuthClient();

await authClient.signIn.social({
  provider: "google",    // 或 "github"
  callbackURL: "/dashboard",
});


✅ 调用后将跳转到 OAuth 提供者收集授权，登录成功后重定向回你的应用。

✅ 7. 登录成功后处理

登录成功后，你可以在回调页面中获取会话信息或用户数据，并引导用户进入应用主界面。

例如在 Next.js 页面：

import { getSession } from "better-auth/client";

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  return { props: { session } };
}

🛡 8. 安全建议

✅ 使用 HTTPS 来保护 OAuth 回调和令牌传输。
✅ 在生产环境下将 OAuth client secrets 安全保存在环境变量中。
✅ 设置 state 参数来防止 CSRF 攻击（Better Auth 内部会自动处理多数逻辑）。

📄 9. 更多扩展登录选项

Better Auth 还能集成更多社交登录或自定义 OAuth2 / OpenID 提供商：

Facebook、Discord、Apple

自定义 OAuth 2.0 服务（使用 Generic OAuth 支持插件）

📌 总结

✅ Better Auth 是可扩展、框架无关的全功能认证库，适合构建现代应用登录体系。
✅ 支持常用登录方式，包括 Google、GitHub、邮箱/密码 等。
✅ 使用 OAuth 配置后，你可以轻松实现安全社交登录流程。

如果你需要，我还可以帮你写 完整登录组件的示例代码（例如 React 或 Next.js 登录页） 或 详细的后端 API 端点设计示例 ✅