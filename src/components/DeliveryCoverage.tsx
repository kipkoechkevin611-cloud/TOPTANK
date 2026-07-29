'use client';

import { motion } from 'framer-motion';

export default function DeliveryCoverage() {
  const regions = [
    { name: 'Nairobi', counties: ['Nairobi'], deliveryTime: '24-48 hours', color: 'bg-blue-500' },
    { name: 'Central', counties: ['Kiambu', 'Muranga', 'Nyeri', 'Kirinyaga', 'Nyandarua'], deliveryTime: '2-3 days', color: 'bg-green-500' },
    { name: 'Coast', counties: ['Mombasa', 'Kilifi', 'Kwale', 'Tana River', 'Lamu'], deliveryTime: '3-5 days', color: 'bg-yellow-500' },
    { name: 'Eastern', counties: ['Machakos', 'Kitui', 'Makueni', 'Embu', 'Meru', 'Tharaka Nithi', 'Isiolo', 'Marsabit'], deliveryTime: '2-4 days', color: 'bg-orange-500' },
    { name: 'Western', counties: ['Kakamega', 'Vihiga', 'Bungoma', 'Busia'], deliveryTime: '3-4 days', color: 'bg-purple-500' },
    { name: 'Nyanza', counties: ['Kisumu', 'Siaya', 'Homa Bay', 'Migori', 'Kisii', 'Nyamira'], deliveryTime: '2-4 days', color: 'bg-pink-500' },
    { name: 'Rift Valley', counties: ['Nakuru', 'Baringo', 'Laikipia', 'Narok', 'Kajiado', 'Kericho', 'Bomet', 'West Pokot', 'Elgeyo Marakwet', 'Trans Nzoia', 'Uasin Gishu'], deliveryTime: '2-4 days', color: 'bg-cyan-500' },
    { name: 'North Eastern', counties: ['Garissa', 'Wajir', 'Mandera'], deliveryTime: '4-6 days', color: 'bg-red-500' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Kenya Delivery Coverage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver to all 47 counties across Kenya with fast and reliable shipping
          </p>
        </motion.div>

        {/* Map Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border-2 border-blue-100">
            {/* Simplified Kenya Map Representation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {regions.map((region, index) => (
                <motion.div
                  key={region.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className={`${region.color} rounded-xl p-4 text-white shadow-lg cursor-pointer`}
                >
                  <h3 className="font-bold text-lg mb-2">{region.name}</h3>
                  <p className="text-sm opacity-90 mb-2">{region.counties.length} counties</p>
                  <p className="text-xs font-semibold">{region.deliveryTime}</p>
                </motion.div>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Nairobi (24-48h)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Central (2-3d)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-cyan-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Rift Valley (2-4d)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Nyanza (2-4d)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Eastern (2-4d)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Western (3-4d)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Coast (3-5d)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span className="text-sm text-gray-600">North Eastern (4-6d)</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Delivery Info Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Delivery</h3>
            <p className="text-gray-600">
              Nairobi: 24-48 hours<br />
              Other regions: 2-6 days
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Free Delivery</h3>
            <p className="text-gray-600">
              Free delivery for orders<br />
              over KSh 50,000
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Nationwide</h3>
            <p className="text-gray-600">
              Delivery to all<br />
              47 counties
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
