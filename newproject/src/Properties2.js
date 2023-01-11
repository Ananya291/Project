import React from "react";

function Properties2(props) {
  return (
    <div className="properties2__main">
      <h1>{props.price}</h1>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
    </div>
  );
}

export default Properties2;
