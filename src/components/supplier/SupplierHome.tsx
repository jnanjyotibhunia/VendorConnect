import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  ShoppingCart, 
  Clock, 
  DollarSign, 
  Package, 
  Users,
  Star,
  ArrowRight,
  Plus,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export default function SupplierHome() {
  const stats = [
    { name: 'Total Orders', value: '156', change: '+18%', icon: ShoppingCart, color: 'text-blue-600 bg-blue-100' },
    { name: 'Revenue', value: '₹2,85,000', change: '+24%', icon: DollarSign, color: 'text-green-600 bg-green-100' },
    { name: 'Active Products', value: '48', change: '+3', icon: Package, color: 'text-purple-600 bg-purple-100' },
    { name: 'Customer Rating', value: '4.8', change: '+0.2', icon: Star, color: 'text-orange-600 bg-orange-100' },
  ];

  const recentOrders = [
    {
      id: 'ORD-001',
      vendor: 'Kumar Chaat Corner',
      items: 'Tomatoes (10kg), Onions (15kg)',
      amount: '₹1,600',
      status: 'pending',
      date: '2025-01-15',
      urgent: true
    },
    {
      id: 'ORD-002',
      vendor: 'Delhi Street Food',
      items: 'Potatoes (20kg), Carrots (5kg)',
      amount: '₹1,200',
      status: 'confirmed',
      date: '2025-01-15',
      urgent: false
    },
    {
      id: 'ORD-003',
      vendor: 'Tasty Bites Corner',
      items: 'Mixed Vegetables (25kg)',
      amount: '₹2,200',
      status: 'delivered',
      date: '2025-01-14',
      urgent: false
    }
  ];

  const topProducts = [
    {
      name: 'Fresh Tomatoes',
      orders: 45,
      revenue: '₹45,000',
      stock: 120,
      lowStock: false,
      image: 'https://images.pexels.com/photos/533360/pexels-photo-533360.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Onions',
      orders: 38,
      revenue: '₹32,000',
      stock: 8,
      lowStock: true,
      image: 'https://images.pexels.com/photos/144248/onions-food-flame-kitchen-144248.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Potatoes',
      orders: 42,
      revenue: '₹38,000',
      stock: 95,
      lowStock: false,
      image: 'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ];

  const quickActions = [
    { name: 'Add Product', href: '/supplier/products', icon: Plus, color: 'bg-green-500 hover:bg-green-600' },
    { name: 'View Orders', href: '/supplier/orders', icon: ShoppingCart, color: 'bg-blue-500 hover:bg-blue-600' },
    { name: 'Update Inventory', href: '/supplier/products', icon: Package, color: 'bg-purple-500 hover:bg-purple-600' },
    { name: 'View Analytics', href: '/supplier/analytics', icon: TrendingUp, color: 'bg-orange-500 hover:bg-orange-600' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Mobile welcome header */}
      <div className="md:hidden mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Fresh Supplies Co.</p>
      </div>

      {/* Quick Actions - Mobile Priority */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {quickActions.map((action) => (
          <Link
            key={action.name}
            to={action.href}
            className={`${action.color} text-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105`}
          >
            <action.icon className="h-6 w-6 mb-2" />
            <p className="text-sm font-medium">{action.name}</p>
          </Link>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <div className="flex items-center">
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  <span className="ml-2 text-sm text-green-600 font-medium">{stat.change}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Pending Orders */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
              <Link to="/supplier/orders" className="text-green-600 hover:text-green-700 font-medium text-sm">
                View All
              </Link>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium text-gray-900">{order.vendor}</p>
                      <div className="flex items-center space-x-2">
                        {order.urgent && (
                          <AlertCircle className="h-4 w-4 text-red-500" />
                        )}
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                          order.status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{order.items}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">{order.amount}</p>
                      <p className="text-xs text-gray-500">{order.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Top Products</h3>
              <Link to="/supplier/products" className="text-green-600 hover:text-green-700 font-medium text-sm">
                Manage All
              </Link>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium text-gray-900">{product.name}</p>
                      {product.lowStock && (
                        <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                          Low Stock
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{product.orders} orders</span>
                      <span>{product.stock} kg left</span>
                      <span className="font-medium text-gray-900">{product.revenue}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Business Insights */}
      <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-xl p-6 text-white mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">📈 Business Growth</h3>
            <p className="text-green-100 mb-4">
              Your sales increased by 24% this month! Consider expanding your product catalog to capture more demand.
            </p>
            <Link
              to="/supplier/products"
              className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Add More Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="hidden md:block">
            <TrendingUp className="h-16 w-16 text-green-200" />
          </div>
        </div>
      </div>

      {/* Notifications & Alerts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Inventory Alerts</h3>
          <div className="space-y-3">
            <div className="flex items-center p-3 bg-red-50 rounded-lg">
              <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
              <div>
                <p className="font-medium text-red-900">Low Stock Alert</p>
                <p className="text-sm text-red-700">Onions - Only 8kg remaining</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
              <Clock className="h-5 w-5 text-yellow-600 mr-3" />
              <div>
                <p className="font-medium text-yellow-900">Restock Reminder</p>
                <p className="text-sm text-yellow-700">Carrots will run out in 2 days</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center p-3 bg-green-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              <div>
                <p className="font-medium text-green-900">Order Delivered</p>
                <p className="text-sm text-green-700">ORD-003 to Tasty Bites Corner</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-blue-50 rounded-lg">
              <Users className="h-5 w-5 text-blue-600 mr-3" />
              <div>
                <p className="font-medium text-blue-900">New Customer</p>
                <p className="text-sm text-blue-700">Spicy Street joined your network</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Summary */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">This Month's Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <ShoppingCart className="h-8 w-8 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Order Fulfillment</h4>
            <p className="text-2xl font-bold text-blue-600 mb-1">98%</p>
            <p className="text-sm text-gray-600">On-time delivery rate</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Customer Satisfaction</h4>
            <p className="text-2xl font-bold text-green-600 mb-1">4.8/5</p>
            <p className="text-sm text-gray-600">Average rating</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Growth Rate</h4>
            <p className="text-2xl font-bold text-purple-600 mb-1">+24%</p>
            <p className="text-sm text-gray-600">Revenue increase</p>
          </div>
        </div>
      </div>
    </div>
  );
}