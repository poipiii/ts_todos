import { createClient } from '@supabase/supabase-js'
import dotenv from "dotenv"
import { todo } from '../shared/types';
// dotenv.config()

const supabase = createClient(import.meta.env.VITE_PROJECT_URL,import.meta.env.VITE_PROJECT_API_KEY!)


const add_todo = async ({todo_txt,todo_status}: todo) => {
    const { data, error } = await supabase
    .from('todos')
    .insert([todo_txt,todo_status])
    console.log(data)
    console.log(error)
    return data 
}



const get_todos = async () => {
    const { data, error } = await supabase
    .from('todos')
    .select('*')
    console.log(data)
    console.log(error)
    return data 

}

export default [add_todo,get_todos]