import React, { useEffect, useState } from "react";

const UseEffectCounter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log('You Called Me More And More')
    document.title = `You  Clicked ${count} Times`;
  },[count]);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}> Clicked : {count}</button>{" "}
      Times
    </div>
  );
};

export default UseEffectCounter;
