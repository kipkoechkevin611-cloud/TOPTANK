'use client';

import { motion } from 'framer-motion';

export default function Skeleton({ className = '', height = 'h-4' }: { className?: string; height?: string }) {
  return (
    <motion.div
      className={`bg-gray-200 rounded ${height} ${className}`}
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="aspect-square bg-gray-100">
        <Skeleton className="w-full h-full" height="h-full" />
      </div>
      <div className="p-6">
        <Skeleton className="h-4 w-1/3 mb-3" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-4 w-1/2 mb-4" />
        <Skeleton className="h-4 w-1/3 mb-4" />
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
}

export function ReviewSkeleton() {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <Skeleton className="h-5 w-32 mb-2" />
          <Skeleton className="h-4 w-40" />
        </div>
        <Skeleton className="h-5 w-20" />
      </div>
      <Skeleton className="h-4 w-full mb-3" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  );
}
