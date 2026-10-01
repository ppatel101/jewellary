import React from 'react';
import { customerReviews } from '@/data/products';

export const CustomerReviews: React.FC = () => {
  return (
    <section className="w-full py-space-xl bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin space-y-space-lg">
        <div className="text-center space-y-space-xs max-w-xl mx-auto">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">
            Collector Voices
          </span>
          <h2 className="font-display-lg text-display-lg text-on-surface">
            Loved By Our Customers
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Stories of grace, milestones, and heirloom keepsakes across generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          {customerReviews.map((review) => (
            <div
              key={review.id}
              className="bg-surface p-space-md shadow-sm space-y-space-sm flex flex-col justify-between"
            >
              <div className="space-y-space-xs">
                <div className="flex items-center gap-1 text-secondary">
                  {[...Array(review.rating)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-headline-sm text-[18px] text-on-surface">
                  {review.headline}
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  &ldquo;{review.content.replace(/^["']|["']$/g, '')}&rdquo;
                </p>
              </div>

              <div className="pt-space-xs flex items-center justify-between">
                <div>
                  <p className="font-label-lg text-label-lg text-on-surface">
                    {review.author}
                  </p>
                  <p className="font-body-sm text-[11px] text-on-surface-variant">
                    {review.location}
                  </p>
                </div>
                {review.isVerified && (
                  <span className="px-2 py-1 bg-surface-container text-secondary font-label-sm text-[9px] uppercase tracking-wider flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">
                      verified
                    </span>{' '}
                    Verified Buyer
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
