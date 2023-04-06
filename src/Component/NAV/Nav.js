import React from 'react'
import {Link} from 'react-router-dom'

import './Nav.css'

const Nav = () => {
  return (
    <div className='nav'>
      <Link to='/'>Home</Link>
      <Link to='/jsxBasicPage'>JSX</Link>
      <Link to='/stylesPage'>Style</Link>
      <Link to='/useState'>State</Link>
      <Link to='/basicForm'>From</Link>  
      <Link to='/functions'>Func</Link>  
      
      <Link to='/testing'>Test</Link>  
    </div>
  )
}

export default Nav