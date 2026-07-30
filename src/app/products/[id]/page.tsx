'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ProductGallery from '@/components/ProductGallery';
import WhatsAppOrderForm from '@/components/WhatsAppOrderForm';
import { useCart } from '@/contexts/CartContext';
import { openWhatsAppOrder } from '@/lib/whatsapp';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);
  const [isWhatsAppFormOpen, setIsWhatsAppFormOpen] = useState(false);
  const { addToCart } = useCart();
  const whatsappNumber = '0739447779';

  // Mock product data - in production, this would come from MongoDB
  const product = {
    id: params.id,
    name: '5000L Standard Cylindrical Tank',
    category: 'Standard Cylindrical Tanks',
    capacity: '5000 Litres',
    dimensions: 'Diameter: 1.85m, Height: 2.1m',
    price: 'KSh 24,500',
    images: [
      '/All tanks.jpeg',
      '/All tanks.jpeg',
      '/All tanks.jpeg',
    ],
    inStock: true,
    deliveryAvailable: true,
    specifications: [
      { label: 'Material', value: 'Food Grade Polyethylene' },
      { label: 'UV Protection', value: '2.5% Carbon Black' },
      { label: 'Layers', value: 'Double-Layer Technology' },
      { label: 'Construction', value: 'One-Piece Seamless' },
      { label: 'Certification', value: 'KEBS Diamond Mark' },
      { label: 'Warranty', value: '5 Years' },
      { label: 'Height', value: '2.1m' },
      { label: 'Diameter', value: '1.85m' },
    ],
    features: [
      'Safe for drinking water storage',
      'UV resistant for harsh Kenyan sunlight',
      'Prevents algae growth with double-layer design',
      'Virtually leak-proof seamless construction',
      'Easy to clean smooth inner surface',
      'Durable and long-lasting',
    ],
    installation: [
      'Install on a level concrete base',
      'Ensure proper support structure',
      'Provide adequate ventilation',
      'Position away from direct heat sources',
      'Regular inspection recommended',
    ],
    delivery: {
      timeline: '24-48 hours within Nairobi, 2-5 days nationwide',
      areas: 'Nationwide delivery to all 47 counties',
      cost: 'Free delivery for orders over KSh 50,000',
      installation: 'Professional installation available upon request',
    },
    faq: [
      {
        question: 'What is the delivery time?',
        answer: 'Delivery within Nairobi takes 24-48 hours. Nationwide delivery takes 2-5 business days depending on location.',
      },
      {
        question: 'Does this tank come with a warranty?',
        answer: 'Yes, all TopTank products come with a 5-year manufacturer warranty covering manufacturing defects.',
      },
      {
        question: 'Is installation included?',
        answer: 'Installation is not included in the price but professional installation services are available upon request at an additional cost.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept M-Pesa, bank transfers, and cash on delivery for eligible locations.',
      },
      {
        question: 'How do I maintain the tank?',
        answer: 'Clean the tank annually with mild soap and water. Inspect for any damage regularly. Keep the tank covered to prevent debris accumulation.',
      },
    ],
  };

  const relatedProducts = [
    {
      id: '2',
      name: '3000L Standard Cylindrical Tank',
      capacity: '3000 Litres',
      price: 'KSh 16,500',
      image: '/assets/products/tank-2.jpg',
    },
    {
      id: '3',
      name: '10000L Standard Cylindrical Tank',
      capacity: '10000 Litres',
      price: 'KSh 42,000',
      image: '/assets/products/tank-3.jpg',
    },
    {
      id: '4',
      name: '1000L Loft Tank',
      capacity: '1000 Litres',
      price: 'KSh 4,500',
      image: '/assets/products/loft-1.jpg',
    },
  ];

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      capacity: product.capacity,
      price: product.price,
      image: product.images[0],
    });
  };

  const handleWhatsAppOrder = () => {
    setIsWhatsAppFormOpen(true);
  };

  const handleWhatsAppFormSubmit = (customerData: any) => {
    openWhatsAppOrder(whatsappNumber, {
      customerName: customerData.fullName,
      phoneNumber: customerData.phoneNumber,
      email: customerData.email,
      county: customerData.county,
      town: customerData.town,
      deliveryLocation: customerData.deliveryLocation,
      productName: product.name,
      capacity: product.capacity,
      price: product.price,
      quantity: quantity,
      additionalNotes: customerData.additionalNotes,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/products" className="text-gray-600 hover:text-blue-600">Products</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-semibold">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ProductGallery images={product.images} productName={product.name} />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                {product.category}
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

            <div className="mb-6">
              <p className="text-3xl font-bold text-gray-900">{product.price}</p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-900">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <span>{product.capacity}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-900">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
                <span>{product.dimensions}</span>
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-4 mb-6">
              {product.inStock ? (
                <span className="flex items-center gap-2 text-green-600 bg-green-100 px-4 py-2 rounded-full text-sm font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  In Stock
                </span>
              ) : (
                <span className="flex items-center gap-2 text-red-600 bg-red-100 px-4 py-2 rounded-full text-sm font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Out of Stock
                </span>
              )}
              {product.deliveryAvailable && (
                <span className="flex items-center gap-2 text-blue-600 bg-blue-100 px-4 py-2 rounded-full text-sm font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Free Delivery
                </span>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Quantity</label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  min="1"
                  className="w-20 h-12 text-center text-xl font-semibold border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black bg-white"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                  aria-label="Increase quantity"
                >
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${product.inStock
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
              <button
                onClick={handleWhatsAppOrder}
                className="flex-1 bg-green-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Order Now
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Secure Order</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Quality Guaranteed</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {product.specifications.map((spec, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-600 font-medium">{spec.label}</span>
                <span className="text-gray-900 font-semibold">{spec.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">Key Features</h2>
          <ul className="space-y-3">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Installation Guide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-blue-50 rounded-2xl p-8 mb-8"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">Installation Recommendations</h2>
          <ul className="space-y-3">
            {product.installation.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Delivery Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-green-50 rounded-2xl p-8 mb-8"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">Delivery Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Delivery Timeline</h3>
                <p className="text-gray-600">{product.delivery.timeline}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Coverage Areas</h3>
                <p className="text-gray-600">{product.delivery.areas}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Delivery Cost</h3>
                <p className="text-gray-600">{product.delivery.cost}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Installation Service</h3>
                <p className="text-gray-600">{product.delivery.installation}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {product.faq.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                    <h3 className="font-semibold text-gray-900">{item.question}</h3>
                    <svg className="w-5 h-5 text-gray-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="p-4 bg-white">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Related Products */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">Related Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/products/${relatedProduct.id}`}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{relatedProduct.capacity}</p>
                  <p className="font-bold text-blue-600">{relatedProduct.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      <WhatsAppOrderForm
        isOpen={isWhatsAppFormOpen}
        onClose={() => setIsWhatsAppFormOpen(false)}
        onSubmit={handleWhatsAppFormSubmit}
        orderDetails={{
          productName: product.name,
          capacity: product.capacity,
          price: product.price,
          quantity: quantity,
        }}
      />
    </div>
  );
}
