import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  const addValue = () => {
     console.log("value added", counter);
     setCounter(counter + 1);  
  }
  const removeValue = () => {
     console.log("value removed", counter);
     if ( counter > 0){
        setCounter(counter - 1); 
     }else{
      return;
     }
  }
  return (
    <>
     <h1> Hi Sonam. Welcome to React!</h1>
     <h2>Counter : {counter}</h2>

     <button onClick={addValue}>Add value : {counter}</button>
     <br/>
     <button onClick={removeValue}>remove value: {counter}</button>
    </>
  )
}

export default App
