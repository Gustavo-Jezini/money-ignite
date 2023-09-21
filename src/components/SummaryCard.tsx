import { tv } from 'tailwind-variants'

const card = tv({
  base: 'rounded-md bg-gray-600 p-8',
  slots: {
    container: 'rounded-md bg-gray-600 p-8',
    icon: 'text-white',
  },

  variants: {
    variant: {
      positive: {
        container: 'rounded-md bg-green-500 p-8',
      },
      negative: {
        container: 'rounded-md bg-red-500 p-8',
        icon: 'text-red-300',
      },
      gains: {
        icon: 'text-green-300',
      },
      loss: {
        icon: 'text-red-300',
      },
    },
  },
})

interface SummaryCardProps {
  variant?: 'positive' | 'negative' | 'gains' | 'loss'
  Icon: React.ElementType
  title: string
  money: string
}

export function SummaryCard({ variant, Icon, title, money }: SummaryCardProps) {
  const { container, icon } = card({ variant })

  return (
    <div className={container()}>
      <header className="flex items-center justify-between text-gray-300">
        <span>{title}</span>
        <Icon size={32} className={icon({ variant })} />
      </header>

      <strong className="mt-4 block text-3xl">$ {money}</strong>
    </div>
  )
}
