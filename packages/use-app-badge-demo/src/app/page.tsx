import { cx } from 'class-variance-authority'
import { AppBadge } from 'components/app-badge'
import { Mdx } from 'components/mdx-components'
import { allDocs } from 'content'


const docs = allDocs[0]

const Page: React.FC<{}> = () => (
  <main className="flex min-h-screen flex-col items-center grow">
    <div
      className={cx(
        'bg-background flex flex-col items-center grow',
        'sm:w-[calc(100%-8px)] sm:rounded-t-xl sm:mt-1 sm:border-[#434343] sm:border-t sm:border-l sm:border-r sm:border-solid',
        'border-transparent border-0 w-full rounded-none mt-0'
      )}
    > 
      <AppBadge />
      <div className="min-w-0 box-border m-0 grow flex flex-col mx-auto w-full max-w-container [max-width:960px] px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4">
        <div className="py-4">
          <Mdx meta={{ project: 'use-app-badge' }} code={docs.body.code} />
        </div>
        <div className="w-full h-5" aria-hidden />
        
      </div>
    </div>
  </main>
)

export default Page
