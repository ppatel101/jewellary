'use client';

import React from 'react';

export interface ToastState {
  visible: boolean;
  title: string;
  description: string;
}

interface ToastProps {
  toast: ToastState;
}

export const Toast: React.FC<ToastProps> = ({ toast }) => {
  return (
    <div
      id="toast-notify"
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-50 transform transition-all duration-300 bg-primary text-on-primary px-6 py-4 shadow-2xl flex items-center gap-3 ${
        toast.visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-24 opacity-0 pointer-events-none'
      }`}
    >
      <span className="material-symbols-outlined text-secondary">check_circle</span>
      <div>
        <p className="font-label-md text-label-md uppercase tracking-wider">
          {toast.title}
        </p>
        <p className="font-body-sm text-xs text-surface-dim">
          {toast.description}
        </p>
      </div>
    </div>
  );
};
