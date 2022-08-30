import styled from "styled-components"
import Logo from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog';
import { NewtransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt='' />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <HeaderButton>New transaction</HeaderButton>
          </Dialog.Trigger>
          <NewtransactionModal />
        </Dialog.Root>

      </HeaderContent>
    </HeaderContainer>
  )
}


const HeaderContainer = styled.header`
  background: ${p => p.theme['gray-900']};
  padding: 2.5rem 0 7.5rem 0;
`

const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderButton = styled.button`
  height: 50px;
  border: 0;
  background: ${p => p.theme['green-500']};
  color: ${p => p.theme.white};

  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${p => p.theme["green-700"]};
    transition: background-color 0.2s;
  }
`