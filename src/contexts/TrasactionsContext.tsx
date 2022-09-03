import { createContext, ReactNode } from 'react'
import { useFetch } from '../hooks/useFetch';

interface TransactionsProviderProp {
  children: ReactNode
}

interface TransactionType {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  amount: number;
  createdAt: string;
}

interface TransactionsContextProps {
  transactions: TransactionType[] | undefined
}

export const TransactionsContext = createContext({} as TransactionsContextProps)

export function TransactionsProvider({ children }: TransactionsProviderProp) {
  const { data, error } = useFetch<TransactionType[]>('http://localhost:3333/transactions')

  return (
    <TransactionsContext.Provider value={{
      transactions: data
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}
