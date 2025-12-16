import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "sonam",
    age: 23
  }
  let newArr = [1, 2, 3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="Sonam" someObj= {myObj} btnText= "Visit me"/>
      <Card username= "Khushi" someObj= {newArr} btnText = "Click Me"/>
      <Card username= "Khushi" someObj= {newArr} /> {/*default value of btnText is passed in Card.jsx*/}
    </>
  )
}

export default App
