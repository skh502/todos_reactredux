import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  const [newinput, setNewinput] = useState('')
  const [newid, setNewid] = useState(null)

  const changetodo = (updateid, updatetext)=>{
    setNewid(updateid) 
    setNewinput(updatetext) 
  }

  return (
    <>

      <AddTodo changevalue={{ newinput, newid, setNewinput }} />
      <Todos changevalue={{ changetodo }} />
      
      
    </>
  )
}

export default App
