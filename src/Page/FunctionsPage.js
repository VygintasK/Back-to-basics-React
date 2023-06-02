import React from "react";

import WritingFunction from "../Component/Functions/WritingFunction";

const Functions = () => {
  console.clear()

  //  ///////// ASYNC Functions use callback ()=>() maybe?/////

  function sayHi() {
    console.log("hi");
  }
  function sayName() {
    console.log("Tom");
  }
  async function greeting() {
    setTimeout(() => sayHi(), 2000);
    return "done";
  }

  sayName();
  console.log(greeting());
  // greeting()

  return (
    <div className="Functions">
      <WritingFunction/>
    </div>
  );
};

export default Functions;
