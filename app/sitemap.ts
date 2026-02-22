import type { MetadataRoute } from 'next';
import { PrismaClient } from '@prisma/client';
import { REGIONS } from '@/constants/regions';
import { SERVICE_DETAILS } from '@/constants/services';

const prisma = new PrismaClient();

const baseUrl = 'https://safirtemizlik.com.tr';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Blog postları - DB'den dinamik
  let blogUrls: MetadataRoute.Sitemap = [];
  try {
    const posts = await prisma.blogPost.findMany({ select: { id: true, updatedAt: true } });
    blogUrls = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.id}`,
      lastModified: post.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));
  } catch {
    // Fallback if DB is unavailable
    blogUrls = [];
  }

  // Bölge Sayfaları (Local SEO)
  const regionUrls = REGIONS.map((region) => ({
    url: `${baseUrl}/hizmet-bolgeleri/${region.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Hizmet detay sayfaları
  const serviceUrls = SERVICE_DETAILS.map((service) => ({
    url: `${baseUrl}/hizmetler/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...serviceUrls,
    ...blogUrls,
    ...regionUrls,
  ];
}
