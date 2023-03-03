import "./App.css";
import React, { useState } from "react";
const App = () => {
  let [counter, setCounter] = useState(0);

  let Increment = () => {
    setCounter(counter + 1);
  };
  let Decrement = () => {
    setCounter(counter - 1);
  };
  let Reset = () => {
    setCounter(0);
  };
  return (
    <>
      <div className="count">
        <h1>{counter}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
      </div>
    </>
  );
};

export default App;
