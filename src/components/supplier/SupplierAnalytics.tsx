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
  Award,
  Clock
} from 'lucide-react';

export default function SupplierAnalytics() {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | '1y'>('30d');

  const stats = [
    {
      name: 'Total Revenue',
      value: '₹2,85,000',
      change: '+24.3%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600 bg-green-100'
    },
    {
      name: 'Orders Fulfilled',
      value: '156',
      change: '+18.2%',
      trend: 'up',
      icon: ShoppingCart,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      name: 'Active Customers',
      value: '42',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'text-purple-600 bg-purple-100'
    },
    {
      name: 'Avg Order Value',
      value: '₹1,827',
      change: '-3.2%',
      trend: 'down',
      icon: Target,
      color: 'text-orange-600 bg-orange-100'
    }
  ];

  const productPerformance = [
    { name: 'Fresh Tomatoes', revenue: 45000, orders: 45, growth: 25, color: 'bg-red-500' },
    { name: 'Red Onions', revenue: 32000, orders: 38, growth: -8, color: 'bg-purple-500' },
    { name: 'Potatoes', revenue: 38000, orders: 42, growth: 15, color: 'bg-yellow-500' },
    { name: 'Carrots', revenue: 24000, orders: 28, growth: 22, color: 'bg-orange-500' },
    { name: 'Green Chilies', revenue: 18000, orders: 32, growth: 18, color: 'bg-green-500' }
  ];

  const topCustomers = [
    { name: 'Kumar Chaat Corner', orders: 28, revenue: 52000, rating: 4.9, growth: 15 },
    { name: 'Delhi Street Food', orders: 22, revenue: 41000, rating: 4.8, growth: 8 },
    { name: 'Tasty Bites Corner', orders: 18, revenue: 35000, rating: 4.7, growth: 22 },
    { name: 'Spicy Junction', orders: 15, revenue: 28000, rating: 4.6, growth: -5 },
    { name: 'Quick Bites', orders: 12, revenue: 22000, rating: 4.5, growth: 12 }
  ];

  const monthlyData = [
    { month: 'Oct', revenue: 180000, orders: 98, customers: 32 },
    { month: 'Nov', revenue: 220000, orders: 125, customers: 36 },
    { month: 'Dec', revenue: 240000, orders: 140, customers: 38 },
    { month: 'Jan', revenue: 285000, orders: 156, customers: 42 }
  ];

  const insights = [
    {
      type: 'growth',
      title: 'Strong Revenue Growth',
      description: 'Your revenue increased by 24% this month, outperforming market average',
      value: '+24%',
      icon: TrendingUp,
      color: 'text-green-600 bg-green-50 border-green-200'
    },
    {
      type: 'product',
      title: 'Top Selling Product',
      description: 'Fresh Tomatoes generated ₹45,000 this month with highest demand',
      value: '₹45K',
      icon: Package,
      color: 'text-blue-600 bg-blue-50 border-blue-200'
    },
    {
      type: 'customer',
      title: 'Customer Retention',
      description: '85% of your customers placed repeat orders this month',
      value: '85%',
      icon: Users,
      color: 'text-purple-600 bg-purple-50 border-purple-200'
    },
    {
      type: 'efficiency',
      title: 'Delivery Performance',
      description: '98% on-time delivery rate - excellent customer satisfaction',
      value: '98%',
      icon: Award,
      color: 'text-orange-600 bg-orange-50 border-orange-200'
    }
  ];

  const orderTimeDistribution = [
    { time: '06:00-09:00', orders: 35, percentage: 22 },
    { time: '09:00-12:00', orders: 28, percentage: 18 },
    { time: '12:00-15:00', orders: 42, percentage: 27 },
    { time: '15:00-18:00', orders: 32, percentage: 21 },
    { time: '18:00-21:00', orders: 19, percentage: 12 }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Supplier Analytics</h1>
            <p className="text-gray-600">Track your business performance and customer insights</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value as any)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
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
        {/* Product Performance */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Top Products</h3>
            <Package className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {productPerformance.map((product, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center flex-1">
                  <div className={`w-3 h-3 rounded-full ${product.color} mr-3`}></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-700">{product.name}</p>
                    <p className="text-xs text-gray-500">{product.orders} orders</p>
                  </div>
                </div>
                <div className="text-right mr-4">
                  <p className="text-sm font-semibold text-gray-900">₹{product.revenue.toLocaleString()}</p>
                  <div className="flex items-center">
                    {product.growth > 0 ? (
                      <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                    )}
                    <span className={`text-xs ${product.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {product.growth > 0 ? '+' : ''}{product.growth}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Trends */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Monthly Performance</h3>
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {monthlyData.map((data, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <Calendar className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="font-medium text-gray-900">{data.month}</span>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">₹{data.revenue.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">{data.orders} orders • {data.customers} customers</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Customers */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-8">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Top Customers</h3>
          <p className="text-sm text-gray-600">Your most valuable customers</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Growth</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {topCustomers.map((customer, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white font-semibold text-sm">
                          {customer.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{customer.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.orders}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ₹{customer.revenue.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900 mr-1">{customer.rating}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(customer.rating) ? 'text-yellow-400' : 'text-gray-300'
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
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {customer.growth > 0 ? (
                        <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                      )}
                      <span className={`text-sm font-medium ${
                        customer.growth > 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {customer.growth > 0 ? '+' : ''}{customer.growth}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Order Time Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Order Time Distribution</h3>
            <Clock className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {orderTimeDistribution.map((timeSlot, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center flex-1">
                  <span className="text-sm font-medium text-gray-700 w-24">{timeSlot.time}</span>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${timeSlot.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-gray-900">{timeSlot.orders}</span>
                    <span className="text-xs text-gray-500 ml-1">({timeSlot.percentage}%)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Summary */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Performance Summary</h3>
          <div className="space-y-6">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Overall Rating</h4>
              <p className="text-2xl font-bold text-green-600 mb-1">4.8/5</p>
              <p className="text-sm text-gray-600">Based on customer feedback</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
              <div className="text-center">
                <p className="text-lg font-bold text-gray-900">98%</p>
                <p className="text-sm text-gray-600">On-time Delivery</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-gray-900">85%</p>
                <p className="text-sm text-gray-600">Repeat Customers</p>
              </div>
            </div>
          </div>
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