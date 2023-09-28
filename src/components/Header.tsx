import logoImage from '../assets/logo.svg'
import { NewTransactionModal } from './NewTransactionModal'

export function Header() {
  return (
    <header className="w-full bg-gray-900 pb-28 pt-10">
      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between px-6">
        <img src={logoImage} alt="" />

        <NewTransactionModal />
      </div>
    </header>
  )
}
