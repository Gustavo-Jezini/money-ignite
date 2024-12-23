import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { SummaryCard } from './SummaryCard'
import { useSummary } from '../hook/useSummary'

export function Summary() {
  const summary = useSummary()
  return (
    <section className="mx-auto -mt-20 grid w-full max-w-[1120px] grid-cols-3 items-center justify-between gap-8 px-6">
      <SummaryCard
        Icon={ArrowCircleUp}
        variant="gains"
        title="Gains"
        money={summary.income}
      />
      <SummaryCard
        Icon={ArrowCircleDown}
        variant="loss"
        title="Loss"
        money={summary.outcome}
      />
      <SummaryCard
        Icon={CurrencyDollar}
        variant="positive"
        title="Total"
        money={summary.total}
      />
    </section>
  )
}
