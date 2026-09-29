import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site: URL }) {
  const [projects, talks] = await Promise.all([
    getCollection('projects'),
    getCollection('talks'),
  ]);

  const items = [
    ...projects.map((entry) => ({
      title: entry.data.title,
      description: entry.data.summary,
      pubDate: entry.data.date,
      link: `/project/${entry.id}/`,
    })),
    ...talks.map((entry) => ({
      title: entry.data.title,
      description: entry.data.summary,
      pubDate: entry.data.date,
      link: `/talks/${entry.id}/`,
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: 'Jevi Waugh',
    description: 'Machine-learning research, engineering projects, and talks.',
    site: context.site,
    items,
  });
}
