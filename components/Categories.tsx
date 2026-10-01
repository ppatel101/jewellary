import React from 'react';
import Image from 'next/image';
import { categories } from '@/data/categories';

export const Categories: React.FC = () => {
  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin space-y-space-lg">
        <div className="text-center space-y-space-xs max-w-xl mx-auto">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">
            The Atelier Archive
          </span>
          <h2 className="font-display-lg text-display-lg text-on-surface">
            Curated Categories
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Discover handcrafted silhouettes designed for modern poise and regal tradition.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-sm">
          {categories.map((category) => (
            <a
              key={category.id}
              className="group relative overflow-hidden bg-surface-container aspect-[3/4] flex flex-col justify-end p-4 shadow-sm"
              href={category.href}
            >
              <Image
                src={category.image}
                alt={category.imageAlt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="relative z-10 flex items-center justify-between text-on-primary">
                <div>
                  <p className="font-headline-sm text-headline-sm font-medium">
                    {category.name}
                  </p>
                  <span className="font-label-sm text-[10px] uppercase text-surface-dim">
                    {category.subtitle}
                  </span>
                </div>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
