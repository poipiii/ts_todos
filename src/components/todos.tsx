import React from 'react'
import { Todobar } from './todobar'
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import Container from '@mui/material/Container';
import Todoenter from './todoenter';

type Props = {}

const Todos = (props: Props) => {

  return (
    <div>
      <Box  display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="100vh">
          <Box>
          <Todoenter></Todoenter>
        </Box>
        <Stack direction="column" spacing={2}> 
          <Todobar todo_id={1} todo_txt='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..' todo_status='notdone'></Todobar>
          <Todobar todo_id={2} todo_txt='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..' todo_status='done'></Todobar>
          </Stack>
      </Box>
       
      </div> 
       )
}

export default Todos