import React, { useEffect, useState } from "react";

function Effect1() {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("I am running");
  }, [name]);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}
export default Effect1;
