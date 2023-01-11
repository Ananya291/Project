import "./App.css";
import Hello from "./Hello";
import Properties2 from "./Properties2";
import Properties3 from "./Properties3";
import State from "./State";
import SetState from "./SetState";
import Hello2 from "./Hello2";
import Properties from "./Properties";
import Hey from "./Hey";
import BottomNavigation from "./BottomNavigation";
import { Profiler } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewFile from "./NewFile";
import ApiCalling from "./ApiCalling";
import Event from "./Event&hook";
import NewCode from "./NewCode";
import Effect1 from "./Effect1";
import DomManipulation from "./DomManipulation";
import ExampleFile from "./ExampleFile";
import State1 from "./State1";

function App() {
  return (
    <div className="App">
      {/* <State1 /> */}
      {/* <Properties
        photo="https://images-eu.ssl-images-amazon.com/images/G/31/img22/May/SBO/V1/V2/V3/vRice_flour__pulses.jpg"
        text="calling first time"
        name="Health and personal care"
      />
      <Properties
        text="hey welcome to full stack course"
        photo="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
        // img={img.jpg}
        name="Electonics"
      />
      <Properties
        text="hey welcome "
        photo="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
        // img={img.jpg}
        name="Dresses"
      /> */}

      {/* <ExampleFile /> */}
      {/* <NewCode/> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hey />} />
          <Route path="/task" element={<Hello2 />} />
        </Routes>
      </BrowserRouter> */}
      {/* <DomManipulation /> */}
      {/* <Effect1 /> */}

      <ApiCalling />
      {/* <NewFile/> */}
      {/* <h1>hello world</h1> */}
      {/* <Hello /> */}
      {/* <Event /> */}

      {/* //function component */}
      {/* <Properties2 price="$3" name="geeks" />
      <Properties2 price="$44" name="ananya" age="24" /> */}

      {/* //class component */}
      {/* <Properties3 money="$34" text="best" /> */}

      {/* <State/> */}
      {/* <SetState /> */}
      {/* <Hello2/> */}
      {/* <BottomNavigation
       icon={Profiler.jpg}
       text="delivery"
      />

      <BottomNavigation
      icon={icon.jpg}
      text="history"
      />

    <BottomNavigation
      icon={icon.jpg}
      text="Profile"
      /> */}
    </div>
  );
}

export default App;
