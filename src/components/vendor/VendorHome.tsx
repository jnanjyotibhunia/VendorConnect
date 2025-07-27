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
  MapPin,
  Phone
} from 'lucide-react';

export default function VendorHome() {
  const stats = [
    { name: 'This Month Orders', value: '24', change: '+12%', icon: ShoppingCart, color: 'text-blue-600 bg-blue-100' },
    { name: 'Total Spent', value: '₹48,500', change: '+8%', icon: DollarSign, color: 'text-green-600 bg-green-100' },
    { name: 'Active Suppliers', value: '8', change: '+2', icon: Users, color: 'text-purple-600 bg-purple-100' },
    { name: 'Avg. Delivery Time', value: '2.5 hrs', change: '-15min', icon: Clock, color: 'text-orange-600 bg-orange-100' },
  ];

  const recentOrders = [
    {
      id: 'ORD-001',
      supplier: 'Fresh Vegetables Co.',
      items: 'Tomatoes, Onions, Potatoes',
      amount: '₹2,450',
      status: 'Delivered',
      date: '2025-01-15'
    },
    {
      id: 'ORD-002',
      supplier: 'Spice Master',
      items: 'Garam Masala, Red Chili Powder',
      amount: '₹1,200',
      status: 'In Transit',
      date: '2025-01-14'
    },
    {
      id: 'ORD-003',
      supplier: 'Dairy Fresh',
      items: 'Milk, Paneer, Curd',
      amount: '₹890',
      status: 'Confirmed',
      date: '2025-01-14'
    }
  ];

  const nearbySuppliers = [
    {
      name: 'Metro Vegetables',
      category: 'Fresh Vegetables',
      distance: '0.8 km',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Golden Spices',
      category: 'Spices & Masalas',
      distance: '1.2 km',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Pure Dairy',
      category: 'Dairy Products',
      distance: '1.5 km',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ];

  const quickActions = [
    { name: 'Find Suppliers', href: '/vendor/suppliers', icon: Users, color: 'bg-blue-500 hover:bg-blue-600' },
    { name: 'Place Order', href: '/vendor/suppliers', icon: ShoppingCart, color: 'bg-green-500 hover:bg-green-600' },
    { name: 'Track Orders', href: '/vendor/orders', icon: Package, color: 'bg-purple-500 hover:bg-purple-600' },
    { name: 'View Analytics', href: '/vendor/analytics', icon: TrendingUp, color: 'bg-orange-500 hover:bg-orange-600' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Mobile welcome header */}
      <div className="md:hidden mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Kumar Chaat Corner</p>
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
        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
              <Link to="/vendor/orders" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
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
                      <p className="font-medium text-gray-900">{order.supplier}</p>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                        order.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
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

        {/* Nearby Suppliers */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Nearby Suppliers</h3>
              <Link to="/vendor/suppliers" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                Explore All
              </Link>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {nearbySuppliers.map((supplier, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <img
                    src={supplier.image}
                    alt={supplier.name}
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium text-gray-900">{supplier.name}</p>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">{supplier.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{supplier.category}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <MapPin className="h-3 w-3 mr-1" />
                      {supplier.distance} away
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tips & Insights */}
      <div className="bg-gradient-to-br from-orange-500 to-green-600 rounded-xl p-6 text-white mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">💡 Business Insight</h3>
            <p className="text-orange-100 mb-4">
              You've saved ₹3,200 this month by using group buying. Join more group orders to save even more!
            </p>
            <Link
              to="/vendor/suppliers"
              className="bg-white text-orange-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Join Group Orders
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="hidden md:block">
            <TrendingUp className="h-16 w-16 text-orange-200" />
          </div>
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Emergency Contacts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center p-3 bg-red-50 rounded-lg">
            <Phone className="h-5 w-5 text-red-600 mr-3" />
            <div>
              <p className="font-medium text-gray-900">Support Helpline</p>
              <p className="text-sm text-gray-600">1800-123-4567</p>
            </div>
          </div>
          <div className="flex items-center p-3 bg-blue-50 rounded-lg">
            <Phone className="h-5 w-5 text-blue-600 mr-3" />
            <div>
              <p className="font-medium text-gray-900">Order Issues</p>
              <p className="text-sm text-gray-600">1800-123-4568</p>
            </div>
          </div>
          <div className="flex items-center p-3 bg-green-50 rounded-lg">
            <Phone className="h-5 w-5 text-green-600 mr-3" />
            <div>
              <p className="font-medium text-gray-900">Payment Help</p>
              <p className="text-sm text-gray-600">1800-123-4569</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}