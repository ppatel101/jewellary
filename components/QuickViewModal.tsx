'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';
import { formatPrice } from '@/lib/utils';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, selectedMetal?: string) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [selectedMetal, setSelectedMetal] = useState<string>('925 Silver');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) {
    return null;
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleAdd = () => {
    onAddToCart(product, selectedMetal);
    onClose();
  };

  const metalOptions = product.options || ['925 Silver', '18K Gold', 'Rose Gold'];

  return (
    <div
      id="quick-view-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 bg-primary/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-surface max-w-2xl w-full p-space-md shadow-2xl space-y-space-md max-h-[90vh] overflow-y-auto">
        <button
          aria-label="Close Preview"
          className="absolute top-4 right-4 text-on-surface hover:text-secondary transition-colors"
          onClick={onClose}
          type="button"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md items-center pt-2">
          <div className="aspect-square bg-surface-container overflow-hidden relative">
            <Image
              src={product.image || '/images/modal-preview.webp'}
              alt={product.imageAlt || product.name}
              fill
              sizes="(max-width: 768px) 100vw, 350px"
              className="object-cover"
            />
          </div>

          <div className="space-y-space-sm">
            <span className="font-label-sm text-[10px] uppercase tracking-wider text-secondary">
              Aurelia Signature Edit
            </span>
            <h3
              className="font-headline-md text-headline-md text-on-surface"
              id="modal-title"
            >
              {product.name}
            </h3>

            <div className="flex items-baseline gap-2">
              <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                {formatPrice(product.price)}
              </span>
              {product.oldPrice && (
                <span className="font-body-sm text-body-sm line-through text-outline">
                  {formatPrice(product.oldPrice)}
                </span>
              )}
            </div>

            {product.subtitle && (
              <p className="font-label-md text-label-md text-secondary uppercase tracking-wider">
                {product.subtitle}
              </p>
            )}

            {product.description && (
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {product.description}
              </p>
            )}

            <div className="space-y-2 pt-2">
              <span className="font-label-sm text-[10px] uppercase tracking-wider text-on-surface block">
                Precious Metal Options
              </span>
              <div className="flex items-center gap-2">
                {metalOptions.map((metal) => (
                  <button
                    key={metal}
                    type="button"
                    onClick={() => setSelectedMetal(metal)}
                    className={`px-3 py-1.5 font-label-sm text-[10px] uppercase transition-colors ${
                      selectedMetal === metal
                        ? 'bg-primary text-on-primary'
                        : 'bg-surface-container text-on-surface hover:bg-surface-container-highest'
                    }`}
                  >
                    {metal}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-space-xs">
              <button
                className="w-full py-3.5 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-[0.18em] shadow-md hover:bg-secondary transition-colors"
                onClick={handleAdd}
                type="button"
              >
                Acquire To Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
