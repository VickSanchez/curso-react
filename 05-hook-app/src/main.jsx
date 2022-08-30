import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { Padre } from './07-tarea-memo/Padre'
// import './08-useReducer/intro-reducer';
// import {TodoApp} from './08-useReducer/TodoApp'
import { BrowserRouter } from "react-router-dom";
import { MainApp } from './09-useContext/MainApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // {/* <HooksApp/> */}
    // {/* <CounterApp/> */}
    // {/* <CounterWithCustomHook /> */}
    // {/* <SimpleForm/> */}
    // <FormWithCustomHook/>
    // <MultipleCustomHooks/>
    // <FocusScreen/>
    // <Layout/>
    // <MemoHook/>
    // <CallbackHook/>
    // <Padre/>
    // <TodoApp/>
    // </React.StrictMode>
    <BrowserRouter>
    <MainApp/>
    </BrowserRouter>
    
)

