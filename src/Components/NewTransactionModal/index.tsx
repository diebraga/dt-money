import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import styled from 'styled-components';

export function NewtransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>
          New Transaction
        </Dialog.Title>
        <form action="">
          <input type="text" placeholder='Description' required />
          <input type="number" placeholder='Price' required />
          <input type="text" placeholder='Category' required />

          <button type='submit'>
            Save
          </button>
        </form>

        <CloseButton>
          <X size={25}/>
        </CloseButton>
      </Content>
    </Dialog.Portal>
  )
}

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${p => p.theme['gray-800']};

  position: fixed;
  left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

  max-width: 800px;

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background: ${p => p.theme['gray-900']};
      color: ${p => p.theme['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${p => p.theme['gray-500']};
      }
    }

    button[type="submit"] {
      height: 50px;
      border: 0;

      background: ${p => p.theme['green-500']};
      color: ${p => p.theme['white']};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer;

      &:hover {
        background: ${p => p.theme['green-500']};
        transition: background-color 0.2s;
      }
    }
  }
`

const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  color: ${p => p.theme['gray-500']};
  line-height: 0;
`