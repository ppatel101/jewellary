import React from 'react';
import Image from 'next/image';
import { instagramPosts } from '@/data/products';

export const InstagramSection: React.FC = () => {
  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin space-y-space-lg">
        <div className="text-center space-y-space-xs max-w-xl mx-auto">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">
            Community &amp; Solitaire Stories
          </span>
          <h2 className="font-display-lg text-display-lg text-on-surface">
            Follow the Glow
          </h2>
          <a
            className="inline-block font-label-md text-label-md text-secondary tracking-widest uppercase hover:text-on-surface transition-colors"
            href="https://instagram.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            @aureliajewels on Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-sm">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              className="group relative aspect-square overflow-hidden bg-surface-container shadow-sm"
              href={post.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-on-primary">
                <span className="flex items-center gap-1 font-label-sm text-xs">
                  <span className="material-symbols-outlined text-sm">favorite</span>{' '}
                  {post.likes}
                </span>
                <span className="flex items-center gap-1 font-label-sm text-xs">
                  <span className="material-symbols-outlined text-sm">chat_bubble</span>{' '}
                  {post.comments}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
