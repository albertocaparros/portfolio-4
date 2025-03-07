declare module 'astro:content' {
  export { z } from 'astro/zod';
  export type CollectionEntry<C extends keyof typeof entryMap> =
    (typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

  type BaseCollectionConfig<S extends import('astro/zod').ZodRawShape> = {
    schema?: S;
    slug?: (entry: {
      id: CollectionEntry<keyof typeof entryMap>['id'];
      defaultSlug: string;
      collection: string;
      body: string;
      data: import('astro/zod').infer<import('astro/zod').ZodObject<S>>;
    }) => string | Promise<string>;
  };
  export function defineCollection<S extends import('astro/zod').ZodRawShape>(
    input: BaseCollectionConfig<S>
  ): BaseCollectionConfig<S>;

  export function getEntry<
    C extends keyof typeof entryMap,
    E extends keyof (typeof entryMap)[C],
  >(collection: C, entryKey: E): Promise<(typeof entryMap)[C][E] & Render>;
  export function getCollection<
    C extends keyof typeof entryMap,
    E extends keyof (typeof entryMap)[C],
  >(
    collection: C,
    filter?: (data: (typeof entryMap)[C][E]) => boolean
  ): Promise<((typeof entryMap)[C][E] & Render)[]>;

  type InferEntrySchema<C extends keyof typeof entryMap> =
    import('astro/zod').infer<
      import('astro/zod').ZodObject<
        Required<ContentConfig['collections'][C]>['schema']
      >
    >;

  type Render = {
    render(): Promise<{
      Content: import('astro').MarkdownInstance<{}>['Content'];
      headings: import('astro').MarkdownHeading[];
      injectedFrontmatter: Record<string, any>;
    }>;
  };

  const entryMap: {
    blog: {
      'hello-world.md': {
        id: 'hello-world.md';
        slug: 'hello-world';
        body: string;
        collection: 'blog';
        data: InferEntrySchema<'blog'>;
      };
      'post-1.md': {
        id: 'post-1.md';
        slug: 'post-1';
        body: string;
        collection: 'blog';
        data: InferEntrySchema<'blog'>;
      };
      'post-2.md': {
        id: 'post-2.md';
        slug: 'post-2';
        body: string;
        collection: 'blog';
        data: InferEntrySchema<'blog'>;
      };
      'post-3.md': {
        id: 'post-3.md';
        slug: 'post-3';
        body: string;
        collection: 'blog';
        data: InferEntrySchema<'blog'>;
      };
    };
  };

  type ContentConfig = typeof import('./config');
}
