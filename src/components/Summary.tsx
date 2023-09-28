import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { SummaryCard } from './SummaryCard'
import { useContext } from 'react'
import { TransactionsContext } from '../Contexts/TransactionsContexts'

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )
  return (
    <section className="mx-auto -mt-20 grid w-full max-w-[1120px] grid-cols-3 items-center justify-between gap-8 px-6">
      <SummaryCard
        Icon={ArrowCircleUp}
        variant="gains"
        title="Entradas"
        money={summary.income}
      />
      <SummaryCard
        Icon={ArrowCircleDown}
        variant="loss"
        title="Entradas"
        money={summary.outcome}
      />
      <SummaryCard
        Icon={CurrencyDollar}
        variant="positive"
        title="Entradas"
        money={summary.total}
      />
    </section>
  )
}
