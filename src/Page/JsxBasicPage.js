import React from 'react'
import BasicButton from '../Component/JSX/BasicButton'

const JsxBasicPage = () => {
    const name= 'Tom'

    const randomNameStyle = {
        backgroundColor: 'royalBlue',
        textAlign: 'center'
    }

    const handleNameChange = () =>{
        const names = ['Bob', 'Tom', 'Kevin','Albert', 'Greg']
        const int = Math.floor(Math.random()*5)
        return names[int]
    }

  return (
    <div className='jsxBasicPage'>
        <h1>JSX - renders data as text</h1>
        <p>direct html text</p>
        <p>expression 'string' 9 = {'string'}{9}</p>
        <p>var name = {name}</p>
        <p>array [1,2,3,'string'] = {[1,2,3,'string']}</p>
        <p>doesn't render object like array</p>
        <p>doesn't render boolean</p>
        <div style={{borderTop:' solid',}}>
            <h2> Style JSX (see code):</h2>
            <h3 style={randomNameStyle}>Hello {handleNameChange()} <span>random name</span></h3>
        </div>
        <BasicButton/>
        <br/>  
    </div>
  )
}

export default JsxBasicPage