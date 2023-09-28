import { useContext } from 'react'
import { Header } from '../components/Header'
import { SearchForm } from '../components/SearchForm'
import { Summary } from '../components/Summary'
import { tv } from 'tailwind-variants'
import { TransactionsContext } from '../Contexts/TransactionsContexts'
import { formatterDate, formatterPrice } from '../utils/formatter'

const td = tv({
  base: 'bg-gray-700 px-8 py-6',

  variants: {
    variant: {
      loss: 'text-red-500',
      gain: 'text-green-500',
    },
  },
})

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)
  return (
    <>
      <Header />
      <Summary />

      <SearchForm />

      <div className="mx-auto mt-16 w-full max-w-[1120px]  px-6">
        <table className="w-full border-separate border-spacing-y-3">
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td className="rounded-l-md bg-gray-700 px-8 py-6">
                    {transaction.description}
                  </td>
                  <td
                    className={td({
                      variant: transaction.type === 'income' ? 'gain' : 'loss',
                    })}
                  >
                    {transaction.type === 'outcome' && '- '}
                    {formatterPrice.format(transaction.price)}
                  </td>
                  <td className="bg-gray-700 px-8 py-6">
                    {transaction.category}
                  </td>
                  <td className="rounded-r-md bg-gray-700 px-8 py-6">
                    {formatterDate.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
