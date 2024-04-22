import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Add":
      return state + 1;
    case "Loss":
      return state - 1;
    case "Reset":
      return initialState;
    default:
      return state;
  }
};
const UseReducerCounter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1> Count : {count}</h1>
      <button onClick={() => dispatch("Add")}>Add</button>
      <button onClick={() => dispatch("Loss")}>Loss</button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
    </div>
  );
};

export default UseReducerCounter;
