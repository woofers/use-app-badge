import { defineDocumentType, makeSource, type ComputedFields } from 'contentlayer/source-files'
import { rehypePlugins, remarkPlugins } from './remark'

const computedFields: ComputedFields<string> = {
  slug: {
    type: 'string',
    resolve: (doc) => {
      const path = `/${doc._raw.flattenedPath}`
      return path
    },
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => {
      const path = doc._raw.flattenedPath.split('/').slice(1).join('/')
      return path
    },
  },
}


export const Docs = defineDocumentType(() => ({
  name: 'Docs',
  filePathPattern: `docs/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    date: {
      type: 'date',
      required: true,
    },
    layout: {
      type: 'string'
    }
  },
  computedFields
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Docs],
  mdx: {
    remarkPlugins,
    rehypePlugins
  }
})
