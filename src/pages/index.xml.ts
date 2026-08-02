import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site: URL }) {
  const [projects, publications, talks] = await Promise.all([
    getCollection('projects'),
    getCollection('publications'),
    getCollection('talks'),
  ]);

  const items = [
    ...projects.map((entry) => ({
      title: entry.data.title,
      description: entry.data.summary,
      pubDate: entry.data.date,
      link: `/project/${entry.id}/`,
    })),
    ...publications.map((entry) => ({
      title: entry.data.title,
      description: entry.data.summary,
      pubDate: entry.data.date,
      link: `/publication/${entry.id}/`,
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
    description: 'Machine-learning research, engineering projects, publications, and talks.',
    site: context.site,
    items,
  });
}
