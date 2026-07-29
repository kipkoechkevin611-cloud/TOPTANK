'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { openWhatsAppOrder } from '@/lib/whatsapp';
import { Product, WhatsAppOrderData } from '@/types/product';

interface ProductCardProps extends Product {}

export default function ProductCard({
  id,
  name,
  capacity,
  dimensions,
  price,
  image,
  inStock,
  deliveryAvailable,
  category,
}: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [showQuickView, setShowQuickView] = useState(false);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const whatsappNumber = '254739447779';

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      capacity,
      price,
      image,
    });
  };

  const handleToggleWishlist = () => {
    if (isInWishlist(id)) {
      removeFromWishlist(id);
    } else {
      addToWishlist({
        id,
        name,
        capacity,
        price,
        image,
      });
    }
  };

  const handleWhatsAppOrder = () => {
    openWhatsAppOrder(whatsappNumber, {
      productName: name,
      capacity: capacity,
      price: price,
      quantity: quantity,
    });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -8, scale: 1.02 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-200 h-full flex flex-col"
      >
        {/* Product Image */}
        <div className="relative h-[280px] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={name}
            width={400}
            height={280}
            className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {!inStock && (
              <span className="bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md">
                Out of Stock
              </span>
            )}
            {deliveryAvailable && (
              <span className="bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md">
                Free Delivery
              </span>
            )}
          </div>

          {/* Quick View & Wishlist Buttons */}
          <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => setShowQuickView(true)}
              className="bg-white/95 backdrop-blur-sm p-2.5 rounded-full shadow-md hover:bg-white transition-colors"
              title="Quick View"
            >
              <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
            <button
              onClick={handleToggleWishlist}
              className="bg-white/95 backdrop-blur-sm p-2.5 rounded-full shadow-md hover:bg-white transition-colors"
              title={isInWishlist(id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
            >
              <svg className={`w-4 h-4 ${isInWishlist(id) ? 'text-red-500' : 'text-gray-700'}`} fill={isInWishlist(id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-5 flex flex-col flex-grow">
          <div className="mb-3">
            <h3 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
              {name}
            </h3>
            <p className="text-xs text-gray-500">{category}</p>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full text-xs font-semibold">
              {capacity}
            </span>
            <span className="text-xs text-gray-500">{dimensions}</span>
          </div>

          <div className="flex items-center justify-between mb-4 mt-auto">
            <span className="text-2xl font-bold text-gray-900">{price}</span>
            {inStock && (
              <span className="text-green-600 text-xs font-semibold">In Stock</span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!inStock}
            className="w-full bg-blue-600 text-white py-3.5 px-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none text-sm"
            aria-label={inStock ? `Add ${name} to cart` : 'Product out of stock'}
          >
            {inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
          <Link
            href={`/products/${id}`}
            className="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 mt-3 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none text-sm"
            aria-label={`View details for ${name}`}
          >
            View Details
          </Link>
        </div>
      </motion.div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {showQuickView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setShowQuickView(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center p-8">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <button
                    onClick={() => setShowQuickView(false)}
                    className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{name}</h2>
                  <p className="text-gray-600 mb-4">{category}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">{capacity}</span>
                      <span className="text-gray-600">{dimensions}</span>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-blue-600 mb-6">{price}</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                        className="w-20 px-4 py-2 border border-gray-300 rounded-lg text-center text-black bg-white"
                      />
                      <span className="text-gray-600">Quantity</span>
                    </div>
                    <button
                      onClick={handleAddToCart}
                      disabled={!inStock}
                      className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                    <button
                      onClick={handleWhatsAppOrder}
                      className="w-full bg-green-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
