'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function CustomerReviews() {
  const [selectedReview, setSelectedReview] = useState<number | null>(null);

  const reviews = [
    {
      id: 1,
      name: 'John Kamau',
      location: 'Nairobi',
      rating: 5,
      date: 'January 2026',
      product: '5,000L Cylindrical Tank',
      review: 'Excellent quality tank! Delivered on time and the installation was smooth. The tank is durable and has been working perfectly for my home water storage needs.',
      avatar: 'JK',
      deliveryPhoto: '/delivery-1.jpg',
    },
    {
      id: 2,
      name: 'Mary Wanjiku',
      location: 'Mombasa',
      rating: 5,
      date: 'December 2025',
      product: '1,000L Loft Tank',
      review: 'Perfect fit for my balcony space. The loft tank design is space-saving and the quality is outstanding. Very satisfied with the purchase and the customer service was excellent.',
      avatar: 'MW',
      deliveryPhoto: '/delivery-2.jpg',
    },
    {
      id: 3,
      name: 'Peter Ochieng',
      location: 'Kisumu',
      rating: 5,
      date: 'November 2025',
      product: '10,000L Cylindrical Tank',
      review: 'Best investment for my farm. The tank is huge and stores enough water for all my agricultural needs. Delivery was fast and the team was professional.',
      avatar: 'PO',
      deliveryPhoto: '/delivery-3.jpg',
    },
    {
      id: 4,
      name: 'Grace Njeri',
      location: 'Nakuru',
      rating: 5,
      date: 'October 2025',
      product: '2,000L Cylindrical Tank',
      review: 'High-quality product at a reasonable price. The tank is sturdy and well-made. I appreciate the warranty and the excellent customer support.',
      avatar: 'GN',
      deliveryPhoto: '/delivery-4.jpg',
    },
    {
      id: 5,
      name: 'David Mutua',
      location: 'Eldoret',
      rating: 5,
      date: 'September 2025',
      product: 'Industrial Bin 360L',
      review: 'Perfect for our waste management needs. The bin is durable and easy to clean. Great value for money and the delivery was prompt.',
      avatar: 'DM',
      deliveryPhoto: '/delivery-5.jpg',
    },
    {
      id: 6,
      name: 'Sarah Achieng',
      location: 'Thika',
      rating: 5,
      date: 'August 2025',
      product: '3,000L Cylindrical Tank',
      review: 'Excellent quality and fast delivery. The tank was delivered within 48 hours and the installation team was very professional. Highly recommended!',
      avatar: 'SA',
      deliveryPhoto: '/delivery-6.jpg',
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Customer Reviews
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers say about their experience with TopTank Kenya
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Customer Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {review.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {renderStars(review.rating)}
              </div>

              {/* Review */}
              <p className="text-gray-600 mb-4 leading-relaxed">{review.review}</p>

              {/* Product Info */}
              <div className="bg-gray-50 rounded-xl p-4 mb-4">
                <p className="text-sm text-gray-500">Purchased: {review.product}</p>
                <p className="text-sm text-gray-400">{review.date}</p>
              </div>

              {/* Delivery Photo */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white font-semibold">Delivery Photo</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Happy Customers', value: '10,000+' },
            { label: '5-Star Reviews', value: '98%' },
            { label: 'Repeat Customers', value: '75%' },
            { label: 'On-Time Delivery', value: '99%' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
