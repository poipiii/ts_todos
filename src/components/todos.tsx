import React from 'react'
import { Todobar } from './todobar'
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import Container from '@mui/material/Container';
import Todoenter from './todoenter';
import { useState,useEffect } from 'react'
import * as Api from '../lib/Api'
import {
  useQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { it } from 'node:test';
type Props = {}

const Todos = (props: Props) => {
const [Todo, setTodo] = useState();
const { isLoading, isError, data, error } = useQuery(['todos'],Api.get_todos)
useEffect(()=>{
  if(data){
    console.log(data)
    setTodo(data)
  }
},[data])
  return (
    <div>
      <Box  display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="100vh">
          <Box>
          <Todoenter></Todoenter>
        </Box>
        <Stack direction="column" spacing={2}> 
           {
            Todo && Todo.map((item)=>(item.todo_status ===false?(<Todobar key={item.id} todo_id={item.id} todo_txt={item.todo_txt} todo_status={item.todo_status}></Todobar>):null)
              )
            }
          </Stack>

          <Stack direction="column" spacing={2}> 
           {
            Todo && Todo.map((item)=>(item.todo_status ===true?(<Todobar key={item.id} todo_id={item.id} todo_txt={item.todo_txt} todo_status={item.todo_status}></Todobar>):null)
              )
            }
          </Stack>
      </Box>
       
      </div> 
       )
}

export default Todos