import { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);
  const increment5 = () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(()=>{
        setCount(prevCount=>prevCount+1)

      },300*(i+1))
    }
  };
  return (
    <div>
      <h1> {count}</h1>
      <button onClick={() => setCount(count + 1)}> COUNT + </button>
      <button onClick={() => setCount(count - 1)}> COUNT - </button>
      <button onClick={() => setCount(count - count)}> Reset </button>
      <button onClick={increment5}>INCREMENT BY 5</button>
    </div>
  );
};
export default HookCounter;
