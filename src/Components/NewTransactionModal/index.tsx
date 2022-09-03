import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import styled from 'styled-components';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod"
import { useForm } from 'react-hook-form';

const schema = z.object({
  description: z.string(),
  amount: z.number(),
  // type: z.enum(["income", "outcome"]),
  category: z.string()
})

type Inputs = z.infer<typeof schema>

export function NewtransactionModal() {
  const { register, handleSubmit, formState } = useForm<Inputs>({
    resolver: zodResolver(schema)
  })

  function handleNewTransaction(data: Inputs) {
    console.log(data)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>
          New Transaction
        </Dialog.Title>
        <form onSubmit={handleSubmit(handleNewTransaction)}>
          <input type="text" placeholder='Description' required {...register("description")} />
          <input type="number" placeholder='Amount' required {...register("amount", { valueAsNumber: true })} />
          <input type="text" placeholder='Category' required {...register("category")} />

          <TrasactionTypeContainer>
            <TransactionButtonType variant='income' value='income'>
              <ArrowCircleUp size={24} />
              Income
            </TransactionButtonType>
            <TransactionButtonType variant='outcome' value='outcome'>
              <ArrowCircleDown size={24} />
              Outcome
            </TransactionButtonType>
          </TrasactionTypeContainer>
          <button type='submit' disabled={formState.isSubmitting}>
            Save
          </button>
        </form>

        <CloseButton>
          <X size={25} />
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

const TrasactionTypeContainer = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

type TransactionButtonTypeProps = {
  variant: 'income' | 'outcome'
}

const TransactionButtonType = styled(RadioGroup.Item) <TransactionButtonTypeProps>`
  background: ${p => p.theme['gray-700']};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${p => p.theme['gray-300']};

  svg {
    color: ${p => p.variant === 'income' ? p.theme['green-300'] : p.theme['red-300']};
  }

  &[data-state='checked'] {
    color: ${p => p.theme.white};
    background: ${p => p.variant === 'income' ? p.theme['green-500'] : p.theme['red-500']};

    svg {
      color: ${p => p.theme.white};
    }
  }

  &[data-state='unchecked']:hover {
    background: ${p => p.theme['gray-600']};
  }

`