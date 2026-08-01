import type {MetadataRoute} from 'next';
import {absoluteUrl} from '@/app/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
    return ['/', '/projects', '/about'].map((path) => ({
        url: absoluteUrl(path),
        changeFrequency: path === '/' ? 'monthly' : 'yearly',
        priority: path === '/' ? 1 : 0.8,
    }));
}