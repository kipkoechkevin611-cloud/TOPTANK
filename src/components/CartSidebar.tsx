'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';

export default function CartSidebar() {
  const { cart, isOpen, setIsOpen, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const whatsappNumber = '254740272542';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    deliveryLocation: '',
    deliveryInstructions: '',
  });

  const [showForm, setShowForm] = useState(false);

  const handleProceedToDetails = () => {
    setShowForm(true);
  };

  const handleWhatsAppCheckout = (e: React.FormEvent) => {
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
      `Hello TopTank Kenya,\n\nI would like to place an order for:\n\n${orderItems}\n\n--- CUSTOMER DETAILS ---\n\nCustomer Name: ${formData.name}\nPhone Number: ${formData.phone}\nEmail: ${formData.email}\nDelivery Location: ${formData.deliveryLocation}\nDelivery Instructions: ${formData.deliveryInstructions}\n\n--- ORDER SUMMARY ---\n\nSubtotal: KSh ${getCartTotal().toLocaleString()}\nDelivery Fee: FREE (Countrywide Delivery)\nTotal Amount: KSh ${getCartTotal().toLocaleString()}\n\n✅ FREE DELIVERY COUNTRYWIDE\n\nPlease assist with payment and delivery process.`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    clearCart();
    setIsOpen(false);
    setShowForm(false);
    setFormData({ name: '', phone: '', email: '', deliveryLocation: '', deliveryInstructions: '' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white/95 backdrop-blur-xl shadow-2xl z-50 flex flex-col border-l border-white/20"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200/50 bg-gradient-to-r from-blue-600 to-cyan-600">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Shopping Cart</h2>
                  <span className="text-white/80 text-sm">{cart.length} items</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-gray-600 mb-2">Your cart is empty</p>
                  <p className="text-sm text-gray-500">Add some products to get started</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      className="flex gap-4 bg-gradient-to-br from-gray-50 to-gray-100/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/50 hover:shadow-lg transition-shadow"
                    >
                      <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                        <img src={item.image} alt={item.name} className="w-full h-full object-contain p-3" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 mb-1 truncate">{item.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{item.capacity}</p>
                        <p className="text-lg font-bold text-blue-600">{item.price}</p>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                          title="Remove item"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                        <div className="flex items-center gap-2 bg-white rounded-lg p-1 shadow-sm">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          </button>
                          <span className="w-8 text-center font-semibold text-gray-900">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-gray-200/50 p-6 space-y-4 bg-gradient-to-t from-gray-50 to-white">
                {!showForm ? (
                  <>
                    <div className="space-y-3">
                      <div className="flex justify-between text-gray-600">
                        <span>Subtotal</span>
                        <span className="font-semibold">KSh {getCartTotal().toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>Delivery Fee</span>
                        <span className="font-semibold">FREE (Countrywide)</span>
                      </div>
                      <div className="flex justify-between text-2xl font-bold text-gray-900 pt-3 border-t border-gray-200">
                        <span>Total</span>
                        <span className="text-blue-600">KSh {getCartTotal().toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Free Delivery Notice */}
                    <div className="bg-green-50/80 backdrop-blur-sm border border-green-200/50 rounded-xl p-3">
                      <p className="text-xs font-semibold text-green-800">✅ FREE DELIVERY COUNTRYWIDE</p>
                    </div>

                    <button
                      onClick={handleProceedToDetails}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      Proceed to Checkout
                    </button>

                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-full bg-gray-100 text-gray-900 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                    >
                      Continue Shopping
                    </button>
                  </>
                ) : (
                  <form onSubmit={handleWhatsAppCheckout} className="space-y-4">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Customer Details</h3>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                        placeholder="07XXXXXXXXX"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Delivery Location *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.deliveryLocation}
                        onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                        placeholder="Enter your full delivery address"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Delivery Instructions
                      </label>
                      <textarea
                        rows={2}
                        value={formData.deliveryInstructions}
                        onChange={(e) => setFormData({ ...formData, deliveryInstructions: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                        placeholder="Any specific delivery instructions"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors shadow-lg"
                    >
                      Order Now
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="w-full bg-gray-100 text-gray-900 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                    >
                      Back to Cart
                    </button>
                  </form>
                )}
              </div>
            )
            }
          </motion.div >
        </>
      )
      }
    </AnimatePresence >
  );
}
