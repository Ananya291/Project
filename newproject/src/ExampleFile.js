import React from "react";
import Example2 from "./Example2";
import "./ExampleFile.css";

function ExampleFile() {
  //javascript
  return (
    <div className="ExamPleFile__Main">
      <div className="ExamPleFile__first">
        <h1>hey welcome</h1>
      </div>
      <div className="ExamPleFile__sec">
        <Example2 />
      </div>
    </div>
  );
}

export default ExampleFile;
