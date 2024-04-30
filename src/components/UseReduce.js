import React, { useReducer } from "react";

const valueReducer = (prevState,action) => {
    return prevState + action
};
const UseReduce = () => {
  const [value, dispatch] = useReducer(valueReducer, 0);
  const handleReduce = () => {
    dispatch(-1)
  };
  const handleAdd = () => {
    dispatch(1)

  };

  return (
    <div>
      <h1>{value} </h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
};

export default UseReduce;
