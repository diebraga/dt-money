import { Transactions } from "./pages/Trasactions"
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Transactions />
    </ThemeProvider>
  )
}

export default App
