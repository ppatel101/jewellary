'use client';

import React, { useState, useCallback, useRef } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Benefits } from '@/components/Benefits';
import { Categories } from '@/components/Categories';
import { ProductGrid } from '@/components/ProductGrid';
import { CollectionBanner } from '@/components/CollectionBanner';
import { NewArrivals } from '@/components/NewArrivals';
import { BrandStory } from '@/components/BrandStory';
import { PromoSection } from '@/components/PromoSection';
import { CustomerReviews } from '@/components/CustomerReviews';
import { InstagramSection } from '@/components/InstagramSection';
import { Newsletter } from '@/components/Newsletter';
import { Footer } from '@/components/Footer';
import { QuickViewModal } from '@/components/QuickViewModal';
import { Toast, ToastState } from '@/components/Toast';
import { curatedProducts, newArrivals } from '@/data/products';
import { Product, CartItem } from '@/types/product';

export default function Home() {
  // Initial wishlist has 3 items to match original Stitch HTML badge count of 3
  const [wishlistIds, setWishlistIds] = useState<Set<string>>(
    () => new Set(['celeste-diamond-ring', 'elan-gold-earrings', 'serene-pearl-drops'])
  );

  const [cart, setCart] = useState<CartItem[]>([]);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const [toast, setToast] = useState<ToastState>({
    visible: false,
    title: '',
    description: '',
  });

  const toastTimerRef = useRef<NodeJS.Timeout | null>(null);

  const showToast = useCallback((title: string, description: string) => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }
    setToast({
      visible: true,
      title,
      description,
    });
    toastTimerRef.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3200);
  }, []);

  const handleToggleWishlist = useCallback(
    (product: Product) => {
      setWishlistIds((prev) => {
        const next = new Set(prev);
        if (next.has(product.id)) {
          next.delete(product.id);
          showToast(
            'Removed from Wishlist',
            'Item has been removed from your saved treasures.'
          );
        } else {
          next.add(product.id);
          showToast(
            'Saved to Wishlist',
            'Item safely curated in your private archive.'
          );
        }
        return next;
      });
    },
    [showToast]
  );

  const handleAddToCart = useCallback(
    (product: Product, selectedMetal: string = '925 Silver') => {
      setCart((prev) => {
        const existingIndex = prev.findIndex(
          (item) =>
            item.product.id === product.id &&
            item.selectedMetal === selectedMetal
        );

        if (existingIndex > -1) {
          const next = [...prev];
          next[existingIndex] = {
            ...next[existingIndex],
            quantity: next[existingIndex].quantity + 1,
          };
          return next;
        } else {
          return [
            ...prev,
            {
              product,
              quantity: 1,
              selectedMetal,
            },
          ];
        }
      });

      showToast(
        'Acquisition Added',
        `${product.name} has been placed in your velvet bag.`
      );
    },
    [showToast]
  );

  const handleOpenQuickView = useCallback((product: Product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  }, []);

  const handleCloseQuickView = useCallback(() => {
    setIsQuickViewOpen(false);
  }, []);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Header
        wishlistCount={wishlistIds.size}
        cartCount={totalCartCount}
      />

      <main className="w-full pt-20 bg-surface min-h-[70vh]">
        <div className="flex flex-col w-full">
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. Trust / Brand Benefits */}
          <Benefits />

          {/* 3. Shop by Category */}
          <Categories />

          {/* 4. Curated For You (Product Grid with Filters) */}
          <ProductGrid
            products={curatedProducts}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            onAddToCart={handleAddToCart}
            onQuickView={handleOpenQuickView}
          />

          {/* 5. Everyday Luxury Banner */}
          <CollectionBanner />

          {/* 6. New Arrivals */}
          <NewArrivals
            products={newArrivals}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            onAddToCart={handleAddToCart}
          />

          {/* 7. Brand Story */}
          <BrandStory />

          {/* 8. Promotional Section */}
          <PromoSection />

          {/* 9. Customer Reviews */}
          <CustomerReviews />

          {/* 10. Instagram / Social Section */}
          <InstagramSection />

          {/* 11. Newsletter */}
          <Newsletter />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={handleCloseQuickView}
        onAddToCart={handleAddToCart}
      />

      {/* Toast Notification */}
      <Toast toast={toast} />
    </>
  );
}
