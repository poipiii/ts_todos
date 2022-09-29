
import Todos from './components/todos'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const queryclient = new QueryClient()
  return (
    <QueryClientProvider client={queryclient}>
      <CssBaseline>
      <Todos></Todos>
      </CssBaseline>
    </QueryClientProvider>
  )
}

export default App 
