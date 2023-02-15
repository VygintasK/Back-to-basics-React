import React,{useState} from 'react'
import './Clicker.css'

const Clicker = () => {

    const initial = 0
    const [count, setCount] = useState(initial)
  
    const addFive = () =>{
      for (let i=0; i<5; i++){
        setCount(count => count + 1)
      }
    }

  return (

    <div className='clicker'>
      <h2>Clicker</h2>
      <p>{count}</p>
      <div>
        <button onClick={()=>setCount(initial)}>reset</button>
        <button onClick={()=>setCount(count-1)}>decrement</button>
        <button onClick={()=>setCount(count+1)}>increment</button>
      </div>
      <div>
        <button onClick={addFive}>add five</button>
      </div>
    </div>
  )
}

export default Clicker