'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';
import { formatPrice } from '@/lib/utils';

interface NewArrivalsProps {
  products: Product[];
  wishlistIds: Set<string>;
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const NewArrivals: React.FC<NewArrivalsProps> = ({
  products,
  wishlistIds,
  onToggleWishlist,
  onAddToCart,
}) => {
  return (
    <section className="w-full py-space-xl bg-surface" id="new-arrivals">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin space-y-space-lg">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-space-xs">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">
              Fresh from the Jaipur Atelier
            </span>
            <h2 className="font-display-lg text-display-lg text-on-surface">
              The New Arrivals
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Freshly unveiled masterworks cast in certified precious silver and sovereign gold.
            </p>
          </div>
          <a
            className="font-label-md text-label-md uppercase tracking-[0.18em] text-secondary hover:text-on-surface transition-colors flex items-center gap-1"
            href="#curated-collection"
          >
            <span>View Lookbook</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {products.map((item) => {
            const isWishlisted = wishlistIds.has(item.id);
            return (
              <div
                key={item.id}
                className="group bg-surface-container-low p-space-sm shadow-sm flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden aspect-square bg-surface-container">
                  <span className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-secondary text-on-secondary font-label-sm text-[9px] uppercase tracking-wider">
                    NEW
                  </span>
                  <button
                    aria-label={isWishlisted ? 'Remove from Wishlist' : 'Save to Wishlist'}
                    className={`wishlist-btn absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-surface/80 backdrop-blur-sm flex items-center justify-center transition-colors ${
                      isWishlisted ? 'text-error' : 'text-on-surface hover:text-error'
                    }`}
                    onClick={() => onToggleWishlist(item)}
                    type="button"
                  >
                    <span
                      className="material-symbols-outlined text-[17px]"
                      style={{
                        fontVariationSettings: isWishlisted ? "'FILL' 1" : "'FILL' 0",
                      }}
                    >
                      favorite
                    </span>
                  </button>

                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.imageAlt || item.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="pt-space-sm space-y-1">
                  <span className="font-label-sm text-[10px] uppercase tracking-wider text-secondary">
                    {item.categoryLabel || item.category}
                  </span>
                  <h3 className="font-headline-sm text-[18px] text-on-surface">
                    {item.name}
                  </h3>
                  {item.subtitle && (
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {item.subtitle}
                    </p>
                  )}
                  <div className="pt-2 flex items-center justify-between">
                    <span className="font-label-lg text-label-lg font-semibold text-on-surface">
                      {formatPrice(item.price)}
                    </span>
                    <button
                      aria-label={`Add ${item.name} to cart`}
                      className="p-2 bg-surface text-on-surface hover:bg-primary hover:text-on-primary transition-colors"
                      onClick={() => onAddToCart(item)}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        add_shopping_cart
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
