import { TransactionsProvider } from './Contexts/TransactionsContexts'
import { Transactions } from './pages/Transactions'
import './styles/global.css'

export function App() {
  return (
    <>
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </>
  )
}
