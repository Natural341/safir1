"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useCMS } from '@/context/CMSContext';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Upload, Trash2, Plus, Edit3, X, Save, Bold, Italic, Heading2, List, ImagePlus, Quote, Eye, Code2, Lock, Camera } from 'lucide-react';

// ─── Image Upload Helper ─────────────────────────────────────────
async function uploadFile(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('file', file);
  const res = await fetch('/api/upload', { method: 'POST', body: formData });
  const data = await res.json();
  if (data.url) return data.url;
  throw new Error(data.error || 'Upload failed');
}

// ─── Image Picker Component ─────────────────────────────────────
function ImagePicker({ currentSrc, onImageChange, label }: { currentSrc: string; onImageChange: (url: string) => void; label?: string }) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadFile(file);
      onImageChange(url);
    } catch (err) {
      alert('Gorsel yuklenemedi!');
    }
    setUploading(false);
    if (fileRef.current) fileRef.current.value = '';
  };

  return (
    <div>
      {label && <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">{label}</label>}
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-xl overflow-hidden border border-slate-200 bg-slate-50 relative flex-shrink-0">
          {currentSrc ? (
            <Image src={currentSrc} alt="Preview" fill className="object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-300">
              <Upload size={20} />
            </div>
          )}
        </div>
        <div className="flex-1">
          <input type="file" ref={fileRef} onChange={handleFileSelect} accept="image/*" className="hidden" />
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            disabled={uploading}
            className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-black hover:bg-slate-200 transition-all disabled:opacity-50 flex items-center gap-2"
          >
            <Upload size={14} />
            {uploading ? 'Yukleniyor...' : 'Dosya Sec'}
          </button>
          {currentSrc && <p className="text-[10px] text-slate-400 mt-1 truncate max-w-[200px]">{currentSrc}</p>}
        </div>
      </div>
    </div>
  );
}

// ─── Rich Text Editor Component ─────────────────────────────────
function RichEditor({ value, onChange, placeholder, minHeight = '300px' }: { value: string; onChange: (val: string) => void; placeholder?: string; minHeight?: string }) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(false);

  const insertAtCursor = (before: string, after: string = '') => {
    const ta = textareaRef.current;
    if (!ta) return;
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    const selected = value.substring(start, end);
    const newText = value.substring(0, start) + before + selected + after + value.substring(end);
    onChange(newText);
    setTimeout(() => {
      ta.focus();
      ta.selectionStart = start + before.length;
      ta.selectionEnd = start + before.length + selected.length;
    }, 0);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadFile(file);
      insertAtCursor(`\n<img src="${url}" alt="${file.name}" style="max-width:100%;border-radius:16px;margin:16px 0" />\n`);
    } catch { alert('Gorsel yuklenemedi!'); }
    setUploading(false);
    if (fileRef.current) fileRef.current.value = '';
  };

  const btnClass = 'p-2 rounded-lg hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-all';

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
      <div className="flex items-center gap-1 px-3 py-2 border-b border-slate-100 bg-slate-50 flex-wrap">
        <button type="button" onClick={() => insertAtCursor('<strong>', '</strong>')} className={btnClass} title="Kalin"><Bold size={15} /></button>
        <button type="button" onClick={() => insertAtCursor('<em>', '</em>')} className={btnClass} title="Italik"><Italic size={15} /></button>
        <div className="w-px h-5 bg-slate-200 mx-1" />
        <button type="button" onClick={() => insertAtCursor('<h2>', '</h2>')} className={btnClass} title="Baslik"><Heading2 size={15} /></button>
        <button type="button" onClick={() => insertAtCursor('<blockquote>', '</blockquote>')} className={btnClass} title="Alinti"><Quote size={15} /></button>
        <button type="button" onClick={() => insertAtCursor('<ul>\n<li>', '</li>\n</ul>')} className={btnClass} title="Liste"><List size={15} /></button>
        <div className="w-px h-5 bg-slate-200 mx-1" />
        <input type="file" ref={fileRef} onChange={handleImageUpload} accept="image/*" className="hidden" />
        <button type="button" onClick={() => fileRef.current?.click()} disabled={uploading} className={`${btnClass} flex items-center gap-1.5 text-xs font-bold ${uploading ? 'opacity-50' : ''}`} title="Gorsel Ekle">
          <ImagePlus size={15} />{uploading ? 'Yukleniyor...' : 'Gorsel Ekle'}
        </button>
        <div className="flex-1" />
        <button type="button" onClick={() => setPreview(!preview)} className={`${btnClass} flex items-center gap-1.5 text-xs font-bold ${preview ? 'bg-blue-100 text-blue-700' : ''}`}>
          {preview ? <><Code2 size={14} /> Kod</> : <><Eye size={14} /> Onizle</>}
        </button>
      </div>
      {preview ? (
        <div className="p-6 prose prose-sm max-w-none min-h-[200px] prose-img:rounded-2xl prose-img:max-h-[400px] prose-img:object-cover" style={{ minHeight }} dangerouslySetInnerHTML={{ __html: value || '<p class="text-slate-300">Icerik bos...</p>' }} />
      ) : (
        <textarea
          ref={textareaRef}
          className="w-full px-4 py-3 text-sm outline-none resize-y font-mono"
          style={{ minHeight }}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

// ─── Types ───────────────────────────────────────────────────────
interface BlogPost {
  id?: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date?: string;
}

interface ProjectItem {
  id?: number;
  title: string;
  description?: string;
  category: string;
  region: string;
  imageBefore: string;
  imageAfter: string;
}

// ─── Login Gate ──────────────────────────────────────────────────
function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (res.ok) {
        sessionStorage.setItem('admin_auth', 'true');
        onLogin();
      } else {
        setError('Kullanici adi veya sifre hatali!');
      }
    } catch {
      setError('Baglanti hatasi!');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-white rounded-[2.5rem] shadow-2xl p-12 border border-slate-100">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-slate-900 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Lock className="text-white" size={32} />
            </div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Yonetim Paneli</h1>
            <p className="text-sm text-slate-500 mt-2 font-medium">Giris yapmak icin bilgilerinizi girin.</p>
          </div>

          {error && (
            <div className="bg-rose-50 border border-rose-200 text-rose-600 px-5 py-3 rounded-xl text-sm font-bold mb-6 text-center">{error}</div>
          )}

          <div className="space-y-5">
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">Kullanici Adi</label>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                placeholder="admin"
                required
              />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">Sifre</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-8 px-8 py-4 rounded-xl font-black text-sm bg-slate-900 text-white shadow-xl hover:bg-blue-600 transition-all disabled:opacity-50"
          >
            {loading ? 'Giris Yapiliyor...' : 'Giris Yap'}
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── Main Admin Page ─────────────────────────────────────────────
export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const auth = sessionStorage.getItem('admin_auth');
    if (auth === 'true') setIsAuthenticated(true);
    setCheckingAuth(false);
  }, []);

  if (checkingAuth) return <div className="min-h-screen bg-slate-50 flex items-center justify-center"><div className="w-10 h-10 border-4 border-slate-900 border-t-transparent rounded-full animate-spin" /></div>;
  if (!isAuthenticated) return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;

  return <AdminDashboard />;
}

function AdminDashboard() {
  const { data, updateData } = useCMS();
  const [localData, setLocalData] = useState(data);
  const [activeTab, setActiveTab] = useState<'general' | 'services' | 'pricing' | 'gallery' | 'blog' | 'reviews'>('general');
  const [saving, setSaving] = useState(false);

  // Blog state
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loadingBlog, setLoadingBlog] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isNewPost, setIsNewPost] = useState(false);

  // Gallery/Projects state
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(false);
  const [newProject, setNewProject] = useState<ProjectItem | null>(null);

  // Reviews state
  const [allReviews, setAllReviews] = useState<any[]>([]);
  const [loadingReviews, setLoadingReviews] = useState(false);

  useEffect(() => { setLocalData(data); }, [data]);

  // ─── CMS Save ────────────────────────────────────────────────
  const handleSave = async () => {
    setSaving(true);
    await updateData(localData);
    setSaving(false);
    alert("Tum degisiklikler basariyla kaydedildi!");
  };

  // ─── Blog Fetch ──────────────────────────────────────────────
  useEffect(() => {
    if (activeTab === 'blog') {
      setLoadingBlog(true);
      fetch('/api/blog').then(res => res.json()).then(d => { if (Array.isArray(d)) setBlogPosts(d); setLoadingBlog(false); }).catch(() => setLoadingBlog(false));
    }
  }, [activeTab]);

  const saveBlogPost = async () => {
    if (!editingPost) return;
    try {
      if (isNewPost) {
        const res = await fetch('/api/blog', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(editingPost) });
        const newPost = await res.json();
        setBlogPosts(prev => [newPost, ...prev]);
      } else {
        await fetch('/api/blog', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(editingPost) });
        setBlogPosts(prev => prev.map(p => p.id === editingPost.id ? editingPost : p));
      }
      setEditingPost(null);
      setIsNewPost(false);
      alert("Blog yazisi kaydedildi!");
    } catch { alert("Hata olustu!"); }
  };

  const deleteBlogPost = async (id: number) => {
    if (!confirm('Bu yaziyi silmek istediginize emin misiniz?')) return;
    await fetch('/api/blog', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
    setBlogPosts(prev => prev.filter(p => p.id !== id));
  };

  // ─── Gallery / Projects ──────────────────────────────────────
  useEffect(() => {
    if (activeTab === 'gallery') {
      setLoadingProjects(true);
      fetch('/api/projects').then(res => res.json()).then(d => { if (Array.isArray(d)) setProjects(d); setLoadingProjects(false); }).catch(() => setLoadingProjects(false));
    }
  }, [activeTab]);

  const saveProject = async () => {
    if (!newProject) return;
    try {
      const res = await fetch('/api/projects', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newProject) });
      const proj = await res.json();
      setProjects(prev => [proj, ...prev]);
      setNewProject(null);
      alert("Proje eklendi!");
    } catch { alert("Hata olustu!"); }
  };

  const deleteProject = async (id: number) => {
    if (!confirm('Bu projeyi silmek istediginize emin misiniz?')) return;
    await fetch('/api/projects', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  // ─── Reviews ─────────────────────────────────────────────────
  useEffect(() => {
    if (activeTab === 'reviews') {
      setLoadingReviews(true);
      fetch('/api/reviews?admin=true').then(res => res.json()).then(d => { setAllReviews(d); setLoadingReviews(false); }).catch(() => setLoadingReviews(false));
    }
  }, [activeTab]);

  const generateReviewLink = async () => {
    const res = await fetch('/api/reviews/token', { method: 'POST' });
    const { token } = await res.json();
    const link = `${window.location.origin}/yorum-yap/${token}`;
    const whatsappLink = `https://wa.me/${localData?.contact?.whatsapp || '905529475313'}?text=Hizmetimizi degerlendirmek icin bu linki kullanabilirsiniz: ${link}`;
    window.open(whatsappLink, '_blank');
  };

  const updateReviewStatus = async (id: number, status: string) => {
    await fetch('/api/reviews', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, status }) });
    setAllReviews(prev => prev.map(r => r.id === id ? { ...r, status } : r));
  };

  const deleteReview = async (id: number) => {
    if (!confirm('Bu yorumu silmek istediginize emin misiniz?')) return;
    await fetch('/api/reviews', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
    setAllReviews(prev => prev.filter(r => r.id !== id));
  };

  // ─── Service Actions ─────────────────────────────────────────
  const addService = () => {
    const newId = `service-${Date.now()}`;
    setLocalData({ ...localData, services: [...localData.services, { id: newId, title: 'Yeni Hizmet', desc: 'Hizmet aciklamasi.', img: '/images/hero1.jpg', color: 'text-blue-600 bg-blue-50', multiplier: 1 }] });
  };

  const removeService = (idx: number) => {
    if (!confirm('Bu hizmeti silmek istediginize emin misiniz?')) return;
    setLocalData({ ...localData, services: localData.services.filter((_, i) => i !== idx) });
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_auth');
    window.location.reload();
  };

  const inputClass = "w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all";
  const labelClass = "text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block";
  const cardClass = "p-6 bg-slate-50 rounded-2xl border border-slate-100";

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
          {/* Header */}
          <div className="px-10 py-8 border-b border-slate-100 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">Yonetim Paneli</h1>
              <p className="text-sm text-slate-500 font-medium">Site icerigini buradan yonetin.</p>
            </div>
            <div className="flex gap-4">
              <button onClick={handleLogout} className="px-6 py-3 rounded-xl font-bold text-sm text-rose-500 hover:bg-rose-50 transition-all border border-rose-200">Cikis Yap</button>
              <Link href="/" className="px-6 py-3 rounded-xl font-bold text-sm text-slate-500 hover:bg-slate-50 transition-all border border-slate-200">Siteye Don</Link>
              <button onClick={handleSave} disabled={saving} className="px-8 py-3 rounded-xl font-black text-sm bg-blue-600 text-white shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all disabled:opacity-50">
                {saving ? 'Kaydediliyor...' : 'Degisiklikleri Kaydet'}
              </button>
            </div>
          </div>

          <div className="flex min-h-[700px]">
            {/* Sidebar */}
            <div className="w-64 border-r border-slate-100 bg-slate-50/50 p-8 flex flex-col gap-2">
              {[
                { id: 'general', label: 'Genel & Iletisim' },
                { id: 'services', label: 'Hizmetler' },
                { id: 'pricing', label: 'Fiyat Ayarlari' },
                { id: 'gallery', label: 'Galeri / Projeler' },
                { id: 'blog', label: 'Blog Yazilari' },
                { id: 'reviews', label: 'Musteri Yorumlari' },
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

            {/* Content */}
            <div className="flex-1 p-10 bg-white overflow-y-auto max-h-[800px]">

              {/* ═══════════════ GENEL & ILETISIM ═══════════════ */}
              {activeTab === 'general' && (
                <div className="space-y-10">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 mb-6">Iletisim Bilgileri</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClass}>Telefon</label>
                        <input className={inputClass} value={localData.contact.phone} onChange={e => setLocalData({ ...localData, contact: { ...localData.contact, phone: e.target.value } })} />
                      </div>
                      <div>
                        <label className={labelClass}>WhatsApp (ulke kodu ile)</label>
                        <input className={inputClass} value={localData.contact.whatsapp} onChange={e => setLocalData({ ...localData, contact: { ...localData.contact, whatsapp: e.target.value } })} />
                      </div>
                      <div>
                        <label className={labelClass}>E-Posta</label>
                        <input className={inputClass} value={localData.contact.email} onChange={e => setLocalData({ ...localData, contact: { ...localData.contact, email: e.target.value } })} />
                      </div>
                      <div>
                        <label className={labelClass}>Instagram</label>
                        <input className={inputClass} value={localData.contact.instagram} onChange={e => setLocalData({ ...localData, contact: { ...localData.contact, instagram: e.target.value } })} />
                      </div>
                      <div className="md:col-span-2">
                        <label className={labelClass}>Adres</label>
                        <input className={inputClass} value={localData.contact.address} onChange={e => setLocalData({ ...localData, contact: { ...localData.contact, address: e.target.value } })} />
                      </div>
                    </div>
                  </div>

                  {/* Hero Slaytlari */}
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-black text-slate-900">Hero Slaytlari</h3>
                      <button
                        onClick={() => setLocalData({ ...localData, hero: { slides: [...localData.hero.slides, { id: Date.now(), title: '', subtitle: '', desc: '', image: '/images/hero1.jpg' }] } })}
                        className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-black hover:bg-slate-200 transition-all flex items-center gap-2"
                      >
                        <Plus size={14} /> Yeni Slayt
                      </button>
                    </div>
                    {localData.hero.slides.map((slide, idx) => (
                      <div key={idx} className={`${cardClass} mb-4`}>
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Slayt {idx + 1}</span>
                          {localData.hero.slides.length > 1 && (
                            <button onClick={() => setLocalData({ ...localData, hero: { slides: localData.hero.slides.filter((_, i) => i !== idx) } })} className="text-xs font-black text-rose-500 hover:text-rose-700 flex items-center gap-1">
                              <Trash2 size={12} /> Sil
                            </button>
                          )}
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className={labelClass}>Baslik</label>
                            <input className={inputClass} value={slide.title} onChange={e => { const s = [...localData.hero.slides]; s[idx] = { ...s[idx], title: e.target.value }; setLocalData({ ...localData, hero: { slides: s } }); }} />
                          </div>
                          <div>
                            <label className={labelClass}>Alt Baslik</label>
                            <input className={inputClass} value={slide.subtitle} onChange={e => { const s = [...localData.hero.slides]; s[idx] = { ...s[idx], subtitle: e.target.value }; setLocalData({ ...localData, hero: { slides: s } }); }} />
                          </div>
                          <div>
                            <label className={labelClass}>Aciklama</label>
                            <input className={inputClass} value={slide.desc} onChange={e => { const s = [...localData.hero.slides]; s[idx] = { ...s[idx], desc: e.target.value }; setLocalData({ ...localData, hero: { slides: s } }); }} />
                          </div>
                          <ImagePicker label="Gorsel" currentSrc={slide.image} onImageChange={url => { const s = [...localData.hero.slides]; s[idx] = { ...s[idx], image: url }; setLocalData({ ...localData, hero: { slides: s } }); }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ═══════════════ HIZMETLER ═══════════════ */}
              {activeTab === 'services' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-black text-slate-900">Hizmetler</h3>
                    <button onClick={addService} className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-black hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-100">
                      <Plus size={14} /> Yeni Hizmet Ekle
                    </button>
                  </div>
                  {localData.services.map((service, idx) => (
                    <div key={idx} className={cardClass}>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{service.title || `Hizmet ${idx + 1}`}</span>
                        <button onClick={() => removeService(idx)} className="text-xs font-black text-rose-500 hover:text-rose-700 flex items-center gap-1"><Trash2 size={12} /> Sil</button>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>ID (URL icin)</label>
                          <input className={inputClass} value={service.id} onChange={e => { const s = [...localData.services]; s[idx] = { ...s[idx], id: e.target.value }; setLocalData({ ...localData, services: s }); }} />
                        </div>
                        <div>
                          <label className={labelClass}>Baslik</label>
                          <input className={inputClass} value={service.title} onChange={e => { const s = [...localData.services]; s[idx] = { ...s[idx], title: e.target.value }; setLocalData({ ...localData, services: s }); }} />
                        </div>
                        <div className="md:col-span-2">
                          <label className={labelClass}>Aciklama & Icerik</label>
                          <RichEditor value={service.desc} onChange={val => { const s = [...localData.services]; s[idx] = { ...s[idx], desc: val }; setLocalData({ ...localData, services: s }); }} placeholder="Hizmet aciklamasi..." minHeight="150px" />
                        </div>
                        <div>
                          <label className={labelClass}>Fiyat Carpani</label>
                          <input className={inputClass} type="number" step="0.1" value={service.multiplier} onChange={e => { const s = [...localData.services]; s[idx] = { ...s[idx], multiplier: parseFloat(e.target.value) || 1 }; setLocalData({ ...localData, services: s }); }} />
                        </div>
                        <ImagePicker label="Hizmet Gorseli" currentSrc={service.img} onImageChange={url => { const s = [...localData.services]; s[idx] = { ...s[idx], img: url }; setLocalData({ ...localData, services: s }); }} />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* ═══════════════ FIYAT AYARLARI ═══════════════ */}
              {activeTab === 'pricing' && (
                <div className="space-y-8">
                  <h3 className="text-xl font-black text-slate-900">Fiyat Ayarlari</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Baz Ucret (TL)</label>
                      <input className={inputClass} type="number" value={localData.pricing.baseFee} onChange={e => setLocalData({ ...localData, pricing: { ...localData.pricing, baseFee: parseInt(e.target.value) || 0 } })} />
                    </div>
                    <div>
                      <label className={labelClass}>Standart m² Fiyati (TL)</label>
                      <input className={inputClass} type="number" value={localData.pricing.standardRate} onChange={e => setLocalData({ ...localData, pricing: { ...localData.pricing, standardRate: parseInt(e.target.value) || 0 } })} />
                    </div>
                    <div>
                      <label className={labelClass}>Detayli m² Fiyati (TL)</label>
                      <input className={inputClass} type="number" value={localData.pricing.detailedRate} onChange={e => setLocalData({ ...localData, pricing: { ...localData.pricing, detailedRate: parseInt(e.target.value) || 0 } })} />
                    </div>
                    <div>
                      <label className={labelClass}>Oda Basi Fiyat (TL)</label>
                      <input className={inputClass} type="number" value={localData.pricing.roomRate} onChange={e => setLocalData({ ...localData, pricing: { ...localData.pricing, roomRate: parseInt(e.target.value) || 0 } })} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 mb-4">Ekstra Hizmetler</h4>
                    {localData.pricing.extras.map((extra, idx) => (
                      <div key={idx} className="flex items-end gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 mb-3">
                        <div className="flex-1">
                          <label className={labelClass}>Hizmet Adi</label>
                          <input className={inputClass} value={extra.label} onChange={e => { const ex = [...localData.pricing.extras]; ex[idx] = { ...ex[idx], label: e.target.value }; setLocalData({ ...localData, pricing: { ...localData.pricing, extras: ex } }); }} />
                        </div>
                        <div className="w-40">
                          <label className={labelClass}>Fiyat (TL)</label>
                          <input className={inputClass} type="number" value={extra.price} onChange={e => { const ex = [...localData.pricing.extras]; ex[idx] = { ...ex[idx], price: parseInt(e.target.value) || 0 }; setLocalData({ ...localData, pricing: { ...localData.pricing, extras: ex } }); }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ═══════════════ GALERI / PROJELER ═══════════════ */}
              {activeTab === 'gallery' && (
                <div className="space-y-6">
                  {newProject ? (
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-black text-slate-900">Yeni Proje Ekle</h3>
                        <button onClick={() => setNewProject(null)} className="text-slate-400 hover:text-slate-600"><X size={20} /></button>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                          <label className={labelClass}>Baslik</label>
                          <input className={inputClass} value={newProject.title} onChange={e => setNewProject({ ...newProject, title: e.target.value })} placeholder="Proje basligi..." />
                        </div>
                        <div>
                          <label className={labelClass}>Kategori</label>
                          <input className={inputClass} value={newProject.category} onChange={e => setNewProject({ ...newProject, category: e.target.value })} placeholder="Ev Temizligi, Ofis..." />
                        </div>
                        <div>
                          <label className={labelClass}>Bolge</label>
                          <input className={inputClass} value={newProject.region} onChange={e => setNewProject({ ...newProject, region: e.target.value })} placeholder="Besiktas, Kadikoy..." />
                        </div>
                        <ImagePicker label="Oncesi Gorseli" currentSrc={newProject.imageBefore} onImageChange={url => setNewProject({ ...newProject, imageBefore: url })} />
                        <ImagePicker label="Sonrasi Gorseli" currentSrc={newProject.imageAfter} onImageChange={url => setNewProject({ ...newProject, imageAfter: url })} />
                        <div className="md:col-span-2">
                          <label className={labelClass}>Aciklama</label>
                          <RichEditor value={newProject.description || ''} onChange={val => setNewProject({ ...newProject, description: val })} placeholder="Proje detayi..." minHeight="150px" />
                        </div>
                      </div>
                      <div className="flex gap-4 pt-4">
                        <button onClick={saveProject} className="px-8 py-3 rounded-xl font-black text-sm bg-blue-600 text-white shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all flex items-center gap-2"><Save size={16} /> Kaydet</button>
                        <button onClick={() => setNewProject(null)} className="px-6 py-3 rounded-xl font-bold text-sm text-slate-500 hover:bg-slate-50 border border-slate-200 transition-all">Iptal</button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-black text-slate-900">Galeri / Projeler</h3>
                        <button
                          onClick={() => setNewProject({ title: '', category: '', region: '', imageBefore: '', imageAfter: '', description: '' })}
                          className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-black hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-100"
                        >
                          <Plus size={14} /> Yeni Proje Ekle
                        </button>
                      </div>

                      {loadingProjects ? (
                        <div className="text-center py-16"><div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" /></div>
                      ) : projects.length === 0 ? (
                        <div className="text-center py-16 text-slate-400"><p className="text-sm font-medium">Henuz proje yok.</p></div>
                      ) : (
                        <div className="grid md:grid-cols-2 gap-6">
                          {projects.map(proj => (
                            <div key={proj.id} className={`${cardClass} relative group`}>
                              <button onClick={() => proj.id && deleteProject(proj.id)} className="absolute top-4 right-4 p-2 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-rose-600 hover:border-rose-200 transition-all opacity-0 group-hover:opacity-100 z-10">
                                <Trash2 size={14} />
                              </button>
                              <div className="grid grid-cols-2 gap-3 mb-4">
                                <div className="relative h-32 rounded-xl overflow-hidden border border-slate-200">
                                  {proj.imageBefore ? <Image src={proj.imageBefore} alt="Once" fill className="object-cover" /> : <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300 text-[10px] font-black uppercase">Oncesi</div>}
                                  <span className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] font-black uppercase text-slate-500">Oncesi</span>
                                </div>
                                <div className="relative h-32 rounded-xl overflow-hidden border border-slate-200">
                                  {proj.imageAfter ? <Image src={proj.imageAfter} alt="Sonra" fill className="object-cover" /> : <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300 text-[10px] font-black uppercase">Sonrasi</div>}
                                  <span className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] font-black uppercase text-emerald-600">Sonrasi</span>
                                </div>
                              </div>
                              <h4 className="font-black text-slate-900 text-sm mb-1">{proj.title}</h4>
                              <div className="flex gap-3">
                                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{proj.category}</span>
                                <span className="text-[10px] text-slate-400">{proj.region}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}

              {/* ═══════════════ BLOG YAZILARI ═══════════════ */}
              {activeTab === 'blog' && (
                <div className="space-y-6">
                  {editingPost ? (
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-black text-slate-900">{isNewPost ? 'Yeni Blog Yazisi' : 'Yaziyi Duzenle'}</h3>
                        <button onClick={() => { setEditingPost(null); setIsNewPost(false); }} className="text-slate-400 hover:text-slate-600"><X size={20} /></button>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                          <label className={labelClass}>Baslik</label>
                          <input className={inputClass} value={editingPost.title} onChange={e => setEditingPost({ ...editingPost, title: e.target.value })} placeholder="Blog yazisi basligi..." />
                        </div>
                        <div>
                          <label className={labelClass}>Kategori</label>
                          <input className={inputClass} value={editingPost.category} onChange={e => setEditingPost({ ...editingPost, category: e.target.value })} placeholder="Rehber, Kurumsal, Tip..." />
                        </div>
                        <ImagePicker label="Kapak Gorseli" currentSrc={editingPost.image} onImageChange={url => setEditingPost({ ...editingPost, image: url })} />
                        <div className="md:col-span-2">
                          <label className={labelClass}>Ozet</label>
                          <textarea className={`${inputClass} min-h-[80px] resize-y`} value={editingPost.excerpt} onChange={e => setEditingPost({ ...editingPost, excerpt: e.target.value })} placeholder="Kisa ozet..." />
                        </div>
                        <div className="md:col-span-2">
                          <label className={labelClass}>Icerik</label>
                          <RichEditor value={editingPost.content} onChange={val => setEditingPost({ ...editingPost, content: val })} placeholder="Blog yazisinin tam icerigi..." minHeight="400px" />
                        </div>
                      </div>
                      <div className="flex gap-4 pt-4">
                        <button onClick={saveBlogPost} className="px-8 py-3 rounded-xl font-black text-sm bg-blue-600 text-white shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all flex items-center gap-2"><Save size={16} /> Kaydet</button>
                        <button onClick={() => { setEditingPost(null); setIsNewPost(false); }} className="px-6 py-3 rounded-xl font-bold text-sm text-slate-500 hover:bg-slate-50 border border-slate-200 transition-all">Iptal</button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-black text-slate-900">Blog Yazilari</h3>
                        <button onClick={() => { setEditingPost({ title: '', excerpt: '', content: '', image: '', category: 'Rehber' }); setIsNewPost(true); }} className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-black hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-100">
                          <Plus size={14} /> Yeni Yazi Ekle
                        </button>
                      </div>
                      {loadingBlog ? (
                        <div className="text-center py-16"><div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" /></div>
                      ) : blogPosts.length === 0 ? (
                        <div className="text-center py-16 text-slate-400"><p className="text-sm font-medium">Henuz blog yazisi yok.</p></div>
                      ) : (
                        <div className="space-y-4">
                          {blogPosts.map(post => (
                            <div key={post.id} className={`${cardClass} flex items-center gap-6`}>
                              <div className="w-20 h-20 rounded-xl overflow-hidden border border-slate-200 relative flex-shrink-0">
                                {post.image ? <Image src={post.image} alt={post.title} fill className="object-cover" /> : <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300 text-xs">No img</div>}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-black text-slate-900 text-sm truncate">{post.title}</h4>
                                <p className="text-xs text-slate-400 mt-1 truncate">{post.excerpt}</p>
                                <div className="flex gap-3 mt-2">
                                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{post.category}</span>
                                  {post.date && <span className="text-[10px] text-slate-400">{post.date}</span>}
                                </div>
                              </div>
                              <div className="flex gap-2 flex-shrink-0">
                                <button onClick={() => { setEditingPost(post); setIsNewPost(false); }} className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-200 transition-all"><Edit3 size={14} /></button>
                                <button onClick={() => post.id && deleteBlogPost(post.id)} className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-rose-600 hover:border-rose-200 transition-all"><Trash2 size={14} /></button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}

              {/* ═══════════════ MUSTERI YORUMLARI ═══════════════ */}
              {activeTab === 'reviews' && (
                <div className="space-y-8">
                  <div className="flex justify-between items-center bg-blue-50 p-6 rounded-3xl border border-blue-100">
                    <div>
                      <h4 className="font-black text-blue-900 mb-1">Yeni Yorum Iste</h4>
                      <p className="text-xs text-blue-700 font-medium">Musterinize ozel WhatsApp yorum linki olusturun.</p>
                    </div>
                    <button onClick={generateReviewLink} className="bg-blue-600 text-white px-6 py-3 rounded-xl font-black text-sm shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">Yorum Linki Olustur</button>
                  </div>
                  <div className="space-y-4">
                    {loadingReviews ? <p className="text-center py-10">Yukleniyor...</p> : allReviews.length === 0 ? <p className="text-center py-10 text-slate-400">Henuz yorum yok.</p> : (
                      allReviews.map((r: any) => (
                        <div key={r.id} className="p-6 border border-slate-100 rounded-3xl bg-slate-50/50 hover:bg-slate-50 transition-all">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center font-black text-blue-600 shadow-sm border border-slate-100">{r.name?.charAt(0)}</div>
                              <div>
                                <h5 className="font-black text-slate-900">{r.name} <span className="text-[10px] text-slate-400 ml-2">{r.date}</span></h5>
                                <div className="flex text-amber-400 gap-0.5 mt-0.5">{[...Array(r.rating || 0)].map((_: any, i: number) => <Star key={i} size={10} fill="currentColor" />)}</div>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              {r.status === 'pending' && r.comment && <button onClick={() => updateReviewStatus(r.id, 'approved')} className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg text-xs font-black hover:bg-emerald-200 transition-all">Onayla</button>}
                              {r.status === 'approved' && <button onClick={() => updateReviewStatus(r.id, 'pending')} className="px-4 py-2 bg-slate-200 text-slate-600 rounded-lg text-xs font-black hover:bg-slate-300 transition-all">Yayindan Kaldir</button>}
                              <button onClick={() => deleteReview(r.id)} className="px-4 py-2 bg-rose-50 text-rose-600 rounded-lg text-xs font-black hover:bg-rose-100 transition-all">Sil</button>
                            </div>
                          </div>
                          {r.comment ? (
                            <p className="text-sm text-slate-600 font-medium leading-relaxed italic border-l-4 border-slate-200 pl-4 py-1">{r.comment}</p>
                          ) : (
                            <p className="text-xs text-amber-600 font-black tracking-widest uppercase">Bekleyen Link (Musteri henuz yazmadi)</p>
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
