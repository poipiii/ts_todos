import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

type Props = {}

const Todoenter = (props: Props) => {
  return (
    <div>
        <Box>
            <TextField fullWidth label="Enter your todo"></TextField>
        </Box>
    </div>
  )
}

export default Todoenter