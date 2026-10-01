'use client';

import React from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activePath?: string;
}

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Collections', href: '#curated-collection' },
  { label: 'New Arrivals', href: '#new-arrivals' },
  { label: 'Best Sellers', href: '#curated-collection' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activePath = 'home',
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-primary/70 backdrop-blur-sm lg:hidden flex justify-end"
      onClick={onClose}
    >
      <div
        className="w-4/5 max-w-sm h-full bg-surface shadow-2xl p-space-md flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="space-y-space-md">
          <div className="flex items-center justify-between pb-space-xs border-b border-outline-variant">
            <span className="font-headline-sm text-headline-sm uppercase text-on-surface">
              Aurelia Jewels
            </span>
            <button
              aria-label="Close Navigation"
              className="text-on-surface hover:text-secondary p-1"
              onClick={onClose}
              type="button"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>

          <nav className="flex flex-col gap-space-sm pt-2">
            {navLinks.map((link) => {
              const isCurrent = link.label.toLowerCase() === activePath.toLowerCase();
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  className={`py-2 text-label-md font-label-md uppercase tracking-[0.18em] transition-colors ${
                    isCurrent
                      ? 'text-on-surface font-semibold underline decoration-secondary underline-offset-8'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="pt-space-md border-t border-outline-variant space-y-space-xs text-on-surface-variant font-body-sm text-xs">
          <p className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-secondary text-[18px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
            BIS Hallmarked Certified
          </p>
          <p className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-secondary text-[18px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              lock
            </span>
            Insured Pan-India Transit
          </p>
        </div>
      </div>
    </div>
  );
};
