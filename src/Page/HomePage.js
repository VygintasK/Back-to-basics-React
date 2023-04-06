import React from 'react'

// import {Link} from 'react-router-dom'
import { ReactComponent as Logo } from "../logo.svg";
import logo192 from "../img/logo192.png";

const Home = () => {
  return (
    <div className='HomePage'>
      <div className='title-control'>
        <img src={logo192} alt=''/>
        <h1>Learning React</h1>
      </div>
      <Logo></Logo>
      <a href='https://youtu.be/RVFAyFWO4go?t=2274' target="_blank" rel="noopener noreferrer">Main video source of info</a>
    </div>
  )
}

export default Home