import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react'
import {
  useQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import add_todo from '../lib/Api'
type Props = {}
const mutation = useMutation(add_todo)
const Todoenter = (props: Props) => {
  const [Todo_txt, setTodo_txt] = useState("");
  return (
    <div>
        <Box sx={{paddingBottom:"30px",display:"flex"}}>
            <TextField fullWidth label="Enter your todo" onChange={(e)=>setTodo_txt(e.target.value)}></TextField>
            <IconButton aria-label='add' color='success' onClick={()=>mutation.mutate()}>
              <AddIcon></AddIcon>
              </IconButton>
        </Box>
    </div>
  )
}

export default Todoenter