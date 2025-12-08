import { Navigation } from "@/components/navigation/Navigation";
import { BarChart3, FileText, TrendingUp, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl p-8 mb-8 text-white shadow-lg">
          <h1 className="text-3xl font-bold mb-2">欢迎使用大格4表合一数据分析系统</h1>
          <p className="text-orange-50">统一管理和分析您的数据，提升工作效率</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-sm text-gray-500">本月</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">1,234</h3>
            <p className="text-sm text-gray-600">数据表单总数</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-50 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-sm text-gray-500">本周</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">+18.2%</h3>
            <p className="text-sm text-gray-600">增长率</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-50 rounded-lg">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
              <span className="text-sm text-gray-500">今日</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">89</h3>
            <p className="text-sm text-gray-600">待处理分析</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-orange-50 rounded-lg">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <span className="text-sm text-gray-500">在线</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">12</h3>
            <p className="text-sm text-gray-600">活跃用户</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">快速操作</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-orange-400 hover:bg-orange-50 transition-all">
              <FileText className="h-5 w-5 text-orange-600" />
              <div className="text-left">
                <p className="font-semibold text-gray-900">新建表单</p>
                <p className="text-sm text-gray-600">创建新的数据表单</p>
              </div>
            </button>

            <button className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-orange-400 hover:bg-orange-50 transition-all">
              <BarChart3 className="h-5 w-5 text-orange-600" />
              <div className="text-left">
                <p className="font-semibold text-gray-900">查看分析</p>
                <p className="text-sm text-gray-600">浏览数据分析报表</p>
              </div>
            </button>

            <button className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-orange-400 hover:bg-orange-50 transition-all">
              <TrendingUp className="h-5 w-5 text-orange-600" />
              <div className="text-left">
                <p className="font-semibold text-gray-900">导出数据</p>
                <p className="text-sm text-gray-600">导出为Excel或PDF</p>
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
