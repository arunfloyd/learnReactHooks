import React, { useEffect, useState } from "react";

const UseEffectCounter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You  Clicked ${count} Times`;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}> Clicked : {count}</button>{" "}
      Times
    </div>
  );
};

export default UseEffectCounter;
