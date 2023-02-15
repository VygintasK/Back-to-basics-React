import React, {useState} from 'react'
import basicStateImg from '../../img/basicStateImg.jpg'
import './BasicState.css'

const BasicState = () => {
  let value=1
  const [stateValue,setStateValue] = useState(1)
  console.log('Default var:',value, '| Default state:',stateValue)

  const clickHandler = () =>{
    console.log('----CLICK-----')
    value=value+5
    setStateValue(stateValue+5)
    console.log('Change5 + var =',value, '| Change=5+ and state =', stateValue)
    console.log('--------------Function end------------------')
  }
  return (
    <div className='BasicState'>
      <h2>Basic-State function example</h2>
      <p>{'var: '+ value + ' | state: '+ stateValue}</p>
      <button onClick={clickHandler}> Click me</button>
      <div>
        <img src={basicStateImg} alt="" />
      </div>
    </div>
  )
}

export default BasicState