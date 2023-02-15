import React, { useState } from 'react';
import './AiForm.css'

function AiForm() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Name: " + name + " Surname: " + surname);
  }

  return (
    <form className='aiForm' onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <br />
      <br />
      <label>
        Surname:
        <input type="text" value={surname} onChange={e => setSurname(e.target.value)} />
      </label>
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default AiForm;