import styled from "styled-components"
import { ArrowCircleDown, ArrowCircleUp, CurrencyEur } from "phosphor-react";
import { useTransactions } from "../../hooks/useTransactions";
import { formatPrice } from "../../utils/formatter";

export function Summary() {
  const { transactions } = useTransactions()
  const summary = transactions && transactions.reduce((acc, transaction) => {
    if (transaction.type === "income") {
      acc.income += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.outcome += transaction.amount
      acc.total -= transaction.amount
    }
    return acc
  }, { income: 0, outcome: 0, total: 0 })

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Income</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{formatPrice.format(summary?.income as number)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Withdraws</span>
          <ArrowCircleDown size={32} color="#f57a68" />
        </header>

        <strong>{formatPrice.format(summary?.outcome as number)}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Income</span>
          <CurrencyEur size={32} color="#00b37e" />
        </header>

        <strong>{formatPrice.format(summary?.total as number)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}

const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`

interface SummaryProps {
  variant?: 'green'
}

const SummaryCard = styled.div<SummaryProps>`
  background: ${p => p.variant === 'green' ? p.theme['green-700'] : p.theme['gray-700']};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${p => p.theme["gray-300"]};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }
`