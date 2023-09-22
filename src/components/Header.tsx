import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import logoImage from '../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { tv } from 'tailwind-variants'

const button = tv({
  base: 'group bg-gray-700 flex p-4 items-center justify-center gap-2 rounded-md cursor-pointer border-0 <text-gray-3></text-gray-3>00',

  variants: {
    variant: {
      income:
        'hover:bg-green-300 hover:text-white data-[state=checked]:bg-green-300 data-[state=checked]:text-white',
      outcome:
        'hover:bg-red-600 hover:text-white data-[state=checked]:bg-red-600',
    },
  },
})

export function Header() {
  return (
    <header className="w-full bg-gray-900 pb-28 pt-10">
      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between px-6">
        <img src={logoImage} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="h-12 cursor-pointer rounded-md  border-none bg-green-500 px-5 text-white hover:bg-green-700 hover:transition">
              Nova transação
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 h-screen w-screen bg-gray-700/75" />

            <Dialog.Content className="fixed left-1/2 top-1/2 min-w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray-800 px-12 py-10">
              <Dialog.Title>Nova transação</Dialog.Title>

              <Dialog.Close
                className="absolute right-6 top-6 cursor-pointer border-0 bg-transparent text-[0px] text-gray-500"
                asChild
              >
                <X size={24} />
              </Dialog.Close>

              <form action="" className="mt-8 flex flex-col gap-4">
                <input
                  className="rounded-md border-0 bg-gray-900 p-4 text-gray-300 placeholder:text-gray-500 focus:border focus:border-green-600"
                  type="text"
                  placeholder="Descrição"
                  required
                />
                <input
                  className="rounded-md border-0 bg-gray-900 p-4 text-gray-300 placeholder:text-gray-500 focus:border focus:border-green-600"
                  type="number"
                  placeholder="Preço"
                  required
                />
                <input
                  className="rounded-md border-0 bg-gray-900 p-4 text-gray-300 placeholder:text-gray-500 focus:border focus:border-green-600"
                  type="text"
                  placeholder="Categoria"
                  required
                />

                <RadioGroup.Root className="mt-2 grid grid-cols-2 gap-4">
                  <RadioGroup.Item
                    value="income"
                    className={button({ variant: 'income' })}
                  >
                    <ArrowCircleUp
                      size={24}
                      className="text-green-600 group-hover:text-white group-data-[state=checked]:text-white"
                    />
                    Entrada
                  </RadioGroup.Item>
                  <RadioGroup.Item
                    value="outcome"
                    className={button({ variant: 'outcome' })}
                  >
                    <ArrowCircleDown
                      size={24}
                      className="text-red-600 group-hover:text-white group-data-[state=checked]:text-white"
                    />
                    Saida
                  </RadioGroup.Item>
                </RadioGroup.Root>

                <button
                  className="mt-6 h-14 cursor-pointer rounded-md border-0 bg-green-500 px-5 font-bold text-white hover:bg-green-700 hover:transition"
                  type="submit"
                >
                  Cadastraar
                </button>
              </form>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  )
}
