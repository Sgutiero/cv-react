import { useState } from 'react'
import Header from './Componentes/Header.jsx'
import Estructura from './Componentes/Estructura.jsx'

import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   
      <div className='App'>
          <Header></Header>
          <Estructura></Estructura>
      </div>
        
        
        
  )
}

export default App
