declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"beiwe-help": {
"en/add-collaborator.md": {
	id: "en/add-collaborator.md";
  slug: "en/add-collaborator";
  body: string;
  collection: "beiwe-help";
  data: InferEntrySchema<"beiwe-help">
} & { render(): Render[".md"] };
"en/add-location.md": {
	id: "en/add-location.md";
  slug: "en/add-location";
  body: string;
  collection: "beiwe-help";
  data: InferEntrySchema<"beiwe-help">
} & { render(): Render[".md"] };
"en/add-patient-and-prices.md": {
	id: "en/add-patient-and-prices.md";
  slug: "en/add-patient-and-prices";
  body: string;
  collection: "beiwe-help";
  data: InferEntrySchema<"beiwe-help">
} & { render(): Render[".md"] };
"en/add-service-and-statuses.md": {
	id: "en/add-service-and-statuses.md";
  slug: "en/add-service-and-statuses";
  body: string;
  collection: "beiwe-help";
  data: InferEntrySchema<"beiwe-help">
} & { render(): Render[".md"] };
"en/create-document-structure.md": {
	id: "en/create-document-structure.md";
  slug: "en/create-document-structure";
  body: string;
  collection: "beiwe-help";
  data: InferEntrySchema<"beiwe-help">
} & { render(): Render[".md"] };
"en/export-data.md": {
	id: "en/export-data.md";
  slug: "en/export-data";
  body: string;
  collection: "beiwe-help";
  data: InferEntrySchema<"beiwe-help">
} & { render(): Render[".md"] };
"en/getting-started.md": {
	id: "en/getting-started.md";
  slug: "en/getting-started";
  body: string;
  collection: "beiwe-help";
  data: InferEntrySchema<"beiwe-help">
} & { render(): Render[".md"] };
"en/pricing.md": {
	id: "en/pricing.md";
  slug: "en/pricing";
  body: string;
  collection: "beiwe-help";
  data: InferEntrySchema<"beiwe-help">
} & { render(): Render[".md"] };
"en/report-with-ai-transcription.md": {
	id: "en/report-with-ai-transcription.md";
  slug: "en/report-with-ai-transcription";
  body: string;
  collection: "beiwe-help";
  data: InferEntrySchema<"beiwe-help">
} & { render(): Render[".md"] };
"en/schedule-appointment.md": {
	id: "en/schedule-appointment.md";
  slug: "en/schedule-appointment";
  body: string;
  collection: "beiwe-help";
  data: InferEntrySchema<"beiwe-help">
} & { render(): Render[".md"] };
"es/agendar-cita.md": {
	id: "es/agendar-cita.md";
  slug: "es/agendar-cita";
  body: string;
  collection: "beiwe-help";
  data: InferEntrySchema<"beiwe-help">
} & { render(): Render[".md"] };
"es/crear-estructura-de-documento.md": {
	id: "es/crear-estructura-de-documento.md";
  slug: "es/crear-estructura-de-documento";
  body: string;
  collection: "beiwe-help";
  data: InferEntrySchema<"beiwe-help">
} & { render(): Render[".md"] };
"es/exportar-datos.md": {
	id: "es/exportar-datos.md";
  slug: "es/exportar-datos";
  body: string;
  collection: "beiwe-help";
  data: InferEntrySchema<"beiwe-help">
} & { render(): Render[".md"] };
"es/informe-con-transcripcion-por-ia.md": {
	id: "es/informe-con-transcripcion-por-ia.md";
  slug: "es/informe-con-transcripcion-por-ia";
  body: string;
  collection: "beiwe-help";
  data: InferEntrySchema<"beiwe-help">
} & { render(): Render[".md"] };
"es/precios.md": {
	id: "es/precios.md";
  slug: "es/precios";
  body: string;
  collection: "beiwe-help";
  data: InferEntrySchema<"beiwe-help">
} & { render(): Render[".md"] };
"es/primeros-pasos.md": {
	id: "es/primeros-pasos.md";
  slug: "es/primeros-pasos";
  body: string;
  collection: "beiwe-help";
  data: InferEntrySchema<"beiwe-help">
} & { render(): Render[".md"] };
"es/registrar-colaborador.md": {
	id: "es/registrar-colaborador.md";
  slug: "es/registrar-colaborador";
  body: string;
  collection: "beiwe-help";
  data: InferEntrySchema<"beiwe-help">
} & { render(): Render[".md"] };
"es/registrar-paciente-y-precios.md": {
	id: "es/registrar-paciente-y-precios.md";
  slug: "es/registrar-paciente-y-precios";
  body: string;
  collection: "beiwe-help";
  data: InferEntrySchema<"beiwe-help">
} & { render(): Render[".md"] };
"es/registrar-servicio-y-estados.md": {
	id: "es/registrar-servicio-y-estados.md";
  slug: "es/registrar-servicio-y-estados";
  body: string;
  collection: "beiwe-help";
  data: InferEntrySchema<"beiwe-help">
} & { render(): Render[".md"] };
"es/registrar-ubicacion.md": {
	id: "es/registrar-ubicacion.md";
  slug: "es/registrar-ubicacion";
  body: string;
  collection: "beiwe-help";
  data: InferEntrySchema<"beiwe-help">
} & { render(): Render[".md"] };
"pt/cadastrar-colaborador.md": {
	id: "pt/cadastrar-colaborador.md";
  slug: "pt/cadastrar-colaborador";
  body: string;
  collection: "beiwe-help";
  data: InferEntrySchema<"beiwe-help">
} & { render(): Render[".md"] };
"pt/cadastrar-local.md": {
	id: "pt/cadastrar-local.md";
  slug: "pt/cadastrar-local";
  body: string;
  collection: "beiwe-help";
  data: InferEntrySchema<"beiwe-help">
} & { render(): Render[".md"] };
"pt/cadastrar-paciente-e-precos.md": {
	id: "pt/cadastrar-paciente-e-precos.md";
  slug: "pt/cadastrar-paciente-e-precos";
  body: string;
  collection: "beiwe-help";
  data: InferEntrySchema<"beiwe-help">
} & { render(): Render[".md"] };
"pt/cadastrar-servico-e-status.md": {
	id: "pt/cadastrar-servico-e-status.md";
  slug: "pt/cadastrar-servico-e-status";
  body: string;
  collection: "beiwe-help";
  data: InferEntrySchema<"beiwe-help">
} & { render(): Render[".md"] };
"pt/criar-estrutura-de-documento.md": {
	id: "pt/criar-estrutura-de-documento.md";
  slug: "pt/criar-estrutura-de-documento";
  body: string;
  collection: "beiwe-help";
  data: InferEntrySchema<"beiwe-help">
} & { render(): Render[".md"] };
"pt/exportar-dados.md": {
	id: "pt/exportar-dados.md";
  slug: "pt/exportar-dados";
  body: string;
  collection: "beiwe-help";
  data: InferEntrySchema<"beiwe-help">
} & { render(): Render[".md"] };
"pt/marcar-consulta.md": {
	id: "pt/marcar-consulta.md";
  slug: "pt/marcar-consulta";
  body: string;
  collection: "beiwe-help";
  data: InferEntrySchema<"beiwe-help">
} & { render(): Render[".md"] };
"pt/precos.md": {
	id: "pt/precos.md";
  slug: "pt/precos";
  body: string;
  collection: "beiwe-help";
  data: InferEntrySchema<"beiwe-help">
} & { render(): Render[".md"] };
"pt/primeiros-passos.md": {
	id: "pt/primeiros-passos.md";
  slug: "pt/primeiros-passos";
  body: string;
  collection: "beiwe-help";
  data: InferEntrySchema<"beiwe-help">
} & { render(): Render[".md"] };
"pt/relatorio-com-transcricao-por-ia.md": {
	id: "pt/relatorio-com-transcricao-por-ia.md";
  slug: "pt/relatorio-com-transcricao-por-ia";
  body: string;
  collection: "beiwe-help";
  data: InferEntrySchema<"beiwe-help">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
