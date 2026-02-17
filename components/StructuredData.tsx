import React from 'react';

const faqItems = [
  { question: "Temizlik malzemeleri fiyata dahil mi?", answer: "Seçtiğiniz pakete göre değişmektedir. 'Malzemeli Temizlik' paketimizde tüm ekipman ve deterjanlar tarafımızdan karşılanmaktadır." },
  { question: "Personel güvenilir mi?", answer: "Safir Temizlik bünyesindeki tüm personeller eğitimli, sigortalı ve profesyonel ekibimizden oluşmaktadır. Yaşam alanlarınızın güvenliği bizim için birincil önceliktir." },
  { question: "Ödemeyi nasıl yapabilirim?", answer: "Kapıda nakit veya kredi kartı seçeneklerimiz mevcuttur. Yakında online ödeme sistemimiz de aktif olacaktır." },
  { question: "Aynı gün hizmet alabilir miyim?", answer: "Müsaitlik durumuna göre İstanbul genelinde 4 saat içinde servis sağlayabiliyoruz." },
  { question: "Memnun kalmazsam ne olur?", answer: "Hizmet sonrası 24 saat içinde bildirdiğiniz tüm aksaklıklar için ücretsiz telafi temizliği garantisi veriyoruz." }
];

export default function StructuredData() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Safir Temizlik",
    "image": "https://safirtemizlik.com.tr/logo.png",
    "@id": "https://safirtemizlik.com.tr",
    "url": "https://safirtemizlik.com.tr",
    "telephone": "+905529475313",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "İstanbul Geneli Hizmet Ağı",
      "addressLocality": "İstanbul",
      "postalCode": "34000",
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
      "https://instagram.com/safirtemizlik.hizmetleri"
    ],
    "priceRange": "₺₺",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "240"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Temizlik Hizmetleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ev Temizliği"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ofis Temizliği"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "İnşaat Sonrası Temizlik"
          }
        }
      ]
    }
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
    </>
  );
}
