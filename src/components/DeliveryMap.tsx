'use client';

import { motion } from 'framer-motion';

const regions = [
  { name: 'Nairobi', color: 'bg-blue-500' },
  { name: 'Mombasa', color: 'bg-green-500' },
  { name: 'Kisumu', color: 'bg-purple-500' },
  { name: 'Nakuru', color: 'bg-orange-500' },
  { name: 'Eldoret', color: 'bg-red-500' },
  { name: 'Thika', color: 'bg-yellow-500' },
  { name: 'Athi River', color: 'bg-pink-500' },
  { name: 'Kitengela', color: 'bg-indigo-500' },
];

const installationSteps = [
  {
    step: 1,
    title: 'Site Preparation',
    description: 'Ensure the installation site is level and has a proper concrete base. The base should be at least 6 inches thick for larger tanks.',
  },
  {
    step: 2,
    title: 'Tank Positioning',
    description: 'Position the tank on the prepared base, ensuring it is level and stable. Allow adequate space around the tank for maintenance access.',
  },
  {
    step: 3,
    title: 'Connection Setup',
    description: 'Connect inlet and outlet pipes using appropriate fittings. Ensure all connections are watertight and properly sealed.',
  },
  {
    step: 4,
    title: 'Ventilation',
    description: 'Install proper ventilation to prevent pressure buildup. Ensure the tank is not completely airtight to allow for air circulation.',
  },
  {
    step: 5,
    title: 'Final Inspection',
    description: 'Inspect all connections and the tank itself for any issues. Fill the tank gradually and check for leaks.',
  },
];

export default function DeliveryMap() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Delivery Coverage & Installation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver to all 47 counties in Kenya with professional installation services
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Delivery Coverage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Delivery Coverage</h3>
            
            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 mb-6 relative overflow-hidden">
              <div className="aspect-video bg-white rounded-xl flex items-center justify-center relative">
                <svg className="w-32 h-32 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500 font-semibold">Kenya Delivery Map</p>
                </div>
              </div>
              
              {/* Region Markers */}
              <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
              <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
              <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
            </div>

            {/* Regions List */}
            <div className="grid grid-cols-2 gap-3">
              {regions.map((region, index) => (
                <motion.div
                  key={region.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                  className="flex items-center gap-3 bg-white rounded-lg p-3 shadow"
                >
                  <div className={`w-3 h-3 ${region.color} rounded-full`} />
                  <span className="font-medium text-gray-900">{region.name}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 bg-blue-50 rounded-xl p-4">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> Delivery times vary by location. Urban areas typically receive delivery within 2-3 business days, while rural areas may take 5-7 business days.
              </p>
            </div>
          </motion.div>

          {/* Installation Guide */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Installation Guide</h3>
            
            <div className="space-y-4">
              {installationSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-xl p-6 shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{step.step}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-xl">
              <p className="text-sm text-yellow-800">
                <strong>Professional Installation:</strong> For tanks above 5000L, we strongly recommend professional installation. Contact us for installation quotes and scheduling.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
