'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Technology() {
  const [activeSection, setActiveSection] = useState(0);

  const technologies = [
    {
      id: 0,
      title: 'Rotational Molding Technology',
      icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
      description: 'Seamless single-piece construction for superior durability',
      details: [
        'No joints or weak seams',
        'Better pressure distribution',
        'Uniform wall thickness',
        'Enhanced structural integrity',
      ],
      benefits: ['Longer lifespan', 'Leak-proof design', 'Superior strength'],
    },
    {
      id: 1,
      title: 'Food-Grade Polyethylene',
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      description: 'Virgin non-toxic plastic safe for drinking water',
      details: [
        'BPA-free quality',
        'Safe drinking water storage',
        'No chemical leaching',
        'Meets international food safety standards',
      ],
      benefits: ['Health-safe', 'Certified materials', 'Pure water taste'],
    },
    {
      id: 2,
      title: 'Antimicrobial Inner Layer',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      description: 'Advanced protection against bacteria and algae',
      details: [
        'Prevents algae growth',
        'Suppresses bacteria development',
        'Improves water hygiene',
        'Reduces maintenance frequency',
      ],
      benefits: ['Cleaner water', 'Less cleaning', 'Healthier storage'],
    },
    {
      id: 3,
      title: 'UV Stabilization Technology',
      icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707',
      description: '2.5% carbon black protection for harsh African sunlight',
      details: [
        'Prevents cracking and brittleness',
        'Designed for harsh African sunlight',
        'Extended outdoor durability',
        'Temperature resistance',
      ],
      benefits: ['Weather-resistant', 'Long-lasting', 'UV protected'],
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Engineered for Over 25 Years of Reliability
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Advanced technology ensuring superior water storage solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Our Technology
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Click on each technology to learn more about our advanced manufacturing processes
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {technologies.map((tech, index) => (
              <motion.button
                key={tech.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => setActiveSection(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeSection === index
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {tech.title}
              </motion.button>
            ))}
          </div>

          {/* Active Technology Content */}
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-2xl p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-20 h-20 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={technologies[activeSection].icon} />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {technologies[activeSection].title}
                </h3>
                <p className="text-xl text-gray-600 mb-8">
                  {technologies[activeSection].description}
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                  <ul className="space-y-3">
                    {technologies[activeSection].details.map((detail, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Benefits:</h4>
                  <div className="flex flex-wrap gap-3">
                    {technologies[activeSection].benefits.map((benefit, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold"
                      >
                        {benefit}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8"
                >
                  <div className="bg-white rounded-xl p-6">
                    <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                      <svg className="w-48 h-48 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={technologies[activeSection].icon} />
                      </svg>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-gray-600 text-sm">Engineering Excellence</p>
                      <p className="text-blue-600 font-bold text-lg">Advanced Technology</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Certified</p>
                      <p className="text-xs text-gray-600">Quality Assured</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Engineering Process */}
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
              Our Manufacturing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Precision engineering at every step
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Material Selection', description: 'Premium food-grade polyethylene' },
              { step: '02', title: 'Rotational Molding', description: 'Seamless single-piece construction' },
              { step: '03', title: 'Quality Testing', description: 'Rigorous quality control checks' },
              { step: '04', title: 'Final Inspection', description: 'KEBS certification verification' },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-5xl font-bold text-blue-600 mb-4">{process.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
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
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading specifications for optimal performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { spec: 'Wall Thickness', value: '3-8mm', detail: 'Varies by capacity' },
              { spec: 'UV Protection', value: '2.5% Carbon Black', detail: 'African sunlight resistant' },
              { spec: 'Temperature Range', value: '-10°C to 60°C', detail: 'Wide operating range' },
              { spec: 'Material', value: 'LLDPE', detail: 'Linear Low-Density Polyethylene' },
              { spec: 'Food Grade', value: 'Yes', detail: 'BPA-free certified' },
              { spec: 'Warranty', value: '10 Years', detail: 'Manufacturer warranty' },
            ].map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{spec.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{spec.spec}</div>
                <div className="text-gray-600 text-sm">{spec.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance & Material Science */}
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
              Quality Assurance & Material Science
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium engineering standards for superior water storage
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Food Grade Polyethylene */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Food Grade Polyethylene</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Safe for drinking water</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Non-toxic</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Odorless</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Hygienic storage</span>
                </li>
              </ul>
            </motion.div>

            {/* UV Protection Technology */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">UV Protection Technology</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Integrated with 2.5% Carbon Black</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Prevents brittleness</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Prevents cracking and &apos;chalking&apos;</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Designed for harsh Kenyan sunlight</span>
                </li>
              </ul>
            </motion.div>

            {/* Double-Layer Technology */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Double-Layer Technology</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dark outer layer blocks sunlight</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Prevents algae growth</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Smooth inner layer for easy cleaning</span>
                </li>
              </ul>
            </motion.div>

            {/* One-Piece Seamless Build */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">One-Piece Seamless Build</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No joints</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No seams</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Virtually leak-proof</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Better structural integrity</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

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
              Experience Our Technology
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us to learn more about our advanced water storage solutions
            </p>
            <a
              href="https://wa.me/0740272542"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
            >
              Contact Our Experts
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
