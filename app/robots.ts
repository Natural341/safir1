import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin/', '/api/', '/login', '/admin/*'],
            },
            {
                userAgent: ['GPTBot', 'ChatGPT-User', 'Claude-Bot', 'PerplexityBot', 'CCBot'],
                allow: ['/', '/blog', '/services'],
                disallow: ['/admin/', '/api/'],
            }
        ],
        sitemap: 'https://safirtemizlik.com.tr/sitemap.xml',
    };
}
