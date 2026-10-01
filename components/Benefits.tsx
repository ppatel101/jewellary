import React from 'react';

const benefits = [
  {
    icon: 'diamond',
    title: '925 Sterling Silver',
    description:
      'BIS Hallmarked, 100% hypoallergenic solid precious metal with tarnish-resistant rhodium coat.',
  },
  {
    icon: 'architecture',
    title: 'Master Craftsmanship',
    description:
      'Handcrafted by multigenerational karigars of Jaipur & Kolkata with microscopic pavé precision.',
  },
  {
    icon: 'local_shipping',
    title: 'Secure Insured Transit',
    description:
      'Tamper-evident velvet vault packaging delivered via secured armored courier across India.',
  },
  {
    icon: 'published_with_changes',
    title: 'Easy 15-Day Returns',
    description:
      'Complimentary white-glove doorstep verification, instant exchange, or sovereign refund.',
  },
];

export const Benefits: React.FC = () => {
  return (
    <section className="w-full bg-surface-container-low py-space-lg">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="p-space-md bg-surface shadow-sm flex items-start gap-space-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="p-3 bg-secondary-container/40 text-secondary">
                <span className="material-symbols-outlined text-[26px]">
                  {benefit.icon}
                </span>
              </div>
              <div className="space-y-1">
                <h2 className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface">
                  {benefit.title}
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
