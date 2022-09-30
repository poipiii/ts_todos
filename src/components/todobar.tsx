import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import RestoreIcon from '@mui/icons-material/Restore';
import { todo } from '../shared/types';
import * as Api from '../lib/Api'
import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
export const Todobar = ({todo_id,todo_txt,todo_status}:todo) => {
  const queryclient = useQueryClient()
  const delete_todo = useMutation(Api.delete_todos,{onSuccess:()=>{
    queryclient.invalidateQueries(['todos'])
  }})

  const update_todo_status = useMutation(Api.change_todos_status,{onSuccess:()=>{
    queryclient.invalidateQueries(['todos'])
  }})
  return (
    <div>
        <Box sx={{display:'inline-flex',boxShadow:1,borderRadius:1}}>
            <Typography sx={{paddingY:'8px' ,paddingX:'15px'}}>
                {todo_txt}
            </Typography>
            <IconButton aria-label='delete' color='error' onClick={()=>{delete_todo.mutate(todo_id)}}>
                <DeleteIcon></DeleteIcon>
            </IconButton>
            {todo_status===true?
             <IconButton aria-label='check' color='warning'>
                <RestoreIcon></RestoreIcon>
            </IconButton>
       
            :
              <IconButton aria-label='check' color='success' onClick={()=>{update_todo_status.mutate(todo_id,true)}}>
                <CheckIcon></CheckIcon>
            </IconButton>
           
        }
           
            

        </Box>
    </div>
  )
}