import React from 'react';

export const PromoSection: React.FC = () => {
  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-5xl mx-auto px-margin-mobile md:px-margin">
        <div className="relative overflow-hidden bg-primary text-on-primary p-space-lg md:p-space-xl text-center space-y-space-md shadow-2xl">
          <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-space-xs max-w-2xl mx-auto">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary">
              Exclusive Privilege
            </span>
            <h2 className="font-display-lg text-display-lg text-on-primary">
              Make Every Moment Shine
            </h2>
            <p className="font-body-lg text-body-lg text-surface-variant font-light">
              Enjoy <span className="text-secondary font-medium">10% OFF</span> your maiden fine acquisition. Use invitation code{' '}
              <span className="bg-surface-container-highest/20 px-3 py-1 font-mono text-on-primary tracking-widest uppercase">
                AURELIA10
              </span>{' '}
              at private checkout.
            </p>
          </div>

          <div className="relative z-10 pt-space-xs flex flex-col sm:flex-row items-center justify-center gap-space-sm">
            <a
              className="px-10 py-4 bg-secondary text-on-secondary font-label-md text-label-md uppercase tracking-[0.2em] shadow-lg hover:bg-surface hover:text-on-surface transition-colors"
              href="#curated-collection"
            >
              Shop the Private Sale
            </a>
          </div>

          <p className="relative z-10 font-body-sm text-[11px] text-surface-dim tracking-wider uppercase">
            Complimentary velvet presentation vault &amp; BIS authenticity certificate included with all orders.
          </p>
        </div>
      </div>
    </section>
  );
};
