import { useContext } from "react"
import { TransactionsContext } from "../contexts/TrasactionsContext"

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}
