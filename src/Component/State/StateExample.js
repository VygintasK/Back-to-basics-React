import React from 'react'
import { useState } from 'react'

const StateExample = () => {

    const randomNameFunction = () =>{
        const names = ['Greg', 'Albert','Karen', 'Tod', 'Steve'] 
        const random = Math.floor(Math.random() * names.length)
        return names[random]
    }

    let var1
    const ClickHandler1 = (e) => {
        console.log(e)
        return randomNameFunction()
    } 
    var1=ClickHandler1()
    console.log('console1:',var1)
    



    const [var2, setVar2] = useState()
    const showState2Name = () => setVar2(randomNameFunction())
    console.log('console2:',var2)
    // Console must be in reboot scope of state function to see result of change
    
console.log('------cycle')
    return (
        <div>
            <p>{!var1 ? 'undefined' : var1}</p>
            <button onClick={()=>ClickHandler1('green')} >var1</button>

            <p>{!var2 ? 'undefined' : var2}</p>
            <button onClick={showState2Name} >state2</button>
        </div>
    )
}

export default StateExample
