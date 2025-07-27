import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  Clock, 
  Truck, 
  Phone,
  ShoppingCart,
  Users,
  Package
} from 'lucide-react';

export default function SupplierDiscovery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('distance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'vegetables', name: 'Fresh Vegetables' },
    { id: 'spices', name: 'Spices & Masalas' },
    { id: 'dairy', name: 'Dairy Products' },
    { id: 'grains', name: 'Grains & Pulses' },
    { id: 'oil', name: 'Oil & Ghee' },
    { id: 'snacks', name: 'Snacks & Namkeen' }
  ];

  const suppliers = [
    {
      id: 1,
      name: 'Fresh Mart Vegetables',
      category: 'Fresh Vegetables',
      rating: 4.8,
      totalOrders: 1200,
      distance: '0.8 km',
      deliveryTime: '30-45 min',
      minOrder: '₹500',
      deliveryFee: 'Free',
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      specialties: ['Organic', 'Farm Fresh', 'Daily Delivery'],
      phone: '+91 98765 43210',
      address: 'Sector 18, Noida',
      products: ['Tomatoes', 'Onions', 'Potatoes', 'Carrots', 'Spinach'],
      groupBuying: true
    },
    {
      id: 2,
      name: 'Spice Kingdom',
      category: 'Spices & Masalas',
      rating: 4.9,
      totalOrders: 850,
      distance: '1.2 km',
      deliveryTime: '45-60 min',
      minOrder: '₹300',
      deliveryFee: '₹30',
      image: 'https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      specialties: ['Pure Quality', 'Ground Fresh', 'Wholesale Rates'],
      phone: '+91 98765 43211',
      address: 'Spice Market, Delhi',
      products: ['Garam Masala', 'Turmeric', 'Red Chili', 'Coriander', 'Cumin'],
      groupBuying: true
    },
    {
      id: 3,
      name: 'Pure Dairy Farm',
      category: 'Dairy Products',
      rating: 4.7,
      totalOrders: 2100,
      distance: '1.5 km',
      deliveryTime: '20-30 min',
      minOrder: '₹200',
      deliveryFee: 'Free',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      specialties: ['A2 Milk', 'Farm Fresh', '24/7 Available'],
      phone: '+91 98765 43212',
      address: 'Dairy Colony, Gurgaon',
      products: ['Fresh Milk', 'Paneer', 'Curd', 'Butter', 'Ghee'],
      groupBuying: false
    },
    {
      id: 4,
      name: 'Golden Grains Co.',
      category: 'Grains & Pulses',
      rating: 4.6,
      totalOrders: 950,
      distance: '2.1 km',
      deliveryTime: '60-90 min',
      minOrder: '₹1000',
      deliveryFee: 'Free',
      image: 'https://images.pexels.com/photos/1537170/pexels-photo-1537170.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      specialties: ['Bulk Orders', 'Premium Quality', 'Same Day Delivery'],
      phone: '+91 98765 43213',
      address: 'Grain Market, Faridabad',
      products: ['Basmati Rice', 'Wheat', 'Dal', 'Chickpeas', 'Lentils'],
      groupBuying: true
    },
    {
      id: 5,
      name: 'Healthy Oils Ltd.',
      category: 'Oil & Ghee',
      rating: 4.5,
      totalOrders: 680,
      distance: '2.8 km',
      deliveryTime: '45-75 min',
      minOrder: '₹800',
      deliveryFee: '₹50',
      image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      specialties: ['Cold Pressed', 'Chemical Free', 'Bulk Discounts'],
      phone: '+91 98765 43214',
      address: 'Industrial Area, Delhi',
      products: ['Mustard Oil', 'Sunflower Oil', 'Coconut Oil', 'Ghee', 'Sesame Oil'],
      groupBuying: true
    },
    {
      id: 6,
      name: 'Crispy Snacks Hub',
      category: 'Snacks & Namkeen',
      rating: 4.4,
      totalOrders: 420,
      distance: '1.9 km',
      deliveryTime: '30-45 min',
      minOrder: '₹400',
      deliveryFee: '₹25',
      image: 'https://images.pexels.com/photos/1543763/pexels-photo-1543763.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      specialties: ['Fresh Made', 'Variety Pack', 'Custom Orders'],
      phone: '+91 98765 43215',
      address: 'Snack Street, Noida',
      products: ['Samosa', 'Kachori', 'Namkeen', 'Bhujia', 'Mixture'],
      groupBuying: false
    }
  ];

  const filteredSuppliers = suppliers.filter(supplier => {
    const matchesSearch = supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         supplier.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || supplier.category.toLowerCase().includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const sortedSuppliers = [...filteredSuppliers].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'orders':
        return b.totalOrders - a.totalOrders;
      case 'distance':
      default:
        return parseFloat(a.distance) - parseFloat(b.distance);
    }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Suppliers</h1>
        <p className="text-gray-600">Discover verified suppliers in your area</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search suppliers, products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="distance">Sort by Distance</option>
              <option value="rating">Sort by Rating</option>
              <option value="orders">Sort by Popularity</option>
            </select>

            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === 'grid' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === 'list' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600'
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>

        {/* Active Group Buying Banner */}
        <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Users className="h-5 w-5 text-green-600 mr-2" />
              <div>
                <p className="font-medium text-green-900">Active Group Buying Opportunities</p>
                <p className="text-sm text-green-700">Join others to get better prices on bulk orders</p>
              </div>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
              View Groups
            </button>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-600">
          Found {sortedSuppliers.length} suppliers {selectedCategory !== 'all' && `in ${categories.find(c => c.id === selectedCategory)?.name}`}
        </p>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <MapPin className="h-4 w-4" />
          <span>Showing suppliers within 5km</span>
        </div>
      </div>

      {/* Suppliers Grid/List */}
      <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
        {sortedSuppliers.map((supplier) => (
          <div key={supplier.id} className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow ${viewMode === 'list' ? 'flex' : ''}`}>
            <div className={viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}>
              <img 
                src={supplier.image} 
                alt={supplier.name}
                className={`object-cover ${viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'}`}
              />
            </div>
            
            <div className="p-6 flex-1">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{supplier.name}</h3>
                  <p className="text-sm text-gray-600">{supplier.category}</p>
                </div>
                {supplier.groupBuying && (
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Group Buying
                  </span>
                )}
              </div>

              {/* Rating and Orders */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium text-gray-900">{supplier.rating}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Package className="h-4 w-4 mr-1" />
                  {supplier.totalOrders} orders
                </div>
              </div>

              {/* Key Info */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  {supplier.distance}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-1" />
                  {supplier.deliveryTime}
                </div>
                <div className="flex items-center text-gray-600">
                  <ShoppingCart className="h-4 w-4 mr-1" />
                  Min: {supplier.minOrder}
                </div>
                <div className="flex items-center text-gray-600">
                  <Truck className="h-4 w-4 mr-1" />
                  {supplier.deliveryFee}
                </div>
              </div>

              {/* Specialties */}
              <div className="flex flex-wrap gap-2 mb-4">
                {supplier.specialties.map((specialty, index) => (
                  <span key={index} className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded">
                    {specialty}
                  </span>
                ))}
              </div>

              {/* Products Preview */}
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-1">Popular products:</p>
                <p className="text-sm text-gray-900">{supplier.products.slice(0, 3).join(', ')}...</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                  View Products
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Phone className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {sortedSuppliers.length > 0 && (
        <div className="text-center mt-12">
          <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            Load More Suppliers
          </button>
        </div>
      )}

      {/* No Results */}
      {sortedSuppliers.length === 0 && (
        <div className="text-center py-12">
          <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Search className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No suppliers found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search terms or filters</p>
          <button 
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}