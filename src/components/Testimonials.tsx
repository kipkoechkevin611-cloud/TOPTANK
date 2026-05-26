'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  category: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Kamau',
    location: 'Nairobi',
    rating: 5,
    text: 'Excellent quality tanks! The 5000L tank I purchased has been serving my family perfectly for over 2 years now. Highly recommended for anyone looking for durable water storage solutions.',
    category: 'Residential',
    verified: true,
  },
  {
    id: 2,
    name: 'Mary Wanjiku',
    location: 'Mombasa',
    rating: 5,
    text: 'TopTank delivered our order within 3 days as promised. The installation was smooth and the tank is working perfectly. Great customer service!',
    category: 'Residential',
    verified: true,
  },
  {
    id: 3,
    name: 'Peter Ochieng',
    location: 'Kisumu',
    rating: 5,
    text: 'We purchased 10 tanks for our agricultural project. The quality is outstanding and the pricing was competitive. Will definitely order again for our next project.',
    category: 'Agricultural',
    verified: true,
  },
  {
    id: 4,
    name: 'Sarah Mwangi',
    location: 'Nakuru',
    rating: 4,
    text: 'Good quality tanks at reasonable prices. The delivery was a bit delayed but the customer service team kept us informed throughout. Overall satisfied with the purchase.',
    category: 'Commercial',
    verified: true,
  },
  {
    id: 5,
    name: 'David Kipkorir',
    location: 'Eldoret',
    rating: 5,
    text: 'The underground tank installation was handled professionally. The team was knowledgeable and the tank has been performing excellently. Best investment for our water storage needs.',
    category: 'Industrial',
    verified: true,
  },
  {
    id: 6,
    name: 'Grace Njeri',
    location: 'Thika',
    rating: 5,
    text: 'Purchased a loft tank for our apartment complex. Perfect fit and great quality. The WhatsApp ordering process was smooth and convenient.',
    category: 'Residential',
    verified: true,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [category, setCategory] = useState('all');

  const filteredTestimonials = category === 'all'
    ? testimonials
    : testimonials.filter(t => t.category === category);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted Across Kenya
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            See what our customers have to say about our premium water storage solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['all', 'Residential', 'Commercial', 'Agricultural', 'Industrial'].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setCurrentIndex(0);
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${category === cat
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-xl'
                  : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20'
                }`}
            >
              {cat === 'all' ? 'All Reviews' : cat}
            </button>
          ))}
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-xl">
                  {filteredTestimonials[currentIndex].name.charAt(0)}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex">
                    {renderStars(filteredTestimonials[currentIndex].rating)}
                  </div>
                  {filteredTestimonials[currentIndex].verified && (
                    <span className="flex items-center gap-1 text-sm text-green-400 bg-green-400/20 backdrop-blur-sm px-4 py-1 rounded-full border border-green-400/30">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Verified Purchase
                    </span>
                  )}
                </div>

                <p className="text-xl text-white/90 mb-6 leading-relaxed font-light">
                  &ldquo;{filteredTestimonials[currentIndex].text}&rdquo;
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white text-lg">{filteredTestimonials[currentIndex].name}</p>
                    <p className="text-sm text-blue-200">{filteredTestimonials[currentIndex].location}</p>
                  </div>
                  <span className="text-sm font-semibold text-cyan-400 bg-cyan-400/20 backdrop-blur-sm px-4 py-1 rounded-full border border-cyan-400/30">
                    {filteredTestimonials[currentIndex].category}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white/20 transition-all border border-white/20"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              {filteredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-cyan-400 w-6' : 'bg-white/30'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white/20 transition-all border border-white/20"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-24 grid md:grid-cols-4 gap-8"
        >
          {[
            { value: '10,000+', label: 'Happy Customers' },
            { value: '25+', label: 'Years Experience' },
            { value: '47', label: 'Counties Served' },
            { value: '4.9/5', label: 'Average Rating' },
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <p className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</p>
              <p className="text-white/80">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
