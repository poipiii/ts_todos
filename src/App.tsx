import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Todobar } from './components/todobar'
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import Todoenter from './components/todoenter';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <Box>
          <Todoenter></Todoenter>
        </Box>
        <Stack direction="column" spacing={2}> 
          <Todobar todo_id={1} todo_txt='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..' todo_status='notdone'></Todobar>
          <Todobar todo_id={2} todo_txt='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..' todo_status='done'></Todobar>
          </Stack>
      </div>
    </div>
  )
}

export default App
