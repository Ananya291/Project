import React from "react";
import "./Hello.css";

function Hello() {
  //Javascript
  const myElement = () => {
    return <h1>I Love JSX!</h1>;
  };

  return (
    <div className="hello">
      {/* <h1>my name</h1> */}
      <form>
        <label>
          adharcard:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <select>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">
          Coconut
        </option>
        <option value="mango">Mango</option>
      </select>

      {myElement()}
    </div>
  );
}

export default Hello;
