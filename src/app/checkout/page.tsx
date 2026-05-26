'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';
import Link from 'next/link';

export default function Checkout() {
  const { cart, getCartTotal, clearCart } = useCart();
  const whatsappNumber = '254736317583';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    deliveryLocation: '',
    deliveryInstructions: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all required fields
    if (!formData.name || !formData.phone || !formData.email || !formData.deliveryLocation) {
      alert('Please fill in all required fields (Full Name, Phone Number, Email, and Delivery Location)');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Validate phone number (should be at least 10 digits)
    const phoneRegex = /^[0-9]{10,}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      alert('Please enter a valid phone number (at least 10 digits)');
      return;
    }

    const orderItems = cart.map((item, index) => {
      const priceValue = parseInt(item.price.replace(/[^0-9]/g, '')) || 0;
      return `${index + 1}. ${item.name} (${item.capacity}) × ${item.quantity} — KSh ${(priceValue * item.quantity).toLocaleString()}`;
    }).join('\n');

    const message = encodeURIComponent(
      `Hello TopTank Kenya,\n\nI would like to place an order for:\n\n${orderItems}\n\n--- CUSTOMER DETAILS ---\n\nCustomer Name: ${formData.name}\nPhone Number: ${formData.phone}\nEmail: ${formData.email}\nDelivery Location: ${formData.deliveryLocation}\nDelivery Instructions: ${formData.deliveryInstructions}\nAdditional Notes: ${formData.notes}\n\n--- ORDER SUMMARY ---\n\nSubtotal: KSh ${getCartTotal().toLocaleString()}\nDelivery Fee: FREE (Countrywide Delivery)\nTotal Amount: KSh ${getCartTotal().toLocaleString()}\n\n✅ FREE DELIVERY COUNTRYWIDE\n\nPlease assist with payment and delivery process.`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <svg className="w-24 h-24 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h1>
          <p className="text-gray-600 mb-6">Add some products to proceed with checkout</p>
          <Link href="/products" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Checkout</h1>
          <p className="text-gray-600">Complete your order details below</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              {/* Payment Policy Notice */}
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-yellow-800 mb-1">Payment Policy</p>
                    <p className="text-sm text-yellow-700">Payment must be made before delivery processing begins. Please ensure you have your payment method ready.</p>
                  </div>
                </div>
              </div>

              {/* Customer Information */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Customer Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="07XXXXXXXXX"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Information */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Delivery Information</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Delivery Location *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.deliveryLocation}
                      onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Enter your full delivery address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Delivery Instructions
                    </label>
                    <textarea
                      rows={3}
                      value={formData.deliveryInstructions}
                      onChange={(e) => setFormData({ ...formData, deliveryInstructions: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Any specific delivery instructions (e.g., gate code, landmark)"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Additional Notes</h2>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Any additional notes or special requests"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors shadow-lg"
              >
                Order Now
              </button>
            </motion.form>
          </div>

          {/* Order Summary */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-6 sticky top-24"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain p-2" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm truncate">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.capacity}</p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-blue-600">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-6 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold">KSh {getCartTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Delivery Fee</span>
                  <span className="font-semibold">FREE (Countrywide)</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-gray-900 pt-3 border-t">
                  <span>Total</span>
                  <span className="text-blue-600">KSh {getCartTotal().toLocaleString()}</span>
                </div>
              </div>

              {/* Free Delivery Notice */}
              <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm font-semibold text-green-800">✅ FREE DELIVERY COUNTRYWIDE</p>
                </div>
                <p className="text-xs text-green-700 mt-1">We deliver to all 47 counties in Kenya at no extra cost</p>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Secure Order</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Fast Delivery</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
