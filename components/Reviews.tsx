"use client";

import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number;
  date: string;
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
        <h2 className="text-blue-600 font-black tracking-widest uppercase text-xs mb-4">Müşteri Deneyimleri</h2>
        <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-16">Bizi Tercih Edenler Ne Diyor?</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 text-left">
              <div className="flex text-amber-400 mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
              </div>
              <p className="text-slate-600 font-medium leading-relaxed italic mb-8">"{review.comment}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-black">{review.name.charAt(0)}</div>
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
