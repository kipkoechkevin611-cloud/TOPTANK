'use client';

import { useCart } from '@/contexts/CartContext';
import { motion } from 'framer-motion';

export default function CartIcon() {
  const { getCartCount, setIsOpen } = useCart();
  const cartCount = getCartCount();

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
      aria-label="Open shopping cart"
    >
      <svg className="w-6 h-6 text-gray-700 hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      {cartCount > 0 && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
        >
          {cartCount}
        </motion.span>
      )}
    </button>
  );
}
