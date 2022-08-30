import styled from "styled-components";
import { Header } from "../../Components/Header";
import { Summary } from "../../Components/Summary";
import { useFetch } from "../../hooks/useFetch";
import { SearchForm } from "./Components/SearchForm";

interface TransactionType {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  amount: number;
  createdAt: string;
}

export function Transactions() {
  const { data, error } = useFetch<TransactionType[]>('http://localhost:3333/transactions')

  return (
    <>
      <Header />
      <Summary />

      <TrasanctionsContainer>
        <SearchForm />
        <TrasanctionsTable>
          <tbody>
            {data?.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width={'50%'}>{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === "outcome" && '-'}  € {transaction.amount}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TrasanctionsTable>
      </TrasanctionsContainer>
    </>
  )
}

const TrasanctionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

const TrasanctionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${p => p.theme["gray-700"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface PriceHighlight {
  variant: 'income' | 'outcome'
}

const PriceHighlight = styled.span<PriceHighlight>`
  color: ${p => p.variant === 'income' ? p.theme["green-300"] : p.theme["red-300"]}
`