import React from "react";
import jsxStyle from "../img/Style/jsxStyle.png";
import varStyle1 from "../img/Style/varStyle1.png";
import varStyle2 from "../img/Style/varStyle2.png";
import varStyle3 from "../img/Style/varStyle3.png";
import "./stylePage.css";

const StylesPage = () => {
  const styleDiv = {
    backgroundColor: "royalblue",
    color: "red",
    fontWeight: "900",
  };

  return (
    <div className="style-page">
      <h1>STYLE:</h1>

      <h2>STYLE inside jsx:</h2>
      <p>
        You need double {"{{ style }}"} to style inside JSX, because one {"{ }"}
        for passing a variable and another for defining object of styles
      </p>
      <div
        style={{
          backgroundColor: "red",
          color: "white",
          fontWeight: "900",
        }}
      >
        STYLE inside of jsx:
      </div>
      <img src={jsxStyle} alt="jsx style" />

      <h2>STYLE using variable:</h2>
      <div style={styleDiv}>STYLE using variable:</div>
      <img src={varStyle1} alt="var style 1" />
      <img src={varStyle2} alt="var style 2" />

      <h2>STYLE using css import:</h2>
      <div className="cssImport">STYLE using CSS import:</div>
      <p>Importing CSS that is targeting class or id or whatever</p>
      <img src={varStyle3} alt="var style 3" />
    </div>
  );
};

export default StylesPage;
