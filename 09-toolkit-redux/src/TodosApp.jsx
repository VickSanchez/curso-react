import React from 'react'
import { useState } from 'react'
import { useGetTodoQuery, useGetTodosQuery } from './store/apis'

export const TodosApp = () => {

    // const { data: todos = [], isLoading} = useGetTodosQuery()
    const [todoId, setTodoId] = useState(1)
    const { data: todo, isLoading} = useGetTodoQuery( todoId )
    console.log(todo);

  return (
    <>
    <h1>TodosApp - RTK Query</h1>
    <hr />
    <h4>isLoading: { isLoading ? "True" : "False"} </h4>
    {/* <ul>
        {
            todos.map( todo => (
                <li key={todo.id}><strong> {todo.completed ? "DONE" : "Pending"}</strong>{todo.title}</li>
            ))
        }
    </ul> */}
    <pre>{JSON.stringify( todo )}</pre>
    
    <button onClick={ () => (setTodoId(todoId - 1))}>
        Previous ToDo
    </button>
    <button onClick={ () => (setTodoId(todoId + 1))}>
        Next ToDo
    </button>
    
    </>
  )
  
}
