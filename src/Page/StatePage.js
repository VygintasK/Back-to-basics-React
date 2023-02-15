import React from 'react'

import BasicState from '../Component/State/BasicState'
import Clicker from '../Component/State/Clicker'
import StateExample from '../Component/State/StateExample'


const State = () => {
  
  return (
    <div className="BasicStatePage">
      <BasicState/>
      <Clicker/>
      <StateExample/>
    </div>
  )
}

export default State