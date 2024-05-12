import { cx } from 'class-variance-authority'
import { AppBadge } from '@/components/app-badge'

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
      <AppBadge />
    </div>
  </main>
)

export default Page
