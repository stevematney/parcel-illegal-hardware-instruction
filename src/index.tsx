import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

const container = document.getElementById('app')
const root = createRoot(container!)

root.render(
  <ThemeProvider theme={{}}>
    <>Hello</>
  </ThemeProvider>,
)
