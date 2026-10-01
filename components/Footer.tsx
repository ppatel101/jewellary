import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface pt-space-xl pb-space-lg">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-lg pb-space-xl">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-space-md pr-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="font-headline-md text-headline-md tracking-wider uppercase text-on-surface">
                Aurelia Jewels
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Rooted in sovereign Indian artistry and European disciplined minimalism. Every rare jewel is cast in certified pure precious metals and hand-set with conflict-free gemstones for the discerning collector.
            </p>
            <div className="flex items-center gap-space-sm pt-space-xs">
              <a
                aria-label="Follow on Social Channel 1"
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-colors duration-300"
                href="#"
              >
                <span className="material-symbols-outlined text-[18px]">photo_camera</span>
              </a>
              <a
                aria-label="Follow on Social Channel 2"
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-colors duration-300"
                href="#"
              >
                <span className="material-symbols-outlined text-[18px]">public</span>
              </a>
              <a
                aria-label="Follow on Social Channel 3"
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-colors duration-300"
                href="#"
              >
                <span className="material-symbols-outlined text-[18px]">palette</span>
              </a>
            </div>
          </div>

          {/* Collections */}
          <div className="space-y-space-sm">
            <h3 className="font-label-lg text-label-lg tracking-[0.2em] uppercase text-on-surface">
              Collections
            </h3>
            <ul className="space-y-space-xs font-body-md text-body-md text-on-surface-variant">
              <li>
                <a className="hover:text-secondary transition-colors duration-200" data-path="rings" href="#curated-collection">
                  Rings
                </a>
              </li>
              <li>
                <a className="hover:text-secondary transition-colors duration-200" data-path="necklaces" href="#curated-collection">
                  Necklaces
                </a>
              </li>
              <li>
                <a className="hover:text-secondary transition-colors duration-200" data-path="earrings" href="#curated-collection">
                  Earrings
                </a>
              </li>
              <li>
                <a className="hover:text-secondary transition-colors duration-200" data-path="bracelets" href="#curated-collection">
                  Bracelets
                </a>
              </li>
              <li>
                <a className="hover:text-secondary transition-colors duration-200" data-path="bridal" href="#curated-collection">
                  Bridal
                </a>
              </li>
              <li>
                <a className="hover:text-secondary transition-colors duration-200" data-path="solitaires" href="#curated-collection">
                  Solitaires
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-space-sm">
            <h3 className="font-label-lg text-label-lg tracking-[0.2em] uppercase text-on-surface">
              Customer Care
            </h3>
            <ul className="space-y-space-xs font-body-md text-body-md text-on-surface-variant">
              <li>
                <a className="hover:text-secondary transition-colors duration-200" data-path="book-appointment" href="#">
                  Book Appointment
                </a>
              </li>
              <li>
                <a className="hover:text-secondary transition-colors duration-200" data-path="bespoke-services" href="#">
                  Bespoke Services
                </a>
              </li>
              <li>
                <a className="hover:text-secondary transition-colors duration-200" data-path="insured-shipping" href="#">
                  Insured Shipping
                </a>
              </li>
              <li>
                <a className="hover:text-secondary transition-colors duration-200" data-path="returns-exchanges" href="#">
                  Returns &amp; Exchanges
                </a>
              </li>
              <li>
                <a className="hover:text-secondary transition-colors duration-200" data-path="ring-size-guide" href="#">
                  Ring Size Guide
                </a>
              </li>
              <li>
                <a className="hover:text-secondary transition-colors duration-200" data-path="certificate-verify" href="#">
                  Verify Certificate
                </a>
              </li>
            </ul>
          </div>

          {/* Hallmark & Purity */}
          <div className="space-y-space-md">
            <h3 className="font-label-lg text-label-lg tracking-[0.2em] uppercase text-on-surface">
              Hallmark &amp; Purity
            </h3>
            <div className="p-space-sm bg-surface rounded-none border border-outline-variant space-y-space-xs">
              <div className="flex items-center gap-space-xs text-secondary">
                <span className="material-symbols-outlined text-[20px]">verified</span>
                <span className="font-label-md text-label-md tracking-wider uppercase text-on-surface">
                  BIS Hallmarked
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Every creation carries authentic government BIS hallmarks for 925 sterling silver and 18K/22K gold purity validation.
              </p>
            </div>
            <div className="space-y-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block">
                Payment Gateways
              </span>
              <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                <span className="px-2 py-1 bg-surface border border-outline-variant">VISA</span>
                <span className="px-2 py-1 bg-surface border border-outline-variant">MASTERCARD</span>
                <span className="px-2 py-1 bg-surface border border-outline-variant">UPI</span>
                <span className="px-2 py-1 bg-surface border border-outline-variant">AMEX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-space-md border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
          <p>© 2025 Aurelia Jewels Atelier Ltd. All rights reserved.</p>
          <div className="flex items-center gap-space-md font-label-sm text-label-sm uppercase tracking-wider">
            <a className="hover:text-on-surface transition-colors" data-path="privacy-policy" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-on-surface transition-colors" data-path="terms-conditions" href="#">
              Terms &amp; Conditions
            </a>
            <a className="hover:text-on-surface transition-colors" data-path="hallmark-standards" href="#">
              Hallmark Standards
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
