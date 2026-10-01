'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MobileMenu } from './MobileMenu';

interface HeaderProps {
  wishlistCount: number;
  cartCount: number;
  onOpenCart?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  wishlistCount,
  cartCount,
  onOpenCart,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
        {/* Top Announcement Bar */}
        <div className="bg-primary text-on-primary py-space-xs px-margin-mobile md:px-margin text-center tracking-[0.2em] font-label-sm text-label-sm uppercase flex items-center justify-center gap-space-xs">
          <span>Complimentary Insured Shipping Across India</span>
          <span className="text-secondary inline-block mx-1">•</span>
          <span>15-Day Bespoke Returns</span>
        </div>

        {/* Main Navbar */}
        <div className="h-20 max-w-7xl mx-auto px-margin-mobile md:px-margin flex items-center justify-between">
          <div className="flex items-center gap-space-md">
            {/* Hamburger for mobile */}
            <button
              aria-label="Open Navigation Menu"
              className="lg:hidden text-on-surface hover:text-secondary p-1 flex items-center justify-center"
              onClick={() => setMobileMenuOpen(true)}
              type="button"
            >
              <span className="material-symbols-outlined text-[26px]">menu</span>
            </button>

            <a className="flex items-center gap-space-sm" data-path="home" href="#">
              <div className="relative h-8 w-8">
                <Image
                  src="/images/logo.png"
                  alt="Aurelia Jewels Logo"
                  fill
                  sizes="32px"
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-headline-sm text-headline-sm tracking-wide uppercase text-on-surface hidden sm:inline-block">
                Aurelia Jewels
              </span>
            </a>
          </div>

          <nav
            className="hidden lg:flex items-center gap-space-lg"
            data-active-classes="text-on-surface font-semibold underline decoration-secondary underline-offset-8"
          >
            <a
              aria-current="page"
              className="uppercase tracking-[0.18em] transition-colors duration-200 text-on-surface font-semibold underline decoration-secondary underline-offset-8"
              data-path="home"
              href="#"
            >
              Home
            </a>
            <a
              className="font-label-md text-label-md uppercase tracking-[0.18em] text-on-surface-variant hover:text-on-surface transition-colors duration-200"
              data-path="collections"
              href="#curated-collection"
            >
              Collections
            </a>
            <a
              className="font-label-md text-label-md uppercase tracking-[0.18em] text-on-surface-variant hover:text-on-surface transition-colors duration-200"
              data-path="new-arrivals"
              href="#new-arrivals"
            >
              New Arrivals
            </a>
            <a
              className="font-label-md text-label-md uppercase tracking-[0.18em] text-on-surface-variant hover:text-on-surface transition-colors duration-200"
              data-path="best-sellers"
              href="#curated-collection"
            >
              Best Sellers
            </a>
            <a
              className="font-label-md text-label-md uppercase tracking-[0.18em] text-on-surface-variant hover:text-on-surface transition-colors duration-200"
              data-path="about"
              href="#about"
            >
              About
            </a>
            <a
              className="font-label-md text-label-md uppercase tracking-[0.18em] text-on-surface-variant hover:text-on-surface transition-colors duration-200"
              data-path="contact"
              href="#newsletter-form"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-space-md">
            <button
              aria-label="Search Archive"
              className="text-on-surface hover:text-secondary transition-colors duration-200 flex items-center justify-center"
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">search</span>
            </button>

            <a
              aria-label="Wishlist"
              className="relative text-on-surface hover:text-secondary transition-colors duration-200 flex items-center justify-center"
              data-path="wishlist"
              href="#curated-collection"
            >
              <span className="material-symbols-outlined text-[22px]">favorite</span>
              <span className="absolute -top-1.5 -right-1.5 bg-primary text-on-primary font-label-sm text-[9px] w-4 h-4 rounded-full flex items-center justify-center leading-none">
                {wishlistCount}
              </span>
            </a>

            <button
              aria-label="Shopping Bag"
              className="relative text-on-surface hover:text-secondary transition-colors duration-200 flex items-center justify-center"
              data-path="cart"
              onClick={onOpenCart}
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
              <span className="absolute -top-1.5 -right-1.5 bg-secondary text-on-secondary font-label-sm text-[9px] w-4 h-4 rounded-full flex items-center justify-center leading-none">
                {cartCount}
              </span>
            </button>

            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-space-xs">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
