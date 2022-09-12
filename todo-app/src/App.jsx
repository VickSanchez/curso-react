import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import './App.css'
import { todoinicial } from './helpers/data'
import { useState } from 'react'
import { TodoList } from './components/TodoList'


function App() {

  const [todos, setTodos] = useState(todoinicial)
  
  
  return (
  <div>
    <div><h1>To Do APP</h1></div>
    <hr />
    <div className="container">
        <TodoList todos={todos} />    
    </div>
  </div>
  )
}

export default App
