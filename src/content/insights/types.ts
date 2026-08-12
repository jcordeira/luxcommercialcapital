export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string };

export type Article = {
  /** URL segment. Never change one after publication without adding a redirect. */
  slug: string;
  category: string;
  title: string;
  /** Standfirst. Doubles as the meta description, so keep it under ~155 characters. */
  standfirst: string;
  /** ISO date. Drives ordering, the sitemap and the Article structured data. */
  published: string;
  updated?: string;
  blocks: Block[];
};

const WORDS_PER_MINUTE = 220;

export function readingMinutes(article: Article): number {
  const words = article.blocks.reduce((total, block) => {
    const text = block.type === 'list' ? block.items.join(' ') : block.text;
    return total + text.split(/\s+/).length;
  }, 0);
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
