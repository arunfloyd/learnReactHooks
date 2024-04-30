import React, { useReducer } from "react";

const first = {firstCounter:0,randomGen:'Please Generate'};
const reducerFun = (state, action) => {
  switch (action) {
    case "Add": {
      return {...state,firstCounter:state.firstCounter + 1};
    }
    case "Reduce": {
      return {...state,firstCounter:state.firstCounter - 1};
    }
    case "Generate": {
        return {...state,randomGen:Math.floor(Math.random()*91+10)};
      }
    default: {
      return state;
    }
  }
};
const UseRedObject = () => {
  const [state, dispatch] = useReducer(reducerFun, first);
  return (
    <div>
      <h1>{state.firstCounter} </h1>
      <button onClick={()=>dispatch("Add")}>Add</button>
      <button onClick={()=>dispatch("Reduce")}>Reduce</button>
      <h1>{state.randomGen}</h1>
      <button onClick={()=>dispatch("Generate")}>Randon Number</button>
    </div>
  );
};

export default UseRedObject;
