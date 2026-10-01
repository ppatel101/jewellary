'use client';

import React, { useState } from 'react';
import { Product } from '@/types/product';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  wishlistIds: Set<string>;
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

const filterTabs = [
  { id: 'all', label: 'All' },
  { id: 'rings', label: 'Rings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'earrings', label: 'Earrings' },
  { id: 'bracelets', label: 'Bracelets' },
];

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  wishlistIds,
  onToggleWishlist,
  onAddToCart,
  onQuickView,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="w-full py-space-xl bg-surface-container-low" id="curated-collection">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin space-y-space-lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-space-xs">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">
              Iconic Signatures
            </span>
            <h2 className="font-display-lg text-display-lg text-on-surface">
              Curated For You
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
              Our signature creations, celebrated for their radiant balance, architectural purity, and lasting poise.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  className={`category-filter-btn px-4 py-2 text-label-md font-label-md uppercase tracking-wider shadow-sm transition-colors ${
                    isActive
                      ? 'bg-primary text-on-primary'
                      : 'bg-surface text-on-surface hover:bg-surface-container'
                  }`}
                  onClick={() => setActiveCategory(tab.id)}
                  type="button"
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-md" id="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlistIds.has(product.id)}
              onToggleWishlist={onToggleWishlist}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
