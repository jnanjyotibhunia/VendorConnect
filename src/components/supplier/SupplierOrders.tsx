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
  Download,
  User
} from 'lucide-react';

export default function SupplierOrders() {
  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const orders = [
    {
      id: 'ORD-2025-001',
      vendor: {
        name: 'Kumar Chaat Corner',
        phone: '+91 98765 43210',
        address: 'Connaught Place, Delhi',
        contact: 'Ravi Kumar'
      },
      items: [
        { name: 'Fresh Tomatoes', quantity: '10 kg', price: 350 },
        { name: 'Red Onions', quantity: '15 kg', price: 450 },
        { name: 'Potatoes', quantity: '20 kg', price: 500 }
      ],
      totalAmount: 1300,
      status: 'pending',
      orderDate: '2025-01-15T10:30:00',
      requestedDelivery: '2025-01-16T08:00:00',
      paymentStatus: 'pending',
      notes: 'Need fresh vegetables for evening rush. Please ensure quality.',
      priority: 'high'
    },
    {
      id: 'ORD-2025-002',
      vendor: {
        name: 'Delhi Street Food',
        phone: '+91 98765 43211',
        address: 'Karol Bagh, Delhi',
        contact: 'Amit Sharma'
      },
      items: [
        { name: 'Potatoes', quantity: '25 kg', price: 625 },
        { name: 'Carrots', quantity: '10 kg', price: 300 },
        { name: 'Cauliflower', quantity: '8 kg', price: 400 }
      ],
      totalAmount: 1325,
      status: 'confirmed',
      orderDate: '2025-01-15T14:20:00',
      requestedDelivery: '2025-01-16T07:00:00',
      paymentStatus: 'paid',
      notes: 'Early morning delivery required before 8 AM',
      priority: 'medium'
    },
    {
      id: 'ORD-2025-003',
      vendor: {
        name: 'Tasty Bites Corner',
        phone: '+91 98765 43212',
        address: 'Lajpat Nagar, Delhi',
        contact: 'Suresh Gupta'
      },
      items: [
        { name: 'Mixed Vegetables', quantity: '30 kg', price: 900 },
        { name: 'Green Chilies', quantity: '2 kg', price: 100 },
        { name: 'Ginger', quantity: '3 kg', price: 150 }
      ],
      totalAmount: 1150,
      status: 'shipped',
      orderDate: '2025-01-14T16:45:00',
      requestedDelivery: '2025-01-15T10:00:00',
      paymentStatus: 'paid',
      notes: 'Regular customer - priority delivery',
      priority: 'high'
    },
    {
      id: 'ORD-2025-004',
      vendor: {
        name: 'Spicy Junction',
        phone: '+91 98765 43213',
        address: 'Janpath, Delhi',
        contact: 'Raj Patel'
      },
      items: [
        { name: 'Fresh Tomatoes', quantity: '20 kg', price: 700 },
        { name: 'Red Onions', quantity: '15 kg', price: 450 }
      ],
      totalAmount: 1150,
      status: 'delivered',
      orderDate: '2025-01-14T09:15:00',
      requestedDelivery: '2025-01-14T15:00:00',
      paymentStatus: 'paid',
      notes: 'Standard delivery',
      priority: 'low'
    },
    {
      id: 'ORD-2025-005',
      vendor: {
        name: 'Quick Bites',
        phone: '+91 98765 43214',
        address: 'Paharganj, Delhi',
        contact: 'Vikash Singh'
      },
      items: [
        { name: 'Potatoes', quantity: '40 kg', price: 1000 },
        { name: 'Fresh Tomatoes', quantity: '15 kg', price: 525 }
      ],
      totalAmount: 1525,
      status: 'cancelled',
      orderDate: '2025-01-13T11:30:00',
      requestedDelivery: '2025-01-14T06:00:00',
      paymentStatus: 'refunded',
      notes: 'Cancelled due to quality concerns',
      priority: 'medium'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'confirmed':
        return <CheckCircle className="h-5 w-5 text-blue-500" />;
      case 'shipped':
        return <Truck className="h-5 w-5 text-purple-500" />;
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
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesTab = activeTab === 'all' || order.status === activeTab;
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.vendor.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const tabs = [
    { id: 'all', name: 'All Orders', count: orders.length },
    { id: 'pending', name: 'Pending', count: orders.filter(o => o.status === 'pending').length },
    { id: 'confirmed', name: 'Confirmed', count: orders.filter(o => o.status === 'confirmed').length },
    { id: 'shipped', name: 'Shipped', count: orders.filter(o => o.status === 'shipped').length },
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

  const handleStatusUpdate = (orderId: string, newStatus: string) => {
    // Handle status update logic here
    console.log(`Updating order ${orderId} to status: ${newStatus}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Management</h1>
        <p className="text-gray-600">Process and fulfill customer orders</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { name: 'Total Orders', value: orders.length, icon: Package, color: 'bg-blue-500' },
          { name: 'Pending Orders', value: orders.filter(o => o.status === 'pending').length, icon: Clock, color: 'bg-yellow-500' },
          { name: 'Revenue Today', value: `₹${orders.filter(o => o.status === 'delivered').reduce((sum, o) => sum + o.totalAmount, 0).toLocaleString()}`, icon: DollarSign, color: 'bg-green-500' },
          { name: 'Avg Order Value', value: `₹${Math.round(orders.reduce((sum, o) => sum + o.totalAmount, 0) / orders.length).toLocaleString()}`, icon: Truck, color: 'bg-purple-500' }
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
          <nav className="-mb-px flex space-x-8 px-6 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-green-600 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.name}
                <span className={`ml-2 py-0.5 px-2 rounded-full text-xs ${
                  activeTab === tab.id ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
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
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>
            <div className="flex gap-3">
              <button className="flex items-center px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </button>
              <button className="flex items-center px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
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
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(order.priority)}`}>
                        {order.priority.toUpperCase()} Priority
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <p className="text-gray-900 font-medium">{order.vendor.name}</p>
                      <span className="text-gray-400">•</span>
                      <p className="text-gray-600">{order.vendor.contact}</p>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Ordered: {formatDate(order.orderDate)}
                      </div>
                      <div className="flex items-center">
                        <Truck className="h-4 w-4 mr-1" />
                        Delivery: {formatDate(order.requestedDelivery)}
                      </div>
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

            {/* Order Details */}
            <div className="p-6">
              {/* Order Items */}
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

              {/* Vendor Contact & Address */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Delivery Address</h5>
                  <div className="flex items-start space-x-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">{order.vendor.name}</p>
                      <p>{order.vendor.address}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Contact Information</h5>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span>{order.vendor.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <User className="h-4 w-4" />
                      <span>{order.vendor.contact}</span>
                    </div>
                  </div>
                </div>
              </div>

              {order.notes && (
                <div className="mb-6">
                  <h5 className="font-medium text-gray-900 mb-2">Special Instructions</h5>
                  <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3">{order.notes}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-100">
                <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </button>
                
                {order.status === 'pending' && (
                  <>
                    <button 
                      onClick={() => handleStatusUpdate(order.id, 'confirmed')}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Confirm Order
                    </button>
                    <button 
                      onClick={() => handleStatusUpdate(order.id, 'cancelled')}
                      className="flex items-center px-4 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors"
                    >
                      <XCircle className="h-4 w-4 mr-2" />
                      Cancel Order
                    </button>
                  </>
                )}

                {order.status === 'confirmed' && (
                  <button 
                    onClick={() => handleStatusUpdate(order.id, 'shipped')}
                    className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <Truck className="h-4 w-4 mr-2" />
                    Mark as Shipped
                  </button>
                )}

                {order.status === 'shipped' && (
                  <button 
                    onClick={() => handleStatusUpdate(order.id, 'delivered')}
                    className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Package className="h-4 w-4 mr-2" />
                    Mark as Delivered
                  </button>
                )}

                <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Customer
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
            {activeTab === 'all' ? 'No orders have been placed yet' : `No ${activeTab} orders found`}
          </p>
        </div>
      )}
    </div>
  );
}