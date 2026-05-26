'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Check if user is authenticated
    const token = document.cookie.includes('token');
    if (!token) {
      router.push('/admin/login');
    } else {
      setIsAuthenticated(true);
      fetchReviews();
    }
    setLoading(false);
  }, [router]);

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/reviews');
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error('Failed to fetch reviews:', error);
    }
  };

  const handleApproveReview = async (id: string) => {
    try {
      await fetch(`/api/reviews/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ approved: true }),
      });
      fetchReviews();
    } catch (error) {
      console.error('Failed to approve review:', error);
    }
  };

  const handleDeleteReview = async (id: string) => {
    if (!confirm('Are you sure you want to delete this review?')) return;
    try {
      await fetch(`/api/reviews/${id}`, { method: 'DELETE' });
      fetchReviews();
    } catch (error) {
      console.error('Failed to delete review:', error);
    }
  };

  const handleLogout = () => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TT</span>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">TopTank</span>
                <span className="text-sm text-gray-600 block -mt-1">Admin Dashboard</span>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 font-semibold ${activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-4 py-2 font-semibold ${activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
          >
            Reviews ({reviews.filter(r => !r.approved).length} pending)
          </button>
        </div>

        {activeTab === 'overview' && (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Total Products</p>
                    <p className="text-3xl font-bold text-gray-900">15</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Total Reviews</p>
                    <p className="text-3xl font-bold text-gray-900">{reviews.length}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Pending Reviews</p>
                    <p className="text-3xl font-bold text-gray-900">{reviews.filter(r => !r.approved).length}</p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Approved Reviews</p>
                    <p className="text-3xl font-bold text-gray-900">{reviews.filter(r => r.approved).length}</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Link
                href="/admin/products"
                className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Add Product</h3>
                    <p className="text-gray-600 text-sm">Create new product listing</p>
                  </div>
                </div>
              </Link>

              <Link
                href="/admin/products"
                className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Manage Products</h3>
                    <p className="text-gray-600 text-sm">Edit or delete products</p>
                  </div>
                </div>
              </Link>

              <button
                onClick={() => setActiveTab('reviews')}
                className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Manage Reviews</h3>
                    <p className="text-gray-600 text-sm">Approve or delete reviews</p>
                  </div>
                </div>
              </button>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    { action: 'New review received', time: '2 hours ago', type: 'review' },
                    { action: 'Product updated: Deluxe Cylindrical Tank', time: '5 hours ago', type: 'product' },
                    { action: 'New order received', time: '1 day ago', type: 'order' },
                    { action: 'Review approved', time: '2 days ago', type: 'review' },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${activity.type === 'review' ? 'bg-green-500' :
                            activity.type === 'product' ? 'bg-blue-500' :
                              'bg-purple-500'
                          }`} />
                        <span className="text-gray-700">{activity.action}</span>
                      </div>
                      <span className="text-gray-500 text-sm">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'reviews' && (
          <div className="bg-white rounded-xl shadow">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-900">Customer Reviews</h2>
            </div>
            <div className="p-6">
              {reviews.length === 0 ? (
                <p className="text-gray-600 text-center py-8">No reviews yet</p>
              ) : (
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review._id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold text-gray-900">{review.customerName}</p>
                          <p className="text-sm text-gray-600">{review.customerEmail}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-yellow-500">{'★'.repeat(review.rating)}</span>
                          {!review.approved && (
                            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Pending</span>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">{review.text}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{review.category}</span>
                        <div className="flex gap-2">
                          {!review.approved && (
                            <button
                              onClick={() => handleApproveReview(review._id)}
                              className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
                            >
                              Approve
                            </button>
                          )}
                          <button
                            onClick={() => handleDeleteReview(review._id)}
                            className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
