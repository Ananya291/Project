import React, { useEffect, useState } from "react";

function Name() {
  const [data, setData] = useState();

  function callApi() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setData(json))
      .then((json) => console.log(json))
      .catch((err) => alert(err));
  }

  useEffect(() => {
    console.log("its working");
    callApi();
  }, []);

  return (
    <div>
      {/* UI rendering - start */}
      <div>{data ? data.userId : ""}</div>
      <div>{data?.id}</div>
      <div>{data?.title}</div>
      <div>{data?.completed ? "true" : "false"}</div>
      <h1>hello</h1>
    </div>
  );
}
export default Name;
