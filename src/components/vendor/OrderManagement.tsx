import React, { useState } from 'react';
import { 
  Package, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Truck,
  MapPin,
  Phone,
  Calendar,
  DollarSign,
  Filter,
  Search,
  Eye,
  Download
} from 'lucide-react';

export default function OrderManagement() {
  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'confirmed' | 'delivered' | 'cancelled'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const orders = [
    {
      id: 'ORD-2025-001',
      supplier: {
        name: 'Fresh Mart Vegetables',
        phone: '+91 98765 43210',
        address: 'Sector 18, Noida'
      },
      items: [
        { name: 'Tomatoes', quantity: '10 kg', price: 350 },
        { name: 'Onions', quantity: '15 kg', price: 450 },
        { name: 'Potatoes', quantity: '20 kg', price: 800 }
      ],
      totalAmount: 1600,
      status: 'delivered',
      orderDate: '2025-01-15T10:30:00',
      deliveryDate: '2025-01-15T14:30:00',
      paymentStatus: 'paid',
      deliveryAddress: 'Kumar Chaat Corner, CP, Delhi',
      notes: 'Please deliver fresh vegetables only'
    },
    {
      id: 'ORD-2025-002',
      supplier: {
        name: 'Spice Kingdom',
        phone: '+91 98765 43211',
        address: 'Spice Market, Delhi'
      },
      items: [
        { name: 'Garam Masala', quantity: '2 kg', price: 400 },
        { name: 'Red Chili Powder', quantity: '3 kg', price: 600 },
        { name: 'Turmeric Powder', quantity: '2 kg', price: 300 }
      ],
      totalAmount: 1300,
      status: 'confirmed',
      orderDate: '2025-01-14T16:20:00',
      deliveryDate: '2025-01-15T18:00:00',
      paymentStatus: 'pending',
      deliveryAddress: 'Kumar Chaat Corner, CP, Delhi',
      notes: 'Need fresh ground spices'
    },
    {
      id: 'ORD-2025-003',
      supplier: {
        name: 'Pure Dairy Farm',
        phone: '+91 98765 43212',
        address: 'Dairy Colony, Gurgaon'
      },
      items: [
        { name: 'Fresh Milk', quantity: '20 liters', price: 600 },
        { name: 'Paneer', quantity: '3 kg', price: 900 },
        { name: 'Curd', quantity: '5 kg', price: 300 }
      ],
      totalAmount: 1800,
      status: 'pending',
      orderDate: '2025-01-14T09:15:00',
      deliveryDate: '2025-01-15T07:00:00',
      paymentStatus: 'pending',
      deliveryAddress: 'Kumar Chaat Corner, CP, Delhi',
      notes: 'Early morning delivery required'
    },
    {
      id: 'ORD-2025-004',
      supplier: {
        name: 'Golden Grains Co.',
        phone: '+91 98765 43213',
        address: 'Grain Market, Faridabad'
      },
      items: [
        { name: 'Basmati Rice', quantity: '25 kg', price: 1250 },
        { name: 'Wheat Flour', quantity: '20 kg', price: 800 },
        { name: 'Chana Dal', quantity: '10 kg', price: 600 }
      ],
      totalAmount: 2650,
      status: 'cancelled',
      orderDate: '2025-01-13T14:45:00',
      deliveryDate: null,
      paymentStatus: 'refunded',
      deliveryAddress: 'Kumar Chaat Corner, CP, Delhi',
      notes: 'Cancelled due to quality issues'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'confirmed':
        return <CheckCircle className="h-5 w-5 text-blue-500" />;
      case 'delivered':
        return <Package className="h-5 w-5 text-green-500" />;
      case 'cancelled':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesTab = activeTab === 'all' || order.status === activeTab;
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.supplier.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const tabs = [
    { id: 'all', name: 'All Orders', count: orders.length },
    { id: 'pending', name: 'Pending', count: orders.filter(o => o.status === 'pending').length },
    { id: 'confirmed', name: 'Confirmed', count: orders.filter(o => o.status === 'confirmed').length },
    { id: 'delivered', name: 'Delivered', count: orders.filter(o => o.status === 'delivered').length },
    { id: 'cancelled', name: 'Cancelled', count: orders.filter(o => o.status === 'cancelled').length }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Management</h1>
        <p className="text-gray-600">Track and manage all your orders</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { name: 'Total Orders', value: orders.length, icon: Package, color: 'bg-blue-500' },
          { name: 'This Month', value: orders.filter(o => new Date(o.orderDate).getMonth() === new Date().getMonth()).length, icon: Calendar, color: 'bg-green-500' },
          { name: 'Total Spent', value: `₹${orders.reduce((sum, o) => sum + o.totalAmount, 0).toLocaleString()}`, icon: DollarSign, color: 'bg-purple-500' },
          { name: 'Avg Order Value', value: `₹${Math.round(orders.reduce((sum, o) => sum + o.totalAmount, 0) / orders.length).toLocaleString()}`, icon: Truck, color: 'bg-orange-500' }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-8">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.name}
                <span className={`ml-2 py-0.5 px-2 rounded-full text-xs ${
                  activeTab === tab.id ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Search and Actions */}
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-3">
              <button className="flex items-center px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </button>
              <button className="flex items-center px-4 py-2.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                <Download className="h-4 w-4 mr-2" />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {filteredOrders.map((order) => (
          <div key={order.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Order Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {getStatusIcon(order.status)}
                  </div>
                  <div>
                    <div className="flex items-center space-x-3 mb-1">
                      <h3 className="text-lg font-semibold text-gray-900">{order.id}</h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </div>
                    <p className="text-gray-600">{order.supplier.name}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Ordered: {formatDate(order.orderDate)}
                      </div>
                      {order.deliveryDate && (
                        <div className="flex items-center">
                          <Truck className="h-4 w-4 mr-1" />
                          Delivery: {formatDate(order.deliveryDate)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">₹{order.totalAmount.toLocaleString()}</p>
                  <p className={`text-sm font-medium ${
                    order.paymentStatus === 'paid' ? 'text-green-600' : 
                    order.paymentStatus === 'refunded' ? 'text-blue-600' : 'text-orange-600'
                  }`}>
                    Payment: {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
                  </p>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="p-6">
              <h4 className="font-medium text-gray-900 mb-4">Order Items</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {order.items.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-semibold text-gray-900">₹{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Delivery Address</h5>
                  <div className="flex items-start space-x-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <p>{order.deliveryAddress}</p>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Supplier Contact</h5>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span>{order.supplier.phone}</span>
                    </div>
                    <div className="flex items-start space-x-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>{order.supplier.address}</span>
                    </div>
                  </div>
                </div>
              </div>

              {order.notes && (
                <div className="mt-6">
                  <h5 className="font-medium text-gray-900 mb-2">Special Instructions</h5>
                  <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3">{order.notes}</p>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-gray-100">
                <button className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </button>
                {order.status === 'pending' && (
                  <button className="flex items-center px-4 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors">
                    <XCircle className="h-4 w-4 mr-2" />
                    Cancel Order
                  </button>
                )}
                {order.status === 'delivered' && (
                  <button className="flex items-center px-4 py-2 border border-green-300 text-green-700 rounded-lg hover:bg-green-50 transition-colors">
                    <Package className="h-4 w-4 mr-2" />
                    Reorder
                  </button>
                )}
                <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Supplier
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredOrders.length === 0 && (
        <div className="text-center py-12">
          <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Package className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No orders found</h3>
          <p className="text-gray-600 mb-4">
            {activeTab === 'all' ? 'You haven\'t placed any orders yet' : `No ${activeTab} orders found`}
          </p>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors">
            Place Your First Order
          </button>
        </div>
      )}
    </div>
  );
}