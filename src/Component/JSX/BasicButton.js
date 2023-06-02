import React from 'react'

import OnClickIMG from "../../img/Functions/OnClick.png"
import SimpleFunction1 from "../../img/Functions/SimpleFunction1.png"
import SimpleFunction2 from "../../img/Functions/SimpleFunction2.png"
import PassingValue1 from "../../img/Functions/PassingValue1.png"
import PassingValue2 from "../../img/Functions/PassingValue2.png"
import PassingEvent1 from "../../img/Functions/PassingEvent1.png"
import PassingEvent2 from "../../img/Functions/PassingEvent2.png"

const BasicButton = () => {

  // Functions
  const handleClick1 = () => {
    console.log('click1')
  }
  const handleClick2 = (name) => {
    console.log(name)
  }
  const handleClick3 = (event) => {
    console.log(event.target.innerText)
  }


  return (
    <div className='basicButton' style={{ borderTop: 'solid' }}>
      <h2> FUNCTION BASICS:</h2>

      <h4>basic function inside function</h4>
      <img src={SimpleFunction1} alt='evolution of fuction'></img>
      <p>refactored function:</p>
      <img src={SimpleFunction2} alt='evolution of fuction'></img>

      <button onClick={
        function logClick() { 
          handleClick1() 
        }
      }>Click me 1</button>  

      <button onClick={function logClick() { handleClick1() }}>Click me 2</button>  

      <button onClick={() => handleClick1()}>Click me 3</button>

      <button onClick={handleClick1}>Click me 4</button>

      <ol>
        <li><b>onClick</b> button does function <b>logClick</b> and  <b>logClick</b> initiates <b>handleClick1( )</b> that is inside</li>
        <li>written in one line, (handleClick1 function inside other function because we dont need handle click to initiate on load but instead ONLY when logClick is initiated)</li>
        <li>logClick replaced by callback function with handleClick1 function inside</li>
        <li>we can take out from callback function handleClick1 but we need to remove "( )" so it would not initiate on load</li>
      </ol>


      <h4>passing VALUE</h4>
      <img src={PassingValue1} alt='evolution of fuction'></img>
      <p>refactored function:</p>
      <img src={PassingValue2} alt='evolution of fuction'></img>

      <button onClick={function logPassingString() { handleClick2('ANY VALUE') }}>Click me 1</button>
      <button onClick={() => handleClick2('ANY VALUE')}>Click me 2</button>
      <ol>
        <li>same happening here</li>
        <li>same here, we need to keep handleClick2 execution inside callback to prevent execution on load</li>
      </ol>
  



      <h4>passing EVENT</h4>
      <img src={PassingEvent1} alt='evolution of fuction'></img>
      <p>refactored of function:</p>
      <img src={PassingEvent2} alt='evolution of fuction'></img>

      <button onClick={function eventLogFunction(e) {handleClick3(e)}}>Click me 1</button>
      <button onClick={(e) => handleClick3(e)}>Click me 2</button>
      <button onClick={e => handleClick3(e)}>Click me 3</button>


      
 
      <h4>onClick</h4>
      <p>refactored function:</p>
      <img src={OnClickIMG} alt='evolution of fuction'></img>

      <button onClick={
        function antanas(e){
          console.log(e)
        }
      }>text</button>
      <button onClick={(e)=>console.log(e)}>text</button>  
      <p>Button is component, onClick is a prop - that is a fuction. What you give to on click is what you have. </p>




    </div>
  )
}

export default BasicButton
