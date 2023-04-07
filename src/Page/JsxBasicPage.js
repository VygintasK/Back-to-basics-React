import React from "react";
import BasicButton from "../Component/JSX/BasicButton";

import JSXRenders from "../Component/JSX/JSXRenders.js";
import JSXStyleAndFunc from "../Component/JSX/JSXStyleAndFunc";

const JsxBasicPage = () => {
  return (
    <div className="jsxBasicPage">
      <JSXRenders />
      <JSXStyleAndFunc />

      <BasicButton />
      <br />
    </div>
  );
};

export default JsxBasicPage;
