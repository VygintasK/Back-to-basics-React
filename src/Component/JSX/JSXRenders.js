import React from 'react'

const JSXRenders = () => {

    const name= 'Tom'

  return (
    <main>
        <h1>JSX - renders data as text</h1>
        <p>expression: <b>'string' 9</b> = {'string'}{9}</p>
        <p>var <b>name</b> = {name}</p>
        <p>array <b>[1,2,3,'string']</b> = {[1,2,3,'string']}</p>
        <p>doesn't render object like array</p>
        <p>doesn't render boolean</p>
    </main>
  )
}

export default JSXRenders
