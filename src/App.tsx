
import Todos from './components/todos'
import './App.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const queryclient = new QueryClient()
  return (
    <QueryClientProvider client={queryclient}>
      <CssBaseline>
      <Todos></Todos>
      </CssBaseline>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App 
