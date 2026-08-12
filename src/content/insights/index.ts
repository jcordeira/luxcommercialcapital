import type { Article } from './types';
import { article as sizing } from './how-lenders-size-a-commercial-loan';
import { article as bridgeOrPerm } from './bridge-or-permanent-financing';
import { article as sba } from './sba-504-vs-7a-vs-conventional';

/**
 * Every published article. Add a new one by creating a file beside this and
 * importing it here — the index page, the routes and the sitemap all read from
 * this list.
 */
export const articles: Article[] = [sizing, bridgeOrPerm, sba].sort((a, b) =>
  b.published.localeCompare(a.published),
);

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export * from './types';
