import React, {useState}from 'react'
import './BasicForm.css'

const BasicForm = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [valid, setValid] = useState(false)

  //two way binding
  const handleFirstInputChange = (e) => {
    setUserData({ ...userData, firstName: e.target.value })
    
  }
  const handleLastInputChange = (e) => {
    setUserData({ ...userData, lastName: e.target.value })
  }
  const handleEmailInputChange = (e) => {
    setUserData({ ...userData, email: e.target.value })
  }
  //submit and validation
  const handleSubmit = (event) => {
    event.preventDefault()
    if(userData.firstName && userData.lastName && userData.email){
      setValid(true)
      console.log(' Name:',userData.firstName, ' Surname:',userData.lastName, ' Email:',userData.email)     
    } else {
      setValid(false)
    }
    setSubmitted(true)
  }



  return (
    <form className='basicForm' onSubmit={handleSubmit}>
      <h5 className='title'>Basic form</h5>
      {submitted && valid ? <div className='success'>success</div> : null}
      <input
        onChange={handleFirstInputChange}
        className='form-field'
        placeholder='First name'
        name='firstName'
        value={userData.firstName}/>
      {submitted && !userData.firstName ? <span>Enter first name</span> : null}

      <input
        onChange={handleLastInputChange}
        className='form-field'
        placeholder='Last name'
        name='lastName'
        value={userData.lastName}/>
      {submitted && !userData.lastName ? <span>Enter last name</span> : null}

      <input
        onChange={handleEmailInputChange}
        className='form-field'
        placeholder='E-mail'
        name='email'
        value={userData.email}/>
      {submitted && !userData.email ? <span>Enter e-mail</span> : null}

      <button type='submit'>Submit</button>
    </form>
  )
}

export default BasicForm