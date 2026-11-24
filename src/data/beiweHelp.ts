import { getCollection, type CollectionEntry } from 'astro:content';
import { languages, type Lang } from '../i18n/ui';

export type HelpEntry = CollectionEntry<'beiwe-help'>;

export const helpLangs = Object.keys(languages) as Lang[];

/** "pt/primeiros-passos" → ["pt", "primeiros-passos"]. */
export function splitHelpSlug(entry: HelpEntry): [Lang, string] {
  const [lang, ...rest] = entry.slug.split('/');
  return [lang as Lang, rest.join('/')];
}

export function helpIndexHref(lang: Lang): string {
  return `/products/beiwe/${lang}/`;
}

export function helpHref(entry: HelpEntry): string {
  const [lang, slug] = splitHelpSlug(entry);
  return `/products/beiwe/${lang}/${slug}/`;
}

/** The guides in one language, in index order. */
export async function helpEntries(lang: Lang): Promise<HelpEntry[]> {
  const all = await getCollection('beiwe-help', (e) => splitHelpSlug(e)[0] === lang);
  return all.sort((a, b) => a.data.order - b.data.order);
}

/** The same guide in the other languages, keyed by language. */
export async function helpTranslations(entry: HelpEntry): Promise<Partial<Record<Lang, HelpEntry>>> {
  const [lang] = splitHelpSlug(entry);
  const all = await getCollection('beiwe-help', (e) => e.data.key === entry.data.key);
  return Object.fromEntries(
    all.filter((e) => splitHelpSlug(e)[0] !== lang).map((e) => [splitHelpSlug(e)[0], e]),
  );
}

/** The description from the front matter, else the first paragraph as plain text. */
export function helpSummary(entry: HelpEntry, max = 180): string {
  if (entry.data.description) return entry.data.description;
  const para = entry.body.trim().split(/\n\s*\n/)[0] ?? '';
  const text = para
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;
}
