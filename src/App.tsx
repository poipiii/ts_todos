import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Todobar } from './components/todobar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <Todobar></Todobar>
      </div>
    </div>
  )
}

export default App
