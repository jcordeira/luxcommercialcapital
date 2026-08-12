import type { MetadataRoute } from 'next';
import { articles } from '@/content/insights';
import { site } from '@/data/site';

export const dynamic = 'force-static';

const routes = [
  { path: '/', priority: 1 },
  { path: '/capital-solutions', priority: 0.9 },
  { path: '/property-types', priority: 0.8 },
  { path: '/our-approach', priority: 0.8 },
  { path: '/about', priority: 0.7 },
  { path: '/insights', priority: 0.7 },
  { path: '/contact', priority: 0.9 },
  { path: '/submit-your-deal', priority: 0.9 },
  { path: '/privacy-policy', priority: 0.3 },
  { path: '/terms-of-use', priority: 0.3 },
];

/**
 * `trailingSlash: true` means the canonical URL of every page ends in a slash.
 * The sitemap has to agree, or it advertises URLs that redirect.
 */
const canonical = (path: string) => `${site.url}${path.endsWith('/') ? path : `${path}/`}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...routes.map(({ path, priority }) => ({
      url: canonical(path),
      lastModified: now,
      priority,
    })),
    ...articles.map((article) => ({
      url: canonical(`/insights/${article.slug}`),
      lastModified: new Date(`${article.updated ?? article.published}T12:00:00Z`),
      priority: 0.6,
    })),
  ];
}
