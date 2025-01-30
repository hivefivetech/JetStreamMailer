import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://jetstreammailer.in';
    const pages = [
        { url: '', priority: 1, changeFrequency: 'weekly' as const },
        { url: '/productOne', priority: 0.8, changeFrequency: 'weekly' as const },
        { url: '/productTwo', priority: 0.8, changeFrequency: 'weekly' as const },
        { url: '/productThree', priority: 0.8, changeFrequency: 'weekly' as const },
        { url: '/downloadProducts', priority: 0.9, changeFrequency: 'weekly' as const },
        { url: '/disclaimer', priority: 0.9, changeFrequency: 'weekly' as const },
        { url: '/privacyPolicy', priority: 0.9, changeFrequency: 'weekly' as const },
        { url: '/termsAndConditions', priority: 0.9, changeFrequency: 'weekly' as const },
        { url: '/faq', priority: 0.9, changeFrequency: 'weekly' as const },
    ];

    return pages.map((page) => ({
        url: `${baseUrl}${page.url}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
    }));
}
