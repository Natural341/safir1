"use client";

import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number;
  date: string;
  image?: string; // Optional image field
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/reviews')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setReviews(data);
        setLoading(false);
      });
  }, []);

  if (loading) return null;
  if (reviews.length === 0) return null;

  return (
    <section id="yorumlar" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-blue-600 font-black tracking-widest uppercase text-xs mb-4">Mutlu Müşterilerimiz</h2>
        <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-16">Safir Deneyimini Keşfedin</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 text-left hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <div className="flex text-amber-400 mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={14} />)}
              </div>
              <p className="text-slate-600 font-medium leading-relaxed italic mb-8">"{review.comment}"</p>
              <div className="flex items-center gap-4">
                {review.image ? (
                  <div className="w-12 h-12 rounded-2xl overflow-hidden ring-4 ring-white shadow-sm">
                    <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-12 h-12 bg-slate-200 rounded-2xl flex items-center justify-center text-slate-500 ring-4 ring-white shadow-sm overflow-hidden">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                    </svg>
                  </div>
                )}
                <div>
                  <h4 className="text-sm font-black text-slate-900">{review.name}</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
