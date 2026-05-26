'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface WishlistItem {
  id: string;
  name: string;
  capacity: string;
  price: string;
  image: string;
}

interface WishlistContextType {
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  clearWishlist: () => void;
  getWishlistCount: () => number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<WishlistItem[]>(() => {
    if (typeof window !== 'undefined') {
      const savedWishlist = localStorage.getItem('toptank-wishlist');
      if (savedWishlist) {
        try {
          return JSON.parse(savedWishlist);
        } catch (error) {
          console.error('Failed to parse wishlist from localStorage:', error);
          return [];
        }
      }
    }
    return [];
  });

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('toptank-wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (item: WishlistItem) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.find((i) => i.id === item.id)) {
        return prevWishlist;
      }
      return [...prevWishlist, item];
    });
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
  };

  const isInWishlist = (id: string) => {
    return wishlist.some((item) => item.id === id);
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  const getWishlistCount = () => {
    return wishlist.length;
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        clearWishlist,
        getWishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
