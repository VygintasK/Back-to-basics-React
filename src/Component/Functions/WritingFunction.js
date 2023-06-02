import React from 'react'

import WritingFunction1 from '../../img/Functions/WritingFunction1.png'
import WritingFunction2 from '../../img/Functions/WritingFunction2.png'
import WritingFunction3 from '../../img/Functions/WritingFunction3.png'
import WritingFunction4 from '../../img/Functions/WritingFunction4.png'
import WritingFunction5 from '../../img/Functions/WritingFunction5.png'
import WritingFunction6 from '../../img/Functions/WritingFunction6.png'

const WritingFunction = () => {
  console.clear()
  function function1() {
    console.log("works1")
  }
  function1()

  const varFunction1 = function function1() {
    console.log("works2")
  }
  varFunction1()

  const varFunction2 = function () {
    console.log("works3")
  }
  varFunction2()

  const varFunction3 = () => {
    console.log("works4")
    return "returning text"
  }
  varFunction3()

  const varFunction4 = () => "i am returning something"
  varFunction4()

  varFunction3()
  console.log(varFunction3())
  console.log(varFunction3)



  return (
    <div>
      <h1>Writing function:</h1>
      <h4>basic function writing:</h4>
      <img src={WritingFunction1} alt="basic function" />

      <ol>
        <li>
          <p>variable that has function assigned:</p>
          <img src={WritingFunction2} alt="assigned function" />
        </li>
        <li>
          <p>varFunction can be anonymous:</p>
          <img src={WritingFunction3} alt="anonymous function" />
        </li>
        <li>
          <p>varFunction can be arrow function:</p>
          <img src={WritingFunction4} alt="arrow function" />
        </li>
        <li>
          <p>arrow can return one thing without brackets and "return":</p>
          <img src={WritingFunction5} alt="arrow function" />
        </li>
      </ol>
      <h4>calling function:</h4>
      <ol>
        <li>initiates varFunction3 and it console logs "works4"</li>
        <li>console logs returned value of varFunction3</li>
        <li>shows varFunction3 composition</li>
      </ol>
      <img src={WritingFunction6} alt="arrow function" />
    </div>
  )
}

export default WritingFunction
