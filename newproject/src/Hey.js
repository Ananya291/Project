import React from "react";
import { useNavigate } from "react-router-dom";

function Hey() {
  const navigate = useNavigate();
  function click() {
    navigate("/task");
  }
  return (
    <div className="">
      <h1>hey</h1>
      <button onClick={click}>go to hello page</button>
    </div>
  );
}

export default Hey;
