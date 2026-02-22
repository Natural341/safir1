"use client";

import React, { useState } from 'react';
import { useCMS } from '../context/CMSContext';

const ContactForm: React.FC = () => {
  const { data } = useCMS();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const inputClass = "w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-all";
  const labelClass = "text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 block";

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div className="space-y-12">
            <div>
              <h2 className="text-blue-600 font-black tracking-[0.3em] uppercase text-[11px] mb-4">İletişim</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter">Sizin için ne yapabiliriz?</h3>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">İstanbul genelinde her noktaya hizmet veriyoruz. Bize dilediğiniz kanaldan ulaşabilirsiniz.</p>
            </div>

            <div className="flex flex-wrap gap-6">
              <a href={`tel:${data.contact.phone}`} className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg active:scale-95 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Arayın</span>
              </a>

              <a href={`https://wa.me/${data.contact.whatsapp}`} target="_blank" className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg active:scale-95 transition-all">
                  <img src="/whatsapp.svg" alt="WhatsApp" className="w-10 h-10" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">WhatsApp</span>
              </a>

              <a href={`https://www.instagram.com/${data.contact.instagram}`} target="_blank" className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center shadow-lg active:scale-95 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Instagram</span>
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100">
                <h4 className="font-black text-slate-900 mb-2">E-Posta</h4>
                <p className="text-slate-500 text-sm font-medium">{data.contact.email}</p>
              </div>
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100">
                <h4 className="font-black text-slate-900 mb-2">Merkez Ofis</h4>
                <a href="https://maps.google.com/?q=Atatürk+Mah.+Demokrasi+Cad.+Alaca+Sk.+No:37+Sancaktepe+İstanbul" target="_blank" rel="noopener noreferrer" className="text-slate-500 text-sm font-medium hover:text-blue-600 transition-colors underline underline-offset-2">
                  {data.contact.address}
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 p-8 md:p-12 relative overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>İsim Soyisim</label>
                  <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Adınız" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Telefon</label>
                  <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="0555..." className={inputClass} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Konu</label>
                <select name="subject" value={formData.subject} onChange={handleChange} className={inputClass}>
                  <option value="">Seçiniz...</option>
                  <option value="teklif">Fiyat Teklifi</option>
                  <option value="randevu">Randevu</option>
                  <option value="bilgi">Hizmet Bilgisi</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Mesajınız</label>
                <textarea required name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Detaylar..." className={`${inputClass} resize-none`} />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full py-5 rounded-2xl font-black text-base transition-all active:scale-95 shadow-xl ${status === 'success' ? 'bg-green-500 text-white' :
                  status === 'error' ? 'bg-red-500 text-white' :
                    'bg-slate-900 text-white hover:bg-blue-600'
                  }`}
              >
                {status === 'loading' ? 'Gönderiliyor...' :
                  status === 'success' ? 'Mesajınız Alındı!' :
                    status === 'error' ? 'Hata Oluştu, Tekrar Deneyin' :
                      'Mesaj Gönder'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
