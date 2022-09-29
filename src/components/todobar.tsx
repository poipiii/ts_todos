import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import RestoreIcon from '@mui/icons-material/Restore';
interface todo  {
    todo_id:number,
    todo_txt:string,
    todo_status:string
}

export const Todobar = ({todo_id,todo_txt,todo_status}:todo) => {
  return (
    <div>
        <Box sx={{display:'inline-flex',boxShadow:1,borderRadius:1}}>
            <Typography sx={{paddingY:'8px' ,paddingX:'15px'}}>
                {todo_txt}
            </Typography>
            <IconButton aria-label='delete' color='error'>
                <DeleteIcon></DeleteIcon>
            </IconButton>
            {todo_status==='done'?
             <IconButton aria-label='check' color='warning'>
                <RestoreIcon></RestoreIcon>
            </IconButton>
       
            :
              <IconButton aria-label='check' color='success'>
                <CheckIcon></CheckIcon>
            </IconButton>
           
        }
           
            

        </Box>
    </div>
  )
}