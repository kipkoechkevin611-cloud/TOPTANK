'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import ProductCard from '@/components/ProductCard';

export default function Products() {
  const [activeTab, setActiveTab] = useState('cylindrical');

  const cylindricalTanks = [
    { id: 'cyl-100', name: 'Standard Cylindrical Tank', capacity: '100L', dimensions: '51cm x 64cm', price: 'KSh 2,610', image: '/All tanks.jpeg', inStock: true, deliveryAvailable: true, category: 'Cylindrical' },
    { id: 'cyl-1000', name: 'Standard Cylindrical Tank', capacity: '1,000L', dimensions: '101cm x 130cm', price: 'KSh 9,540', image: '/All tanks.jpeg', inStock: true, deliveryAvailable: true, category: 'Cylindrical' },
    { id: 'cyl-1500', name: 'Standard Cylindrical Tank', capacity: '1,500L', dimensions: '118cm x 150cm', price: 'KSh 13,410', image: '/All tanks.jpeg', inStock: true, deliveryAvailable: true, category: 'Cylindrical' },
    { id: 'cyl-2000', name: 'Standard Cylindrical Tank', capacity: '2,000L', dimensions: '130cm x 165cm', price: 'KSh 17,550', image: '/All tanks.jpeg', inStock: true, deliveryAvailable: true, category: 'Cylindrical' },
    { id: 'cyl-3000', name: 'Standard Cylindrical Tank', capacity: '3,000L', dimensions: '153cm x 183cm', price: 'KSh 24,000', image: '/All tanks.jpeg', inStock: true, deliveryAvailable: true, category: 'Cylindrical' },
    { id: 'cyl-5000', name: 'Standard Cylindrical Tank', capacity: '5,000L', dimensions: '185cm x 205cm', price: 'KSh 45,000', image: '/All tanks.jpeg', inStock: true, deliveryAvailable: true, category: 'Cylindrical' },
    { id: 'cyl-10000', name: 'Standard Cylindrical Tank', capacity: '10,000L', dimensions: '226cm x 243cm', price: 'KSh 96,750', image: '/All tanks.jpeg', inStock: true, deliveryAvailable: true, category: 'Cylindrical' },
    { id: 'cyl-15000', name: 'Standard Cylindrical Tank', capacity: '15,000L', dimensions: '275cm x 295cm', price: 'KSh 207,000', image: '/All tanks.jpeg', inStock: true, deliveryAvailable: true, category: 'Cylindrical' },
    { id: 'cyl-24000', name: 'Standard Cylindrical Tank', capacity: '24,000L', dimensions: '300cm x 350cm', price: 'KSh 424,350', image: '/All tanks.jpeg', inStock: true, deliveryAvailable: true, category: 'Cylindrical' },
  ];

  const loftTanks = [
    { id: 'loft-230', name: 'Rectangular Loft Tank', capacity: '230L', dimensions: '90cm x 64cm x 51cm', price: 'KSh 6,480', image: '/Rectangular loft tank.jpeg', inStock: true, deliveryAvailable: true, category: 'Loft' },
    { id: 'loft-500', name: 'Rectangular Loft Tank', capacity: '500L', dimensions: '142cm x 100cm x 41cm', price: 'KSh 10,800', image: '/Rectangular loft tank.jpeg', inStock: true, deliveryAvailable: true, category: 'Loft' },
    { id: 'loft-1000', name: 'Rectangular Loft Tank', capacity: '1,000L', dimensions: '175cm x 125cm x 60cm', price: 'KSh 15,300', image: '/Rectangular loft tank.jpeg', inStock: true, deliveryAvailable: true, category: 'Loft' },
  ];

  const industrialTanks = [
    { id: 'ind-underground-2000', name: 'Underground Spherical Tank', capacity: '2,000L', dimensions: '180cm x 190cm', price: 'KSh 49,680', image: '/Underground spherical.jpeg', inStock: true, deliveryAvailable: true, category: 'Industrial' },
    { id: 'ind-septic-2000', name: 'Septic Tank', capacity: '2,000L', dimensions: '190cm x 160cm', price: 'KSh 49,680', image: '/Underground spherical.jpeg', inStock: true, deliveryAvailable: true, category: 'Industrial' },
  ];

  const industrialBins = [
    { id: 'bin-60', name: 'Industrial Dustbin', capacity: '60L', dimensions: '40cm x 35cm', price: 'KSh 2,500', image: '/60liter.jpeg', inStock: true, deliveryAvailable: true, category: 'Bins' },
    { id: 'bin-90', name: 'Industrial Dustbin', capacity: '90L', dimensions: '45cm x 40cm', price: 'KSh 3,200', image: '/90 liter.jpeg', inStock: true, deliveryAvailable: true, category: 'Bins' },
    { id: 'bin-120', name: 'Large Outdoor Waste Bin', capacity: '120L', dimensions: '50cm x 45cm', price: 'KSh 4,000', image: '/120liter.jpeg', inStock: true, deliveryAvailable: true, category: 'Bins' },
    { id: 'bin-180', name: 'Large Outdoor Waste Bin', capacity: '180L', dimensions: '55cm x 50cm', price: 'KSh 5,500', image: '/180liter.jpeg', inStock: true, deliveryAvailable: true, category: 'Bins' },
    { id: 'bin-240', name: 'Large Outdoor Waste Bin', capacity: '240L', dimensions: '60cm x 55cm', price: 'KSh 7,200', image: '/240liter.jpeg', inStock: true, deliveryAvailable: true, category: 'Bins' },
    { id: 'bin-360', name: 'Commercial Garbage Container', capacity: '360L', dimensions: '70cm x 60cm', price: 'KSh 10,000', image: '/360liter.jpeg', inStock: true, deliveryAvailable: true, category: 'Bins' },
    { id: 'bin-750', name: 'Heavy-Duty Waste Management Bin', capacity: '750L', dimensions: '85cm x 75cm', price: 'KSh 18,000', image: '/750 liter.jpeg', inStock: true, deliveryAvailable: true, category: 'Bins' },
    { id: 'bin-1100', name: 'Heavy-Duty Waste Management Bin with Wheels', capacity: '1,100L', dimensions: '100cm x 85cm', price: 'KSh 25,000', image: '/1100liter bin with wheels.jpeg', inStock: true, deliveryAvailable: true, category: 'Bins' },
    { id: 'bin-nestable', name: 'Nestable Industrial Bin', capacity: '100L', dimensions: '50cm x 45cm', price: 'KSh 3,800', image: '/nestable.jpeg', inStock: true, deliveryAvailable: true, category: 'Bins' },
  ];

  const whatsappNumber = '0740272542';

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Premium water storage and industrial solutions for every need
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Banners */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 'cylindrical',
                name: 'Cylindrical Tanks',
                description: 'Premium vertical storage tanks',
                image: '/All tanks.jpeg',
              },
              {
                id: 'loft',
                name: 'Loft Tanks',
                description: 'Space-saving rectangular tanks',
                image: '/Rectangular loft tank.jpeg',
              },
              {
                id: 'industrial',
                name: 'Industrial Tanks',
                description: 'Heavy-duty underground solutions',
                image: '/Underground spherical.jpeg',
              },
              {
                id: 'bins',
                name: 'Industrial Bins',
                description: 'Waste management solutions',
                image: '/60liter.jpeg',
              },
            ].map((category) => (
              <motion.div
                key={category.id}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveTab(category.id)}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-white/80 text-sm">{category.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4">
            {[
              { id: 'cylindrical', name: 'Standard Cylindrical Tanks' },
              { id: 'loft', name: 'Rectangular Loft Tanks' },
              { id: 'industrial', name: 'Industrial & Underground' },
              { id: 'bins', name: 'Industrial Bins' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Standard Cylindrical Tanks */}
      {activeTab === 'cylindrical' && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Standard Cylindrical Storage Tanks</h2>
              <p className="text-gray-600 mb-6">
                Flagship vertical storage tanks designed for ground-level or raised platform installations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {cylindricalTanks.map((tank) => (
                <ProductCard
                  key={tank.id}
                  id={tank.id}
                  name={tank.name}
                  capacity={tank.capacity}
                  dimensions={tank.dimensions}
                  price={tank.price}
                  image={tank.image}
                  inStock={tank.inStock}
                  deliveryAvailable={tank.deliveryAvailable}
                  category={tank.category}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Rectangular Loft Tanks */}
      {activeTab === 'loft' && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Rectangular Loft Tanks</h2>
              <p className="text-gray-600 mb-6">
                Space-saving tanks engineered for indoor spaces such as ceiling lofts, attics, under-stair storage, and balconies
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {loftTanks.map((tank) => (
                <ProductCard
                  key={tank.id}
                  id={tank.id}
                  name={tank.name}
                  capacity={tank.capacity}
                  dimensions={tank.dimensions}
                  price={tank.price}
                  image={tank.image}
                  inStock={tank.inStock}
                  deliveryAvailable={tank.deliveryAvailable}
                  category={tank.category}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Industrial & Underground Tanks */}
      {activeTab === 'industrial' && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialized Industrial & Underground Tanks</h2>
              <p className="text-gray-600 mb-6">
                Heavy-duty tanks for industrial, agricultural, and underground applications
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {industrialTanks.map((tank) => (
                <ProductCard
                  key={tank.id}
                  id={tank.id}
                  name={tank.name}
                  capacity={tank.capacity}
                  dimensions={tank.dimensions}
                  price={tank.price}
                  image={tank.image}
                  inStock={tank.inStock}
                  deliveryAvailable={tank.deliveryAvailable}
                  category={tank.category}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Industrial Bins */}
      {activeTab === 'bins' && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industrial Bins & Waste Management</h2>
              <p className="text-gray-600 mb-6">
                Heavy-duty waste management solutions for commercial, industrial, and residential applications
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {industrialBins.map((bin) => (
                <ProductCard
                  key={bin.id}
                  id={bin.id}
                  name={bin.name}
                  capacity={bin.capacity}
                  dimensions={bin.dimensions}
                  price={bin.price}
                  image={bin.image}
                  inStock={bin.inStock}
                  deliveryAvailable={bin.deliveryAvailable}
                  category={bin.category}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our experts are ready to help you find the perfect water storage solution
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
            >
              Chat with Our Experts
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
