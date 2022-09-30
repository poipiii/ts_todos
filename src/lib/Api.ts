import { createClient } from '@supabase/supabase-js'
import dotenv from "dotenv"
import { todo } from '../shared/types';
// dotenv.config()

const supabase = createClient(import.meta.env.VITE_PROJECT_URL,import.meta.env.VITE_PROJECT_API_KEY!)


export  const add_todo = async ({ todo_txt, todo_status }: todo) => {
    const { data, error } = await supabase
        .from('todos')
        .insert([{todo_txt:todo_txt, todo_status:todo_status}]);
    console.log(data);
    console.error(error);
    return data;
}



export const get_todos = async () => {
    const { data, error } = await supabase
    .from('todos')
    .select('*')
    console.log(data)
    console.log(error)
    return data 

}


export const delete_todos = async (todo_id:string) => {
    const { data, error } = await supabase
    .from('todos')
    .delete().match({id:todo_id})
    console.log(data)
    console.log(error)
    return data 

}

export const change_todos_status = async ({todo_id,new_todo_status}) => {
    console.log(`check id ${todo_id}`)
    console.log(`check status ${new_todo_status}`)
    const { data, error } = await supabase
    .from('todos').update({todo_status:new_todo_status}).match({id:todo_id})  
    console.log(data)
    console.log(error)
    return data 

}