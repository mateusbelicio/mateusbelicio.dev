import { defineDocumentType, makeSource, type ComputedFields } from 'contentlayer/source-files';
import rehypeAutolinkHeadings, { type Options as AutolinkOptions } from 'rehype-autolink-headings';
import rehypePrettyCode, { type Options as PrettyCodeOptions } from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const computedFields: ComputedFields = {
  path: {
    type: 'string',
    resolve: (project) => `/portfolio/${project._raw.flattenedPath.split('/').slice(1).join('/')}`,
  },
  slug: {
    type: 'string',
    resolve: (project) => project._raw.flattenedPath.split('/').slice(1).join('/'),
  },
};

const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `portfolio/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    tags: { type: 'string', required: true },
    description: { type: 'string', required: true },
    published: { type: 'boolean', default: true },
    thumbnail: { type: 'string', required: true },
    link: { type: 'string', required: true },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: { dark: 'github-dark' },
          onVisitLine(element) {
            if (element.children.length === 0) element.children = [{ type: 'text', value: ' ' }];
          },
          onVisitHighlightedLine(element) {
            element.properties.className?.push('line--highlighted');
          },
          onVisitHighlightedChars(element, id) {
            element.properties.className = ['word--highlighted'];
          },
        } satisfies Partial<PrettyCodeOptions>,
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          test: ['h2', 'h3'],
          properties: { className: ['subheading-anchor'], ariaLabel: 'Link to section' },
        } satisfies Partial<AutolinkOptions>,
      ],
    ],
  },
});
