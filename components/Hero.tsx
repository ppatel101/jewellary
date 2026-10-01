import React from 'react';
import Image from 'next/image';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden -mt-20">
      <div className="relative w-full h-[90vh] min-h-[640px] max-h-[880px] flex items-center">
        <Image
          src="/images/hero-muse.webp"
          alt="Aurelia Jewels Campaign Muse wearing Handcrafted Royal Kundan Choker and Earrings"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.96]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/75 to-transparent md:w-3/5 w-full pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-margin-mobile md:px-margin pt-24 w-full">
          <div className="max-w-xl space-y-space-md">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface/90 backdrop-blur-sm rounded-none shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">
                The Heritage &amp; Contemporary Edit • Spring/Summer 2025
              </span>
            </div>

            <h1 className="font-display-xl text-display-xl tracking-tight text-on-surface leading-[1.08]">
              Jewelry That Tells{' '}
              <span className="italic font-light text-secondary">Your Story</span>
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
              Timeless pieces, thoughtfully crafted for every unforgettable moment. An intimate dialogue between sovereign Indian goldsmithing and modern restraint.
            </p>

            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <a
                className="px-8 py-4 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-[0.18em] shadow-md hover:bg-on-surface-variant transition-all duration-300"
                href="#curated-collection"
              >
                Explore Collection
              </a>
              <a
                className="px-8 py-4 bg-surface/80 backdrop-blur-sm text-on-surface font-label-md text-label-md uppercase tracking-[0.18em] shadow-sm hover:bg-surface-container-high transition-all duration-300"
                href="#new-arrivals"
              >
                Shop New Arrivals
              </a>
            </div>

            <div className="flex items-center gap-space-lg pt-space-sm">
              <div className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-secondary text-[20px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface">
                  BIS Hallmarked Purity
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-secondary text-[20px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  lock
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface">
                  Insured Pan-India Transit
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
