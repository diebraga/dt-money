import styled from "styled-components";
import { Header } from "../../Components/Header";
import { Summary } from "../../Components/Summary";

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />

      <TrasanctionsContainer>
        <TrasanctionsTable>
          <tbody>
            <tr>
              <td width={'50%'}>Web development</td>
              <td>
                <PriceHighlight variant="income">
                  € 1.000.00
                </PriceHighlight>
              </td>
              <td>Internet</td>
              <td>13/12/2022</td>
            </tr>
            <tr>
              <td width={'50%'}>Web development</td>
              <td>
                <PriceHighlight variant="outcome">
                  - € 1.000.00
                </PriceHighlight>
              </td>
              <td>Internet</td>
              <td>13/12/2022</td>
            </tr>
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

  /* margin-top: 1.5rem; */

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
  color: ${p => p.variant === 'income' ? p.theme["gray-300"] : p.theme["red-300"]}
`