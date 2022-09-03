import { MagnifyingGlass } from "phosphor-react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  query: z.string()
})

type SearchInputs = z.infer<typeof schema>

export function SearchForm() {
  const { register, handleSubmit, formState } = useForm<SearchInputs>({
    resolver: zodResolver(schema)
  })

  function handleSearch(data: SearchInputs) {
    console.log(data)
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearch)}>
      <input type={'text'} placeholder='Search' {...register("query")} />
      <button type="submit" disabled={formState.isSubmitting}>
        <MagnifyingGlass size={20} />
        Search
      </button>
    </SearchFormContainer>
  )
}

const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${p => p.theme["gray-900"]};
    color: ${p => p.theme["gray-300"]};
    padding: 1rem;

    &::placeholder {
      color: ${p => p.theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: transparent;

    border: 1px solid ${p => p.theme["green-300"]};
    color: ${p => p.theme["green-300"]};
    border-radius: 6px;
    font-weight: bold;

    &:hover {
      background: ${p => p.theme["green-500"]};

      border-color: ${p => p.theme["green-500"]};
      color: ${p => p.theme["white"]};

      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`