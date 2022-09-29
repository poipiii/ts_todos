import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
type Props = {}

const Todoenter = (props: Props) => {
  return (
    <div>
        <Box sx={{paddingBottom:"30px",display:"flex"}}>
            <TextField fullWidth label="Enter your todo"></TextField>
            <IconButton aria-label='add' color='success'>
              <AddIcon></AddIcon>
              </IconButton>
        </Box>
    </div>
  )
}

export default Todoenter