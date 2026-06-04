'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useMemo } from 'react';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';

export default function Home() {
  const phoneNumber = '0740272542';
  const message = encodeURIComponent('Hello TopTank Kenya, I would like to inquire about your water tanks.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const particles = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 5 + Math.random() * 5,
      delay: Math.random() * 2,
    })), []
  );

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 bg-[url('/All tanks.jpeg')] bg-cover bg-center opacity-15" />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/80 to-slate-900/70" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-[600px] h-[600px] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, 80, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          <motion.div
            className="absolute top-40 right-10 w-[700px] h-[700px] bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.18, 0.1],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-[500px] h-[500px] bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.22, 0.1],
              x: [0, -60, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
              initial={{
                x: `${particle.x}%`,
                y: `${particle.y}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: particle.delay,
              }}
            />
          ))}
        </div>

        {/* Water Wave Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-600/40 to-transparent" />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-500/30 to-transparent"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.9 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full text-sm font-semibold mb-10 shadow-2xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                KEBS Diamond Mark of Quality
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.9 }}
                className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent"
              >
                Premium Water Storage Solutions Built for Kenya
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.9 }}
                className="text-2xl md:text-3xl text-blue-100 mb-12 leading-relaxed font-light"
              >
                Advanced rotationally molded tanks engineered for durability, hygiene, and long-term performance.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.9 }}
                className="flex flex-col sm:flex-row gap-5"
              >
                <Link
                  href="/products"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-5 rounded-2xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-center shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 text-lg"
                >
                  Explore Products
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-12 py-5 rounded-2xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 text-center shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 text-lg"
                >
                  Order Now
                </a>
              </motion.div>

              {/* Floating Statistics Cards */}
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.9 }}
                className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {[
                  { label: 'Years Experience', value: '25+' },
                  { label: 'Happy Customers', value: '10K+' },
                  { label: 'Tanks Sold', value: '50K+' },
                  { label: 'Warranty', value: '5 Years' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                  >
                    <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
                    <p className="text-blue-200 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 1.4 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/20">
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8">
                    <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 opacity-5"
                      >
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" fill="none" />
                          <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5" fill="none" />
                          <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" fill="none" />
                          <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="0.5" fill="none" />
                        </svg>
                      </motion.div>
                      <img
                        src="/All tanks.jpeg"
                        alt="TopTank Water Storage Solutions"
                        className="w-full h-full object-contain relative z-10 p-8"
                      />
                    </div>
                    <div className="mt-8 text-center">
                      <p className="text-white/90 text-lg font-medium">Premium Water Storage</p>
                      <p className="text-white font-bold text-3xl mt-2">100L - 25,000L</p>
                      <p className="text-cyan-300 text-lg mt-3 font-semibold">Your Water, Our Promise.</p>
                    </div>
                  </div>
                </div>

                {/* Floating Badges */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', delay: 0.6 }}
                  className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full text-base font-bold shadow-2xl"
                >
                  Best Seller
                </motion.div>
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', delay: 1.2 }}
                  className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full text-base font-bold shadow-2xl"
                >
                  Premium Quality
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.9 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="text-white/70"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose TopTank Kenya?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium quality water storage solutions trusted by thousands of Kenyans for over 25 years
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                title: 'KEBS Certified',
                description: 'Diamond Mark of Quality ensuring the highest standards',
              },
              {
                icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
                title: 'Seamless Design',
                description: 'Rotational molding for single-piece construction',
              },
              {
                icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
                title: 'Food Grade',
                description: 'BPA-free, safe for drinking water storage',
              },
              {
                icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707',
                title: 'UV Protected',
                description: '2.5% carbon black for African sunlight resistance',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
          <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Upgrade Your Water Storage?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Contact us today for a free quote and expert advice on the perfect water storage solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/products"
                className="bg-white text-blue-900 px-10 py-5 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl text-lg"
              >
                Browse Products
              </Link>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-10 py-5 rounded-2xl font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl text-lg"
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
