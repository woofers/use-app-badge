import { cx } from 'class-variance-authority'
//import { AppBadge } from 'components/app-badge'
import { Mdx } from 'components/mdx-components'
import { allDocs } from 'content'

const docs = allDocs[0]

const Page: React.FC<{}> = () => (
  <main className="flex min-h-screen flex-col items-center grow">
    <div
      className={cx(
        'w-[calc(100%-8px)] bg-background rounded-t-xl mt-1 flex flex-col items-center grow',
        '[border-top:1px_solid_#434343]',
        '[border-left:1px_solid_#434343]',
        '[border-right:1px_solid_#434343]'
      )}
    >
      <div className="min-w-0 box-border m-0 grow flex flex-col mx-auto w-full max-w-container [max-width:960px] px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4">
        <div className="py-4">
          <Mdx meta={{ project: 'use-app-badge' }} code={docs.body.code} />
        </div>
      </div>
    </div>
  </main>
)

export default Page
