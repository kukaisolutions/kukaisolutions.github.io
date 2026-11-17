import type { Lang } from '../i18n/ui';

export interface Article {
  slug: string;
  /** Language the article is written in. */
  lang: Lang;
  title: string;
  author: string;
  date: Record<Lang, string>;
  summary: Record<Lang, string>;
}

export const articles: Article[] = [
  {
    slug: 'adocao-de-tecnologia',
    lang: 'pt',
    title:
      'Sobre mudança e impacto em organizações, especialmente em decorrência da adoção de novas tecnologias e ferramentas',
    author: 'Rafael Monteiro',
    date: {
      en: 'November 2026',
      pt: 'novembro de 2026',
      es: 'noviembre de 2026',
    },
    summary: {
      en: 'Does adopting new technology — AI included — make sense in fields where human-to-human interaction is the heart of the business? A look at organizational impact, the adaptation period and how to judge whether a tool is worth it.',
      pt: 'Faz sentido adotar novas tecnologias — inclusive IA — em áreas onde a interação humano-humano é a alma do negócio? Um olhar sobre impacto organizacional, o período de adaptação e como avaliar se uma ferramenta compensa.',
      es: '¿Tiene sentido adoptar nuevas tecnologías —incluida la IA— en áreas donde la interacción humano-humano es el alma del negocio? Una mirada al impacto organizacional, al período de adaptación y a cómo evaluar si una herramienta compensa.',
    },
  },
];

export function articleHref(article: Article): string {
  return `/${article.lang}/articles/${article.slug}/`;
}
