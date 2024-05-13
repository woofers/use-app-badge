import { Mdx } from 'components/mdx-components'
import { allDocs } from 'content'
const docs = allDocs[0]

export default function Home() {
  return (
    <div className="min-w-0 box-border m-0 grow flex flex-col mx-auto w-full max-w-container [max-width:960px] px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4">
      <Mdx meta={{ project: 'use-app-badge' }} code={docs.body.code} />
    </div>
  )
}
