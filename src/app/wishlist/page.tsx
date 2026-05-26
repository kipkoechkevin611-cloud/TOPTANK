'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useWishlist } from '@/contexts/WishlistContext';
import { useCart } from '@/contexts/CartContext';
import type { WishlistItem } from '@/contexts/WishlistContext';

export default function Wishlist() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (item: WishlistItem) => {
    addToCart({
      id: item.id,
      name: item.name,
      capacity: item.capacity,
      price: item.price,
      image: item.image,
    });
    removeFromWishlist(item.id);
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <svg className="w-24 h-24 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Your wishlist is empty</h1>
          <p className="text-gray-600 mb-6">Save your favorite products for later</p>
          <Link href="/products" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Wishlist</h1>
          <p className="text-gray-600">{wishlist.length} items saved</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {wishlist.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <img src={item.image} alt={item.name} className="w-full h-full object-contain p-8" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{item.capacity}</p>
                <p className="font-bold text-blue-600 mb-4">{item.price}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleMoveToCart(item)}
                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="bg-red-100 text-red-600 p-2 rounded-lg hover:bg-red-200 transition-colors"
                    aria-label="Remove from wishlist"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {wishlist.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center"
          >
            <button
              onClick={() => {
                if (confirm('Are you sure you want to clear your wishlist?')) {
                  clearWishlist();
                }
              }}
              className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Clear Wishlist
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
