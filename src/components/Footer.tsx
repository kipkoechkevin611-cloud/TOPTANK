'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/WhatsApp Image 2026-05-22 at 8.33.20 PM.jpeg"
                alt="TopTank Kenya Logo"
                className="w-14 h-14 object-contain"
              />
              <div>
                <span className="text-2xl font-bold">TopTank</span>
                <span className="text-sm text-gray-400 block -mt-1">Kenya</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Kenya&apos;s trusted water storage technology since 2007. Premium quality tanks engineered for durability, hygiene, and long-term performance.
            </p>
            <p className="text-cyan-400 font-semibold text-lg mb-2">Your Water, Our Promise.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">About Us</Link></li>
              <li><Link href="/technology" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Technology</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Products</Link></li>
              <li><Link href="/installation" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Installation</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Pricing</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Product Categories</h3>
            <ul className="space-y-3">
              <li><Link href="/products" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Cylindrical Tanks</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Loft Tanks</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Industrial Tanks</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Industrial Bins</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-3 text-gray-400 mb-6">
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="https://wa.me/0740272542" className="hover:text-white transition-colors">0740 272 542</a>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:toptank662@gmail.com" className="hover:text-white transition-colors">toptank662@gmail.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-cyan-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">Mombasa Road, P.O. Box 3115, Nairobi, Athi River</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <h4 className="font-semibold mb-3 text-sm">Subscribe to Newsletter</h4>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1E1vPbu11u/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-blue-600 text-white p-3 rounded-xl transition-all duration-300 hover:scale-105" title="Follow us on Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
            <p className="text-gray-400 text-sm">© 2026 TopTank Kenya. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
