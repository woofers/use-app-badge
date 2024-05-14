import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import type { MDXOptions } from '@contentlayer/core'
import { readFileSync } from 'fs'

export const remarkPlugins = [] satisfies MDXOptions["remarkPlugins"]

export const rehypePlugins = [
  rehypeSlug,
  [
    rehypePrettyCode as any,
    {
      theme: JSON.parse(readFileSync('./themes/dark2.json', 'utf-8')),
      onVisitLine(node: any) {
        if (node.children.length === 0) {
          node.children = [{ type: 'text', value: ' ' }];
        }
      },
      onVisitHighlightedLine(node: any) {
        node.properties.className.push('line--highlighted');
      },
      onVisitHighlightedWord(node: any) {
        node.properties.className = ['word--highlighted'];
      },
    },
  ],
  [
    rehypeAutolinkHeadings,
    {
      behavior: 'wrap',
      properties: {
        className: []
      },
    },
  ]
] satisfies MDXOptions["rehypePlugins"]
