'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Pricing() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    capacity: '',
    quantity: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = '0740272542';
    const message = encodeURIComponent(
      `PRICING INQUIRY\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProduct: ${formData.product}\nCapacity: ${formData.capacity}\nQuantity: ${formData.quantity}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const priceRanges = [
    {
      category: 'Small Tanks',
      capacity: '100L - 500L',
      priceRange: 'KSh 2,600 - KSh 8,000',
      description: 'Perfect for residential use and small spaces',
    },
    {
      category: 'Medium Tanks',
      capacity: '1000L - 5000L',
      priceRange: 'KSh 8,500 - KSh 45,000',
      description: 'Ideal for homes and small businesses',
    },
    {
      category: 'Large Tanks',
      capacity: '5000L - 10000L',
      priceRange: 'KSh 45,000 - KSh 120,000',
      description: 'Suitable for commercial and industrial use',
    },
    {
      category: 'Industrial Systems',
      capacity: '10000L - 25000L',
      priceRange: 'KSh 120,000 - KSh 400,000+',
      description: 'For large-scale industrial applications',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Pricing Information</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transparent pricing for premium water storage solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Factors Affecting Price
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our pricing is based on several key factors to ensure you get the best value
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
                title: 'Tank Capacity',
                description: 'Larger capacity tanks require more material and advanced manufacturing',
              },
              {
                icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
                title: 'Wall Thickness',
                description: 'Thicker walls provide enhanced durability and longevity',
              },
              {
                icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
                title: 'Product Category',
                description: 'Different product types have varying complexity and features',
              },
            ].map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={factor.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{factor.title}</h3>
                <p className="text-gray-600">{factor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Ranges */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Price Ranges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Competitive pricing across all tank categories
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {priceRanges.map((range, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-sm text-blue-600 font-semibold mb-2">{range.category}</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{range.capacity}</div>
                <div className="text-xl font-bold text-blue-600 mb-4">{range.priceRange}</div>
                <p className="text-gray-600 text-sm">{range.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Request a Quote
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get a personalized quote for your specific requirements
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              onSubmit={handleSubmit}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
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

              <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Product Type *
                  </label>
                  <select
                    required
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="">Select product type</option>
                    <option value="Standard Cylindrical Tank">Standard Cylindrical Tank</option>
                    <option value="Deluxe Cylindrical Tank">Deluxe Cylindrical Tank</option>
                    <option value="Rectangular Loft Tank">Rectangular Loft Tank</option>
                    <option value="Underground Spherical Tank">Underground Spherical Tank</option>
                    <option value="Nestable Tank">Nestable Tank</option>
                    <option value="Conical Hopper Tank">Conical Hopper Tank</option>
                    <option value="Septic Tank">Septic Tank</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Required Capacity
                  </label>
                  <input
                    type="text"
                    value={formData.capacity}
                    onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="e.g., 5000L"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Quantity
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="1"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Requirements
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Tell us about your specific requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Submit Quote Request
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Bulk Inquiry Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Bulk Orders & Special Projects
              </h2>
              <p className="text-xl text-blue-100 mb-6">
                Planning a large-scale project? We offer competitive pricing for bulk orders and custom solutions for special projects.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Volume discounts for bulk orders',
                  'Custom manufacturing for special requirements',
                  'Project consultation and planning',
                  'Dedicated account management',
                  'Flexible payment terms',
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/0740272542"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
              >
                Contact for Bulk Pricing
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Bulk Inquiry</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Estimated Quantity
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                    <option value="">Select quantity range</option>
                    <option value="10-50">10-50 units</option>
                    <option value="50-100">50-100 units</option>
                    <option value="100-500">100-500 units</option>
                    <option value="500+">500+ units</option>
                  </select>
                </div>
                <a
                  href="https://wa.me/0740272542"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-center"
                >
                  Submit Request
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our sales team is ready to help you find the perfect solution within your budget
            </p>
            <a
              href="https://wa.me/0740272542"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
            >
              Chat with Sales Team
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
