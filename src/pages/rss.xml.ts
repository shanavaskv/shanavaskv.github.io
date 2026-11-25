import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { profile } from '../data/profile';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts', (p) => !p.data.draft);
  return rss({
    title: `${profile.name} · Writing`,
    description: 'Notes on scientific computing, tools and data science.',
    site: context.site!,
    items: posts
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((p) => ({ title: p.data.title, description: p.data.description, pubDate: p.data.date, link: `/${p.id}/` })),
  });
}
