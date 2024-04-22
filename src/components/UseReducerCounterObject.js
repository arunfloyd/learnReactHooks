import React, { useReducer } from "react";
const initialState = { firstCounter: 0, secondCounter: 10 };
const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "Loss":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "Add2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "Loss2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "Reset":
      return initialState;
    default:
      return state;
  }
};
const UseReducerCounterObject = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1> Counter 1 : {count.firstCounter}</h1>
      <h1> Counter 2 : {count.secondCounter}</h1>

      <button onClick={() => dispatch({ type: "Add", value: 1 })}>Add</button>
      <button onClick={() => dispatch({ type: "Loss", value: 1 })}>Loss</button>
      <button onClick={() => dispatch({ type: "Add", value: 5 })}>Add 5</button>
      <button onClick={() => dispatch({ type: "Loss", value: 5 })}>
        Loss 5
      </button>
      <button onClick={() => dispatch({ type: "Add2", value: 1 })}>Add2</button>
      <button onClick={() => dispatch({ type: "Loss2", value: 1 })}>
        Loss2
      </button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
};

export default UseReducerCounterObject;
