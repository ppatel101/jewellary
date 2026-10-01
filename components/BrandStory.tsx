import React from 'react';
import Image from 'next/image';

export const BrandStory: React.FC = () => {
  return (
    <section className="w-full py-space-xl bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
          {/* Story Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] bg-surface-container overflow-hidden shadow-xl">
              <Image
                src="/images/artisan-story.webp"
                alt="Master Indian jewelry artisan hands carefully setting a radiant diamond into an intricate hand-engraved silver ring mount using micro jewelers tools"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block p-space-md bg-surface shadow-2xl max-w-xs space-y-2">
              <div className="flex items-center gap-1 text-secondary">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface">
                Jaipur &amp; Kolkata Guild Guilds
              </p>
              <p className="font-body-sm text-[11px] text-on-surface-variant">
                Over 40 hours of artisanal handwork dedicated to every signature heirloom creation.
              </p>
            </div>
          </div>

          {/* Story Content */}
          <div className="lg:col-span-6 space-y-space-md lg:pl-space-md">
            <div className="space-y-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">
                Our Philosophical Horizon
              </span>
              <h2 className="font-display-lg text-display-lg text-on-surface leading-tight">
                Crafted With Intention
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              At Aurelia Jewels, each piece begins not in a CAD machine, but in the reverent hands of master artisans whose lineages trace centuries of Indian royal goldsmithing. We synthesize that opulent history with disciplined European architectural minimalism.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Every sovereign creation is forged exclusively from BIS-hallmarked 925 Sterling Silver and certified 18K/22K gold, set with conflict-free gemstones sourced through ethical trade agreements.
            </p>
            <div className="p-space-md bg-surface shadow-sm space-y-2">
              <span className="material-symbols-outlined text-secondary text-[28px]">
                format_quote
              </span>
              <p className="font-headline-sm text-headline-sm italic text-secondary">
                &ldquo;Jewelry is the quietest yet most profound language of identity. It does not demand attention; it commands presence.&rdquo;
              </p>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block">
                — Gayatri Sen, Creative Director
              </span>
            </div>
            <div className="pt-2">
              <a
                className="px-8 py-4 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-[0.18em] shadow-md hover:bg-secondary transition-colors inline-block"
                href="#about"
              >
                Our Story &amp; Ethics
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
