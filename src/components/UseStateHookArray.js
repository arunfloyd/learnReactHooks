import React, { useState } from "react";

const UseStateHookArray = () => {
  const [items, setItems] = useState([]);
  const addValues = () => {
    setItems([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 100 + 2) },
    ]);
  };

  return (
    <div>
      <button onClick={addValues}>ADD VALUES</button>
      <ul>
        {console.log(items)}
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseStateHookArray;
