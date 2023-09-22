import { Header } from '../components/Header'
import { SearchForm } from '../components/SearchForm'
import { Summary } from '../components/Summary'
import { tv } from 'tailwind-variants'

const td = tv({
  base: 'w-1/2 bg-gray-700 px-8 py-6',

  variants: {
    variant: {
      loss: 'text-red-500',
      gain: 'text-green-500',
    },
  },
})

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />

      <SearchForm />

      <div className="mx-auto mt-4 w-full max-w-[1120px]  px-6">
        <table className="w-full border-spacing-x-2">
          <tbody className="flex flex-col space-y-3">
            <tr>
              <td className="w-1/2 rounded-l-md bg-gray-700 px-8 py-6">
                Desenvolvimento do site
              </td>
              <td className={td({ variant: 'gain' })}>$ 12,000.00</td>
              <td className="w-1/2 bg-gray-700 px-8 py-6">Venda</td>
              <td className="w-1/2 rounded-r-md bg-gray-700 px-8 py-6">
                13/05/2023
              </td>
            </tr>

            <tr>
              <td className="w-1/2 rounded-l-md bg-gray-700 px-8 py-6">
                Vila N
              </td>
              <td className={td({ variant: 'loss' })}> - $ 59.00</td>
              <td className="w-1/2 bg-gray-700 px-8 py-6">Venda</td>
              <td className="w-1/2 rounded-r-md bg-gray-700 px-8 py-6">
                13/05/2023
              </td>
            </tr>

            <tr>
              <td className="w-1/2 rounded-l-md bg-gray-700 px-8 py-6">
                Aluguel
              </td>
              <td className={td({ variant: 'gain' })}>$ 12,000.00</td>
              <td className="w-1/2 bg-gray-700 px-8 py-6">Venda</td>
              <td className="w-1/2 rounded-r-md bg-gray-700 px-8 py-6">
                13/05/2023
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
