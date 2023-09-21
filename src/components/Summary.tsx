import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { SummaryCard } from './SummaryCard'

export function Summary() {
  return (
    <section className="mx-auto -mt-20 grid w-full max-w-[1120px] grid-cols-3 items-center justify-between gap-8 px-6">
      <SummaryCard
        Icon={ArrowCircleUp}
        variant="gains"
        title="Entradas"
        money="17.400,00"
      />
      <SummaryCard
        Icon={ArrowCircleDown}
        variant="loss"
        title="Entradas"
        money="17.400,00"
      />
      <SummaryCard
        Icon={CurrencyDollar}
        variant="positive"
        title="Entradas"
        money="17.400,00"
      />
    </section>
  )
}
