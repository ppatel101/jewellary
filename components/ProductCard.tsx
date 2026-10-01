'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onQuickView,
}) => {
  const isDarkBadge = product.badgeType === 'bestseller' || product.badgeType === 'icon';

  return (
    <div
      className="group bg-surface p-space-sm shadow-sm flex flex-col justify-between transition-shadow duration-300 hover:shadow-xl"
      data-category={product.category}
    >
      <div className="relative overflow-hidden aspect-[4/5] bg-surface-container">
        {product.badge && (
          <span
            className={`absolute top-3 left-3 z-10 px-2.5 py-1 font-label-sm text-[10px] uppercase tracking-wider ${
              isDarkBadge
                ? 'bg-primary text-on-primary'
                : 'bg-secondary text-on-secondary'
            }`}
          >
            {product.badge}
          </span>
        )}

        <button
          aria-label={isWishlisted ? 'Remove from Wishlist' : 'Save to Wishlist'}
          className={`wishlist-btn absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-surface/80 backdrop-blur-sm flex items-center justify-center transition-colors ${
            isWishlisted ? 'text-error' : 'text-on-surface hover:text-error'
          }`}
          onClick={() => onToggleWishlist(product)}
          type="button"
        >
          <span
            className="material-symbols-outlined text-[19px]"
            style={{
              fontVariationSettings: isWishlisted ? "'FILL' 1" : "'FILL' 0",
            }}
          >
            favorite
          </span>
        </button>

        <div className="relative w-full h-full">
          <Image
            src={product.image}
            alt={product.imageAlt || product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        <div className="absolute inset-x-3 bottom-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            className="w-full py-3 bg-surface/95 backdrop-blur text-on-surface font-label-md text-label-md uppercase tracking-widest shadow-md hover:bg-primary hover:text-on-primary transition-colors"
            onClick={() => onQuickView(product)}
            type="button"
          >
            Quick View
          </button>
        </div>
      </div>

      <div className="pt-space-sm space-y-2 flex-grow flex flex-col justify-between">
        <div className="space-y-1">
          {product.categoryLabel && (
            <span className="font-label-sm text-[10px] uppercase tracking-[0.16em] text-secondary">
              {product.categoryLabel}
            </span>
          )}
          <h3 className="font-headline-sm text-headline-sm text-on-surface">
            {product.name}
          </h3>
          {product.subtitle && (
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {product.subtitle}
            </p>
          )}
        </div>

        <div className="pt-2 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-label-lg text-label-lg font-semibold text-on-surface">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="font-body-sm text-body-sm line-through text-outline">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>
          <button
            className="px-3 py-1.5 bg-primary text-on-primary font-label-sm text-[11px] uppercase tracking-wider hover:bg-secondary transition-colors"
            onClick={() => onAddToCart(product)}
            type="button"
          >
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
};
