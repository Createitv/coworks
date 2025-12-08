import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "大格4表合一数据分析系统",
  description: "统一管理和分析您的数据，提升工作效率",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
