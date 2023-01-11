import React from "react";
import "./Properties.css";

//Props are arguments passed into React components.
//React Props are like function arguments in JavaScript and attributes in HTML.
//<a href="https://www.w3schools.com">Visit W3Schools</a>
//<img src="img_girl.jpg">
//pass data from parent to child

function Properties({ text, photo, name }) {
  return (
    <div className="properties">
      <h1>{name}</h1>
      <img src={photo} className="image" />
      <p className="pro_text">{text}</p>
    </div>
  );
}

export default Properties;
