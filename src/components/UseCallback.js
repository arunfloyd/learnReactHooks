import React, { useCallback, useState } from "react";

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [setCount]);
  return (
    <div>
      <h1>Count :{count}</h1>
      <button onClick={increment}> Add</button>
    </div>
  );
};

export default UseCallback;
