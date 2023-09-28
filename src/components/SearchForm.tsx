import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionsContext } from '../Contexts/TransactionsContexts'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransaction(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearchTransaction)}
      className="mx-auto mt-10 flex w-full max-w-[1120px] gap-4 px-6"
    >
      <input
        placeholder="Báh guri"
        type="text"
        className="flex-1 rounded-md border-0 bg-gray-900 p-4 text-gray-300 placeholder:text-gray-500 focus:border focus:border-green-500"
        {...register('query')}
      />
      <button
        disabled={isSubmitting}
        type="submit"
        className="flex items-center gap-3 rounded-md border border-green-500 bg-transparent p-4 font-bold text-green-300 hover:border-green-500 hover:bg-green-500 hover:text-white hover:transition disabled:cursor-not-allowed disabled:opacity-60"
      >
        <MagnifyingGlass size={24} />
        Buttao
      </button>
    </form>
  )
}
