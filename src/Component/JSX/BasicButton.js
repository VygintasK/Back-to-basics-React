import React from 'react'

const BasicButton = () => {
  const handleClick1 = () => {
    console.log('click1')
  }
  const handleClick2 = (name) => {
    console.log(name)
  }
  const handleClick3 = (e) => {
    console.log(e.target.innerText)
  }
  return (
    <div className='basicButton' style={{borderTop:'solid'}}>
      <h2> FUNCTION BASICS:</h2>

      <h4>trigger (see console log)</h4>
      <p>the same:</p>
      <p>{"<button onClick={function (){handleClick1( )}}>Click me 1</button>"}</p>
      <p>{"<button onClick={( )=>handleClick1( )}>Click me 1</button>"}</p>
      <p>{"<button onClick={handleClick1}>Click me 1</button>"}</p>
      <button onClick={handleClick1}>Click me 1</button>
      
      <h4>passing value</h4>
      <p>also the same:</p>
      <p>{"<button onClick={function ( ) {handleClick2('Click2')}}>Click me 2</button>"}</p>
      <p>{"<button onClick={( ) => handleClick2('Click2')}>Click me 2</button>"}</p>
      <button onClick={() => handleClick2('Click2')}>Click me 2</button>

      <h4>passing event</h4>
      <p>and this:</p>
      <p>{"<button onClick={function eventLogFunction(e) {handleClick3(e)}}>Click me 3</button>"}</p>
      <p>{"<button onClick={e => handleClick3(e)}>Click me 3</button>"}</p>
      <button onClick={e => handleClick3(e)}>Click me 3</button>
    </div>
  )
}

export default BasicButton
