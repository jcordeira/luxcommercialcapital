import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

export const dynamic = 'force-static';

const routes = [
  { path: '/', priority: 1 },
  { path: '/capital-solutions', priority: 0.9 },
  { path: '/property-types', priority: 0.8 },
  { path: '/our-approach', priority: 0.8 },
  { path: '/about', priority: 0.7 },
  { path: '/insights', priority: 0.6 },
  { path: '/contact', priority: 0.9 },
  { path: '/submit-your-deal', priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    lastModified,
    priority,
  }));
}
