import { Transactions } from "./pages/Trasactions"
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './global'
import { defaultTheme } from './styles/themes/default'
import { TransactionsProvider } from "./contexts/TrasactionsContext"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <GlobalStyles />
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}

export default App
