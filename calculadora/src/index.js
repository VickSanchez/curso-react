import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppCalculadora } from './AppCalculadora'
import { Calcprovider } from './context/CalcProvider'
import './styles.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
  <Calcprovider>
    <AppCalculadora/>
  </Calcprovider>
  </React.StrictMode>
)




