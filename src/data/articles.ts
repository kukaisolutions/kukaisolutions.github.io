import type { Lang } from '../i18n/ui';

export interface ArticleVersion {
  slug: string;
  title: string;
}

export interface Article {
  id: string;
  /** Language the article was originally written in. */
  original: Lang;
  /** The languages the article is available in, original included. */
  versions: Partial<Record<Lang, ArticleVersion>>;
  author: string;
  date: Record<Lang, string>;
  summary: Record<Lang, string>;
}

export const articles: Article[] = [
  {
    id: 'adocao-de-tecnologia',
    original: 'pt',
    versions: {
      pt: {
        slug: 'adocao-de-tecnologia',
        title:
          'Sobre mudança e impacto em organizações, especialmente em decorrência da adoção de novas tecnologias e ferramentas',
      },
      en: {
        slug: 'technology-adoption',
        title:
          'On change and impact in organizations, especially as a result of adopting new technologies and tools',
      },
      es: {
        slug: 'adopcion-de-tecnologia',
        title:
          'Sobre el cambio y el impacto en las organizaciones, especialmente a raíz de la adopción de nuevas tecnologías y herramientas',
      },
    },
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

export function getArticle(id: string): Article {
  const article = articles.find((a) => a.id === id);
  if (!article) throw new Error(`Unknown article: ${id}`);
  return article;
}

/** The language the article is shown in for a reader of `lang`: theirs if translated, else the original. */
export function articleLang(article: Article, lang: Lang): Lang {
  return article.versions[lang] ? lang : article.original;
}

export function articleVersion(article: Article, lang: Lang): ArticleVersion {
  return article.versions[articleLang(article, lang)]!;
}

export function articleHref(article: Article, lang: Lang): string {
  const shown = articleLang(article, lang);
  const prefix = shown === 'en' ? '' : `/${shown}`;
  return `${prefix}/articles/${article.versions[shown]!.slug}/`;
}
