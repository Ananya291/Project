import React, { useState } from "react";

function Event() {
  const [name, setName] = useState("");

  const shoot = () => {
    alert("welcome back " + name);
  };
  return (
    <form>
      {/* <input value={name} onChange={(event) => console.log(event)} /> */}
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={shoot}>Take the Shot!</button>
    </form>
  );
}

export default Event;
