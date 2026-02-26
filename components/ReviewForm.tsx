"use client";

import React, { useState, useEffect } from 'react';
import { Star, Send, CheckCircle } from 'lucide-react';

export default function ReviewForm({ token }: { token: string }) {
  const [rating, setRating] = useState(5);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/reviews/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, name, comment, rating }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        setError(data.error || 'Bir hata oluştu.');
      }
    } catch (err) {
      setError('Bağlantı hatası.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-20 bg-white rounded-[2.5rem] shadow-2xl p-10 max-w-lg mx-auto border border-slate-100 mt-20">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle size={40} strokeWidth={2.5} />
        </div>
        <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Teşekkürler!</h2>
        <p className="text-slate-500 font-medium">Değerli yorumunuz başarıyla alındı. Onaylandıktan sonra sitemizde yayınlanacaktır.</p>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto bg-white rounded-[3rem] shadow-2xl p-8 md:p-12 border border-slate-100 mt-20 mb-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[5rem] -mr-10 -mt-10 z-0"></div>

      <div className="relative z-10">
        <h2 className="text-blue-600 font-black tracking-widest uppercase text-xs mb-4">Hizmet Değerlendirme</h2>
        <h3 className="text-4xl font-black text-slate-900 tracking-tighter mb-10">Deneyiminizi Paylaşın</h3>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 block">Puanınız</label>
            <div className="flex gap-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  aria-label={`${star} yıldız ver`}
                  onClick={() => setRating(star)}
                  className={`p-2 transition-all hover:scale-110 active:scale-95 ${rating >= star ? 'text-amber-400' : 'text-slate-200'}`}
                >
                  <Star size={36} fill={rating >= star ? 'currentColor' : 'none'} strokeWidth={2.5} />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <label htmlFor="reviewer-name" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 block">Adınız Soyadınız</label>
            <input
              id="reviewer-name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 font-bold text-slate-700 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all"
              placeholder="Ahmet Yılmaz"
            />
          </div>

          <div className="space-y-4">
            <label htmlFor="reviewer-comment" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 block">Yorumunuz</label>
            <textarea
              id="reviewer-comment"
              required
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 font-bold text-slate-700 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all resize-none"
              placeholder="Hizmetimiz hakkında görüşlerinizi yazın..."
            />
          </div>

          {error && <p className="text-red-500 text-sm font-bold text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-600 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3 group"
          >
            {loading ? "Gönderiliyor..." : (
              <>
                Gönder <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
