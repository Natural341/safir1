"use client";

import React, { useState, useEffect } from 'react';
import { useCMS } from '@/context/CMSContext';
import Link from 'next/link';
import { Star } from 'lucide-react';

export default function AdminPage() {
  const { data, updateData } = useCMS();
  const [localData, setLocalData] = useState(data);
  const [activeTab, setActiveTab] = useState<'general' | 'services' | 'pricing' | 'gallery' | 'reviews'>('general');

  const handleSave = () => {
    updateData(localData);
    alert("Tüm değişiklikler başarıyla kaydedildi!");
  };

  const [allReviews, setAllReviews] = useState<any[]>([]);
  const [loadingReviews, setLoadingReviews] = useState(false);

  useEffect(() => {
    if (activeTab === 'reviews') {
      setLoadingReviews(true);
      fetch('/api/reviews?admin=true')
        .then(res => res.json())
        .then(data => {
          setAllReviews(data);
          setLoadingReviews(false);
        });
    }
  }, [activeTab]);

  const generateReviewLink = async () => {
    const res = await fetch('/api/reviews/token', { method: 'POST' });
    const { token } = await res.json();
    const link = `${window.location.origin}/yorum-yap/${token}`;
    const whatsappLink = `https://wa.me/${data?.contact?.whatsapp || '905529475313'}?text=Hizmetimizi değerlendirmek için bu bağlantıyı kullanabilirsiniz: ${link}`;
    window.open(whatsappLink, '_blank');
    alert("WhatsApp için yorum linki oluşturuldu ve yeni sekmede açıldı!");
  };

  const updateReviewStatus = async (id: number, status: string) => {
    await fetch('/api/reviews', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status })
    });
    setAllReviews(prev => prev.map(r => r.id === id ? { ...r, status } : r));
  };

  const deleteReview = async (id: number) => {
    if (confirm('Bu yorumu silmek istediğinize emin misiniz?')) {
      await fetch('/api/reviews', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
      setAllReviews(prev => prev.filter(r => r.id !== id));
    }
  };

  const inputClass = "w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all";
  const labelClass = "text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block";

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
          {/* Header */}
          <div className="px-10 py-8 border-b border-slate-100 flex justify-between items-center bg-white">
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">Yönetim Paneli</h1>
              <p className="text-sm text-slate-500 font-medium">Site içeriğini ve fiyatlandırmayı buradan yönetin.</p>
            </div>
            <div className="flex gap-4">
              <Link href="/" className="px-6 py-3 rounded-xl font-bold text-sm text-slate-500 hover:bg-slate-50 transition-all border border-slate-200">Siteye Dön</Link>
              <button onClick={handleSave} className="px-8 py-3 rounded-xl font-black text-sm bg-blue-600 text-white shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all">Değişiklikleri Kaydet</button>
            </div>
          </div>

          <div className="flex min-h-[600px]">
            {/* Sidebar */}
            <div className="w-64 border-r border-slate-100 bg-slate-50/50 p-8 flex flex-col gap-2">
              {[
                { id: 'general', label: 'Genel & İletişim' },
                { id: 'services', label: 'Hizmetler' },
                { id: 'pricing', label: 'Fiyat Ayarları' },
                { id: 'gallery', label: 'Foto Galeri' },
                { id: 'reviews', label: 'Müşteri Yorumları' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`w-full text-left px-5 py-3.5 rounded-xl font-bold text-sm transition-all ${activeTab === tab.id ? 'bg-white text-blue-600 shadow-sm ring-1 ring-slate-100' : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="flex-1 p-10 bg-white overflow-y-auto max-h-[800px]">
               {activeTab === 'reviews' && (
                 <div className="space-y-8">
                    <div className="flex justify-between items-center bg-blue-50 p-6 rounded-3xl border border-blue-100">
                      <div>
                        <h4 className="font-black text-blue-900 mb-1">Yeni Yorum İste</h4>
                        <p className="text-xs text-blue-700 font-medium">Müşterinize özel WhatsApp yorum linki oluşturun.</p>
                      </div>
                      <button 
                        onClick={generateReviewLink}
                        className="bg-blue-600 text-white px-6 py-3 rounded-xl font-black text-sm shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all"
                      >
                        Yorum Linki Oluştur
                      </button>
                    </div>

                    <div className="space-y-4">
                      {loadingReviews ? <p className="text-center py-10">Yükleniyor...</p> : allReviews.length === 0 ? <p className="text-center py-10">Henüz yorum yok.</p> : (
                        allReviews.map((r: any) => (
                          <div key={r.id} className="p-6 border border-slate-100 rounded-3xl bg-slate-50/50 hover:bg-slate-50 transition-all">
                            <div className="flex justify-between items-start mb-4">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center font-black text-blue-600 shadow-sm border border-slate-100">{r.name.charAt(0)}</div>
                                <div>
                                  <h5 className="font-black text-slate-900">{r.name} <span className="text-[10px] text-slate-400 ml-2">{r.date}</span></h5>
                                  <div className="flex text-amber-400 gap-0.5 mt-0.5">
                                    {[...Array(r.rating)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                {r.status === 'pending' && r.comment && (
                                  <button onClick={() => updateReviewStatus(r.id, 'approved')} className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg text-xs font-black hover:bg-emerald-200 transition-all">Onayla</button>
                                )}
                                {r.status === 'approved' && (
                                  <button onClick={() => updateReviewStatus(r.id, 'pending')} className="px-4 py-2 bg-slate-200 text-slate-600 rounded-lg text-xs font-black hover:bg-slate-300 transition-all">Yayından Kaldır</button>
                                )}
                                <button onClick={() => deleteReview(r.id)} className="px-4 py-2 bg-rose-50 text-rose-600 rounded-lg text-xs font-black hover:bg-rose-100 transition-all">Sil</button>
                              </div>
                            </div>
                            {r.comment ? (
                              <p className="text-sm text-slate-600 font-medium leading-relaxed italic border-l-4 border-slate-200 pl-4 py-1">{r.comment}</p>
                            ) : (
                              <p className="text-xs text-amber-600 font-black tracking-widest uppercase">Bekleyen Link (Müşteri henüz yazmadı)</p>
                            )}
                          </div>
                        ))
                      )}
                    </div>
                 </div>
               )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
