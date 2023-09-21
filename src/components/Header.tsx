import logoImage from '../assets/logo.svg'

export function Header() {
  return (
    <header className="w-full bg-gray-900 pb-28 pt-10">
      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between px-6">
        <img src={logoImage} alt="" />
        <button className="h-12 cursor-pointer rounded-md  border-none bg-green-500 px-5 text-white hover:bg-green-700 hover:transition">
          Nova transação
        </button>
      </div>
    </header>
  )
}
