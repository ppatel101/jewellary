'use client';

import React, { useState } from 'react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="w-full py-space-xl bg-surface-container-low">
      <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin text-center space-y-space-md">
        <div className="space-y-space-xs">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary">
            Private Circle
          </span>
          <h2 className="font-display-lg text-display-lg text-on-surface">
            Stay in the Glow
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto">
            Sign up for exclusive collection previews, private collector salon invitations, and bespoke styling inspiration.
          </p>
        </div>

        <form
          className="max-w-md mx-auto space-y-3"
          id="newsletter-form"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-grow px-4 py-3.5 bg-surface text-on-surface placeholder:text-outline font-body-md text-body-md shadow-sm focus:outline-none focus:ring-1 focus:ring-secondary"
            />
            <button
              className="px-8 py-3.5 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-[0.18em] shadow-md hover:bg-secondary transition-colors whitespace-nowrap"
              type="submit"
            >
              Subscribe
            </button>
          </div>
          <p className="font-body-sm text-[11px] text-on-surface-variant">
            We treat your data with discretion. Unsubscribe at any time with a single touch.
          </p>
          {subscribed && (
            <div
              className="text-secondary font-label-md text-label-md uppercase tracking-wider pt-2 animate-fadeIn"
              id="newsletter-success"
            >
              Welcome to the Aurelia Circle. Check your inbox for your 10% privilege token.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
