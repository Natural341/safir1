"use client";

import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number;
  date: string;
  image?: string;
}

const fallbackReviews: Review[] = [
  {
    id: 1,
    name: "Ayşe Yılmaz",
    comment: "Safir Temizlik ekibi gerçekten çok profesyonel. Evimi pırıl pırıl yaptılar, her köşeyi detaylı temizlediler. Kesinlikle tavsiye ederim!",
    rating: 5,
    date: "10.02.2026"
  },
  {
    id: 2,
    name: "Mehmet Kaya",
    comment: "Ofisimiz için düzenli temizlik hizmeti alıyoruz. Zamanında geliyorlar, işlerini çok iyi yapıyorlar. Çalışanlarımız da çok memnun.",
    rating: 5,
    date: "18.11.2025"
  },
  {
    id: 3,
    name: "Fatma Demir",
    comment: "İnşaat sonrası temizlik yaptırdık. Çok zorlu bir iş olmasına rağmen mükemmel bir sonuç aldık. Teşekkürler Safir!",
    rating: 5,
    date: "05.09.2025"
  },
  {
    id: 4,
    name: "Ali Çelik",
    comment: "Taşınma öncesi boş ev temizliği yaptırdık. Evin her tarafı bembeyaz oldu. Fiyat performans açısından çok iyi.",
    rating: 4,
    date: "22.06.2025"
  },
  {
    id: 5,
    name: "Zeynep Arslan",
    comment: "Cam temizliği hizmeti aldık. Yüksek katlı binamızın tüm camlarını pırıl pırıl yaptılar. Güvenilir ve profesyonel bir ekip.",
    rating: 5,
    date: "14.03.2025"
  },
  {
    id: 6,
    name: "Hasan Öztürk",
    comment: "Apartman merdiven temizliği için anlaştık. Düzenli olarak geliyorlar, komşularımız da çok memnun. Tam zamanında ve kaliteli hizmet.",
    rating: 5,
    date: "03.01.2025"
  }
];

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('/api/reviews')
      .then(res => {
        if (!res.ok) throw new Error('Yorumlar yüklenirken hata oluştu');
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setReviews(data);
        } else {
          setReviews(fallbackReviews);
        }
        setLoading(false);
      })
      .catch(() => {
        setReviews(fallbackReviews);
        setLoading(false);
      });
  }, []);

  if (loading) return null;

  return (
    <section id="yorumlar" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-blue-600 font-black tracking-widest uppercase text-xs mb-4">Mutlu Müşterilerimiz</h2>
        <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-16">Safir Deneyimini Keşfedin</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-slate-50 p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-slate-100 text-left hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <div className="flex text-amber-400 mb-4 sm:mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={14} />)}
              </div>
              <p className="text-slate-600 font-medium leading-relaxed italic mb-6 sm:mb-8 text-sm sm:text-base">&quot;{review.comment}&quot;</p>
              <div className="flex items-center gap-3 sm:gap-4">
                {review.image ? (
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl overflow-hidden ring-4 ring-white shadow-sm">
                    <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl sm:rounded-2xl flex items-center justify-center text-blue-600 ring-4 ring-white shadow-sm overflow-hidden">
                    <span className="text-sm sm:text-base font-black">{review.name.charAt(0)}</span>
                  </div>
                )}
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-slate-900">{review.name}</h4>
                  <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
