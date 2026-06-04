'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';

interface ProductCardProps {
  id: string;
  name: string;
  capacity: string;
  dimensions: string;
  price: string;
  image: string;
  inStock: boolean;
  deliveryAvailable: boolean;
  category: string;
}

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
  const whatsappNumber = '254736317583';

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
    const message = encodeURIComponent(
      `Hello TopTank Kenya,\n\nI would like to order:\n\n${name} (${capacity})\nQuantity: ${quantity}\nPrice: ${price}\n\nPlease assist with payment and delivery.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -12, scale: 1.02 }}
        className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-3xl transition-all duration-500 group border border-gray-100"
      >
        {/* Product Image */}
        <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain p-10 group-hover:scale-110 transition-transform duration-700"
          />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {!inStock && (
              <span className="bg-red-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                Out of Stock
              </span>
            )}
            {deliveryAvailable && (
              <span className="bg-green-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                Free Delivery
              </span>
            )}
          </div>

          {/* Quick View & Wishlist Buttons */}
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => setShowQuickView(true)}
              className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors"
              title="Quick View"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
            <button
              onClick={handleToggleWishlist}
              className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors"
              title={isInWishlist(id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
            >
              <svg className={`w-5 h-5 ${isInWishlist(id) ? 'text-red-500' : 'text-gray-700'}`} fill={isInWishlist(id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                {name}
              </h3>
              <p className="text-sm text-gray-500">{category}</p>
            </div>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
              {capacity}
            </span>
          </div>

          <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            {dimensions}
          </div>

          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-gray-900">{price}</span>
            {inStock && (
              <span className="text-green-600 text-sm font-semibold">In Stock</span>
            )}
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleAddToCart}
              disabled={!inStock}
              className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
            <button
              onClick={handleWhatsAppOrder}
              className="flex-1 bg-green-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Order Now
            </button>
          </div>
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
                        className="w-20 px-4 py-2 border border-gray-300 rounded-lg text-center"
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
