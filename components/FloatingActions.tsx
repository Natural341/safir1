"use client";

import React from 'react';
import { useCMS } from '@/context/CMSContext';

const FloatingActions: React.FC = () => {
  const { data } = useCMS();

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col gap-3 items-end">
      {/* Phone Button */}
      <a 
        href={`tel:${data.contact.phone}`}
        className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl active:scale-90 transition-all duration-300 hover:bg-blue-700"
        aria-label="Telefonla Ara"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      </a>

      {/* WhatsApp Button */}
      <a 
        href={`https://wa.me/${data.contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl active:scale-90 transition-all duration-300 hover:bg-[#20ba5a]"
        aria-label="WhatsApp'tan Yazın"
      >
        <img src="/whatsapp.svg" alt="WhatsApp" className="w-10 h-10" />
      </a>
    </div>
  );
};

export default FloatingActions;
