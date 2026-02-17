import { MetadataRoute } from 'next';
import { REGIONS } from '@/constants/regions';
import { prisma } from '@/lib/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://safirtemizlik.com.tr';

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
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...blogUrls,
    ...regionUrls,
  ];
}
