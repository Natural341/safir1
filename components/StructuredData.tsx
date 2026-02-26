import React from 'react';

const faqItems = [
  { question: "Temizlik malzemeleri fiyata dahil mi?", answer: "Seçtiğiniz pakete göre değişmektedir. 'Malzemeli Temizlik' paketimizde tüm ekipman ve deterjanlar tarafımızdan karşılanmaktadır." },
  { question: "Personel güvenilir mi?", answer: "Safir Temizlik bünyesindeki tüm personeller eğitimli, sigortalı ve profesyonel ekibimizden oluşmaktadır. Yaşam alanlarınızın güvenliği bizim için birincil önceliktir." },
  { question: "Ödemeyi nasıl yapabilirim?", answer: "Kapıda nakit veya kredi kartı seçeneklerimiz mevcuttur. Yakında online ödeme sistemimiz de aktif olacaktır." },
  { question: "Aynı gün hizmet alabilir miyim?", answer: "Müsaitlik durumuna göre İstanbul genelinde 4 saat içinde servis sağlayabiliyoruz." },
  { question: "Memnun kalmazsam ne olur?", answer: "Hizmet sonrası 24 saat içinde bildirdiğiniz tüm aksaklıklar için ücretsiz telafi temizliği garantisi veriyoruz." },
  { question: "İstanbul'un hangi ilçelerine hizmet veriyorsunuz?", answer: "İstanbul'un Avrupa ve Anadolu yakasında toplam 39 ilçeye hizmet vermekteyiz. Beşiktaş, Kadıköy, Şişli, Bakırköy, Üsküdar, Ataşehir ve diğer tüm ilçelerde profesyonel temizlik ekiplerimiz bulunmaktadır." },
  { question: "İnşaat sonrası temizlik fiyatları ne kadar?", answer: "İnşaat sonrası temizlik fiyatlarımız metrekare ve temizlik derinliğine göre değişmektedir. Web sitemizdeki fiyat hesaplama aracımızdan anında teklif alabilir veya WhatsApp hattımızdan detaylı bilgi alabilirsiniz." },
  { question: "Düzenli temizlik hizmeti alabilir miyim?", answer: "Evet, haftalık, iki haftada bir veya aylık periyodik temizlik paketlerimiz mevcuttur. Düzenli müşterilerimize özel indirimli fiyatlar sunuyoruz." },
  { question: "Temizlik ne kadar sürer?", answer: "Hizmet süresi evinizin veya ofisinizin büyüklüğüne, oda sayısına ve seçtiğiniz temizlik türüne göre değişir. Ortalama bir daire temizliği 3-5 saat, detaylı temizlik ise 5-8 saat sürmektedir." },
  { question: "Hafta sonu ve resmi tatillerde hizmet veriyor musunuz?", answer: "Evet, 7 gün 24 saat hizmet vermekteyiz. Hafta sonu ve resmi tatillerde de ekiplerimiz aktif olarak çalışmaktadır. Bayram dönemlerinde yoğunluk yaşanabileceğinden erken rezervasyon yapmanızı öneririz." }
];

export default function StructuredData() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Safir Temizlik",
    "image": "https://safirtemizlik.com.tr/logo.png",
    "@id": "https://safirtemizlik.com.tr",
    "url": "https://safirtemizlik.com.tr",
    "telephone": "+905529475313",
    "priceRange": "₺₺",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Atatürk Mah. Demokrasi Cad. Alaca Sk. No:37",
      "addressLocality": "Sancaktepe",
      "addressRegion": "İstanbul",
      "postalCode": "34785",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.0082,
      "longitude": 28.9784
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "22:00"
    },
    "sameAs": [
      "https://www.instagram.com/safirtemizlik.hizmetleri"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "240"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Temizlik Hizmetleri",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ev Temizliği", "description": "İstanbul genelinde profesyonel ev temizliği hizmeti" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ofis Temizliği", "description": "Kurumsal ofis ve iş yeri temizliği" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "İnşaat Sonrası Temizlik", "description": "Yeni bina ve tadilat sonrası derin temizlik" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Apartman Temizliği", "description": "Apartman ve site ortak alan temizliği" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Boş Ev Temizliği", "description": "Taşınma öncesi ve sonrası boş ev temizliği" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cam Temizliği", "description": "İç ve dış cephe cam temizliği" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Malzemeli Temizlik", "description": "Tüm ekipman ve deterjan dahil temizlik" } }
      ]
    },
    "areaServed": {
      "@type": "City",
      "name": "İstanbul",
      "@id": "https://www.wikidata.org/wiki/Q406"
    },
    "knowsLanguage": "tr",
    "paymentAccepted": ["Nakit", "Kredi Kartı"],
    "currenciesAccepted": "TRY"
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": "https://safirtemizlik.com.tr"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Hizmetlerimiz",
        "item": "https://safirtemizlik.com.tr/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Blog",
        "item": "https://safirtemizlik.com.tr/blog"
      }
    ]
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Safir Temizlik",
    "url": "https://safirtemizlik.com.tr",
    "description": "İstanbul genelinde profesyonel ev, ofis ve kurumsal temizlik hizmetleri.",
    "publisher": {
      "@type": "Organization",
      "name": "Safir Temizlik",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safirtemizlik.com.tr/logo.png"
      }
    },
    "inLanguage": "tr-TR"
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Safir Temizlik",
    "url": "https://safirtemizlik.com.tr",
    "logo": "https://safirtemizlik.com.tr/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-552-947-5313",
      "contactType": "Müşteri Hizmetleri",
      "areaServed": "TR",
      "availableLanguage": "Turkish"
    }
  };

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Temizlik Fiyat Hesaplama Aracı",
    "url": "https://safirtemizlik.com.tr",
    "applicationCategory": "CalculatorApplication",
    "operatingSystem": "All",
    "description": "İstanbul içi ev, ofis, inşaat sonrası temizlik fiyatlarınızı anında hesaplayıp teklif alın.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "TRY"
    }
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Safir Temizlik'ten Hizmet Nasıl Alınır?",
    "description": "Profesyonel temizlik hizmeti alma sürecimiz 4 basit adımdan oluşur.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Fiyat Hesaplama ve Teklif",
        "text": "Web sitemizdeki hesaplama aracını kullanarak veya WhatsApp üzerinden anında fiyat teklifi alın.",
        "url": "https://safirtemizlik.com.tr/quote"
      },
      {
        "@type": "HowToStep",
        "name": "Randevu Onayı",
        "text": "Müsait olduğunuz gün ve saat için temizlik randevunuzu oluşturun.",
        "url": "https://safirtemizlik.com.tr/contact"
      },
      {
        "@type": "HowToStep",
        "name": "Profesyonel Temizlik",
        "text": "Eğitimli ekibimiz, seçtiğiniz pakete uygun (malzemeli veya malzemesiz) temizliği titizlikle gerçekleştirir.",
        "url": "https://safirtemizlik.com.tr/services"
      },
      {
        "@type": "HowToStep",
        "name": "Kontrol ve Memnuniyet",
        "text": "Temizlik sonrası alanı kontrol edip onayınız alındıktan sonra işlem tamamlanır. 24 saat ücretsiz telafi garantimiz mevcuttur.",
        "url": "https://safirtemizlik.com.tr/#reviews"
      }
    ],
    "totalTime": "PT10M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "TRY",
      "value": "Fiyatlar hizmete göre değişir"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />
    </>
  );
}
