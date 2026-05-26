'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: 'General',
    question: 'What is the warranty period for TopTank water tanks?',
    answer: 'All TopTank water tanks come with a 10-year warranty against manufacturing defects. This covers any issues with the tank\'s structural integrity, leaks, or material defects under normal use conditions.',
  },
  {
    category: 'General',
    question: 'Are TopTank tanks safe for drinking water storage?',
    answer: 'Yes, all TopTank tanks are made from food-grade polyethylene that is BPA-free and certified by KEBS with the Diamond Mark of Quality. They are safe for storing drinking water and meet all international safety standards.',
  },
  {
    category: 'Installation',
    question: 'What type of base is required for tank installation?',
    answer: 'TopTank tanks require a level concrete base or a properly compacted gravel base. The base should be flat, stable, and able to support the full weight of the tank when filled. For larger tanks, we recommend a reinforced concrete slab.',
  },
  {
    category: 'Installation',
    question: 'Do you provide installation services?',
    answer: 'Yes, we offer professional installation services across Kenya. Our team of experienced technicians will ensure your tank is installed correctly and safely. Contact us for installation quotes and scheduling.',
  },
  {
    category: 'Delivery',
    question: 'What areas do you deliver to?',
    answer: 'We deliver to all 47 counties in Kenya. Our delivery network covers major cities including Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, and their surrounding areas. Delivery times vary by location but typically range from 2-7 business days.',
  },
  {
    category: 'Delivery',
    question: 'How much does delivery cost?',
    answer: 'We offer free delivery to major urban areas for orders above a certain value. For other locations, delivery fees are calculated based on distance and tank size. Contact us for a specific delivery quote to your location.',
  },
  {
    category: 'Payment',
    question: 'What payment methods do you accept?',
    answer: 'We accept M-Pesa, bank transfers, and cash payments. For large orders, we also accept mobile money from other providers. Payment must be made before delivery processing begins.',
  },
  {
    category: 'Payment',
    question: 'Can I pay in installments?',
    answer: 'For large commercial or institutional orders, we may offer installment payment plans. Contact our sales team to discuss payment options for your specific order.',
  },
  {
    category: 'Maintenance',
    question: 'How do I clean my water tank?',
    answer: 'Clean your tank every 6-12 months using mild soap and water. Avoid harsh chemicals or abrasive materials that could damage the tank\'s surface. Rinse thoroughly before refilling. For underground tanks, we recommend professional cleaning services.',
  },
  {
    category: 'Maintenance',
    question: 'How long do TopTank tanks last?',
    answer: 'With proper installation and maintenance, TopTank tanks can last 20-25 years or more. The UV-stabilized material is designed to withstand harsh African sunlight and weather conditions without degrading.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...Array.from(new Set(faqs.map(faq => faq.category)))];

  const filteredFAQs = selectedCategory === 'all'
    ? faqs
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our products and services
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setOpenIndex(null);
              }}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {category === 'all' ? 'All Questions' : category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-5 bg-gray-50 border-t">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 text-center bg-blue-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help you find the perfect water storage solution
          </p>
          <a
            href="https://wa.me/254736317583"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors"
          >
            Chat with Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
