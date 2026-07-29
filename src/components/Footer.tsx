'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/WhatsApp Image 2026-05-22 at 8.33.20 PM.jpeg"
                alt="TopTank Kenya Logo"
                width={56}
                height={56}
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
            <p className="text-cyan-400 font-semibold text-lg mb-4">Your Water, Our Promise.</p>
            
            {/* Business Hours */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <h4 className="font-semibold mb-3 text-sm text-cyan-400">Business Hours</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </li>
              </ul>
            </div>
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
              <li><Link href="/products" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Underground Tanks</Link></li>
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
                <a href="https://wa.me/254739447779" className="hover:text-white transition-colors">0739 447 779</a>
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
                <span className="text-sm">Mombasa Road, P.O. Box 3115<br />Nairobi, Athi River</span>
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
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-blue-400 text-white p-3 rounded-xl transition-all duration-300 hover:scale-105" title="Follow us on Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-pink-600 text-white p-3 rounded-xl transition-all duration-300 hover:scale-105" title="Follow us on Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069 3.204 0 3.584.012 4.849.069 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838c-3.403 0-3.802.014-5.104.045-2.672.121-3.976 1.415-4.096 4.096-.031 1.302-.045 1.7-.045 5.104 0 3.403.014 3.802.045 5.104.121 2.672 1.415 3.976 4.096 4.096 1.302.031 1.7.045 5.104.045 3.403 0 3.802-.014 5.104-.045 2.672-.121 3.976-1.415 4.096-4.096.031-1.302.045-1.7.045-5.104 0-3.403-.014-3.802-.045-5.104-.121-2.672-1.415-3.976-4.096-4.096-1.302-.031-1.7-.045-5.104-.045zm0 2.316c3.34 0 3.734.013 5.018.043 2.447.111 3.778.943 3.896 3.896.03 1.284.043 1.678.043 5.018 0 3.34-.013 3.734-.043 5.018-.118 2.453-.949 3.785-3.896 3.896-1.284.03-1.678.043-5.018.043-3.34 0-3.734-.013-5.018-.043-2.447-.111-3.778-.943-3.896-3.896-.03-1.284-.043-1.678-.043-5.018 0-3.34.013-3.734.043-5.018.118-2.453.949-3.785 3.896-3.896 1.284-.03 1.678-.043 5.018-.043zm0 5.838a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-2.316a2.184 2.184 0 110-4.368 2.184 2.184 0 010 4.368zm7.5-4.5a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-blue-700 text-white p-3 rounded-xl transition-all duration-300 hover:scale-105" title="Follow us on LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <div className="flex flex-col md:flex-row gap-4 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
            <p className="text-gray-400 text-sm">© 2026 TopTank Kenya. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
