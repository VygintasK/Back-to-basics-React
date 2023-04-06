import React from 'react'

const JSXStyleAndFunc = () => {

    // Style logic
    const randomNameStyle = {
        backgroundColor: 'royalBlue',
        textAlign: 'center'
    }

    // Function logic
    const handleNameChange = () =>{
        const names = ['Bob', 'Tom', 'Kevin','Albert', 'Greg']
        const int = Math.floor(Math.random()*5)
        return names[int]
    }

  return (
    <div style={{borderTop:' solid',}}>
        <h2> Style JSX (see code):</h2>
        <h3 style={randomNameStyle}>Hello {handleNameChange()} <span>-random name</span></h3>
    </div>
  )
}

export default JSXStyleAndFunc
