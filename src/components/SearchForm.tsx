import { MagnifyingGlass } from 'phosphor-react'

export function SearchForm() {
  return (
    <form className="mx-auto mt-10 flex w-full max-w-[1120px] gap-4 px-6">
      <input
        placeholder="Báh guri"
        type="text"
        className="flex-1 rounded-md border-0 bg-gray-900 p-4 text-gray-300 placeholder:text-gray-500 focus:border focus:border-green-500"
      />
      <button className="flex items-center gap-3 rounded-md border border-green-500 bg-transparent p-4 font-bold text-green-300 hover:border-green-500 hover:bg-green-500 hover:text-white hover:transition">
        <MagnifyingGlass size={24} />
        Buttao
      </button>
    </form>
  )
}
