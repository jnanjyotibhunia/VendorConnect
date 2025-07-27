import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  ShoppingCart, 
  Package, 
  Users,
  Calendar,
  Target,
  PieChart,
  BarChart3
} from 'lucide-react';

export default function Analytics() {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | '1y'>('30d');

  const stats = [
    {
      name: 'Total Spending',
      value: '₹48,500',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600 bg-green-100'
    },
    {
      name: 'Orders Placed',
      value: '24',
      change: '+8.3%',
      trend: 'up',
      icon: ShoppingCart,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      name: 'Avg Order Value',
      value: '₹2,021',
      change: '-5.2%',
      trend: 'down',
      icon: Target,
      color: 'text-purple-600 bg-purple-100'
    },
    {
      name: 'Active Suppliers',
      value: '8',
      change: '+2',
      trend: 'up',
      icon: Users,
      color: 'text-orange-600 bg-orange-100'
    }
  ];

  const categorySpending = [
    { name: 'Fresh Vegetables', amount: 18500, percentage: 38, color: 'bg-green-500' },
    { name: 'Spices & Masalas', amount: 12000, percentage: 25, color: 'bg-red-500' },
    { name: 'Dairy Products', amount: 8500, percentage: 18, color: 'bg-blue-500' },
    { name: 'Grains & Pulses', amount: 6500, percentage: 13, color: 'bg-yellow-500' },
    { name: 'Others', amount: 3000, percentage: 6, color: 'bg-gray-500' }
  ];

  const topSuppliers = [
    { name: 'Fresh Mart Vegetables', orders: 8, amount: 18500, avgDelivery: '35 min', rating: 4.8 },
    { name: 'Spice Kingdom', orders: 6, amount: 12000, avgDelivery: '45 min', rating: 4.9 },
    { name: 'Pure Dairy Farm', orders: 5, amount: 8500, avgDelivery: '25 min', rating: 4.7 },
    { name: 'Golden Grains Co.', orders: 3, amount: 6500, avgDelivery: '60 min', rating: 4.6 },
    { name: 'Healthy Oils Ltd.', orders: 2, amount: 3000, avgDelivery: '55 min', rating: 4.5 }
  ];

  const monthlyData = [
    { month: 'Oct', orders: 18, spending: 35000 },
    { month: 'Nov', orders: 22, spending: 42000 },
    { month: 'Dec', orders: 20, spending: 38000 },
    { month: 'Jan', orders: 24, spending: 48500 }
  ];

  const insights = [
    {
      type: 'cost_saving',
      title: 'Group Buying Savings',
      description: 'You saved ₹3,200 this month by participating in group orders',
      value: '₹3,200',
      icon: DollarSign,
      color: 'text-green-600 bg-green-50 border-green-200'
    },
    {
      type: 'efficiency',
      title: 'Delivery Performance',
      description: 'Average delivery time improved by 15 minutes compared to last month',
      value: '15 min',
      icon: TrendingUp,
      color: 'text-blue-600 bg-blue-50 border-blue-200'
    },
    {
      type: 'recommendation',
      title: 'Supplier Recommendation',
      description: 'Consider trying Metro Fresh - highly rated and offers better prices for vegetables',
      value: 'New',
      icon: Users,
      color: 'text-purple-600 bg-purple-50 border-purple-200'
    },
    {
      type: 'trend',
      title: 'Seasonal Trend',
      description: 'Vegetable prices are expected to decrease by 10-15% next month',
      value: '10-15%',
      icon: TrendingDown,
      color: 'text-orange-600 bg-orange-50 border-orange-200'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
            <p className="text-gray-600">Track your business performance and insights</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value as any)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <div className="flex items-center mt-2">
                  {stat.trend === 'up' ? (
                    <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-600 mr-1" />
                  )}
                  <span className={`text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">vs last month</span>
                </div>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Spending by Category */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Spending by Category</h3>
            <PieChart className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {categorySpending.map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center flex-1">
                  <div className={`w-3 h-3 rounded-full ${category.color} mr-3`}></div>
                  <span className="text-sm font-medium text-gray-700">{category.name}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${category.color}`}
                      style={{ width: `${category.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900 w-16 text-right">
                    ₹{category.amount.toLocaleString()}
                  </span>
                  <span className="text-xs text-gray-500 w-8 text-right">
                    {category.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Trends */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Monthly Trends</h3>
            <BarChart3 className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {monthlyData.map((data, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <Calendar className="h-4 w-4 text-orange-600" />
                  </div>
                  <span className="font-medium text-gray-900">{data.month}</span>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">₹{data.spending.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">{data.orders} orders</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Suppliers */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-8">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Top Suppliers</h3>
          <p className="text-sm text-gray-600">Your most frequently used suppliers</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Spent</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Delivery</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {topSuppliers.map((supplier, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white font-semibold text-sm">
                          {supplier.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{supplier.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{supplier.orders}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ₹{supplier.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{supplier.avgDelivery}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900 mr-1">{supplier.rating}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(supplier.rating) ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Insights and Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {insights.map((insight, index) => (
          <div key={index} className={`border rounded-xl p-6 ${insight.color}`}>
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <insight.icon className="h-6 w-6 mr-3 mt-1" />
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">{insight.title}</h4>
                  <p className="text-sm opacity-80">{insight.description}</p>
                </div>
              </div>
              <div className="font-bold text-lg">{insight.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}