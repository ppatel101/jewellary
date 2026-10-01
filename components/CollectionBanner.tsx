import React from 'react';
import Image from 'next/image';

export const CollectionBanner: React.FC = () => {
  return (
    <section className="w-full relative overflow-hidden py-space-xl">
      <div className="relative w-full min-h-[520px] flex items-center bg-surface-container-high">
        <Image
          src="/images/banner-everyday-luxury.webp"
          alt="High editorial fashion photograph of an elegant Indian woman wearing layered fine gold chokers and minimalist pearl rings seated in warm golden hour interior"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.88]"
        />
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-[1px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-margin-mobile md:px-margin w-full flex justify-end">
          <div className="max-w-xl bg-surface/95 backdrop-blur-md p-space-lg shadow-2xl space-y-space-md">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1px] bg-secondary" />
              <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">
                The Everyday Ode
              </span>
            </div>
            <h2 className="font-display-lg text-display-lg text-on-surface leading-tight">
              The Art of Everyday Luxury
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Designed to be worn, loved, and remembered — transitioning effortlessly from morning boardroom meetings to intimate evening festivities with unspoken majesty.
            </p>
            <div className="pt-space-xs">
              <a
                className="inline-block px-8 py-4 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-[0.18em] shadow-md hover:bg-secondary transition-colors"
                href="#curated-collection"
              >
                Discover the Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
