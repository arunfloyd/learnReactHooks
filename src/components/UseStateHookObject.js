import { useState } from "react";

const UseStateHookObject = () => {
  const [name, setName] = useState({ firstName: "", secondName: "" });
  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({...name,firstName:e.target.value})}
      />
      <input
        type="text"
        value={name.secondName}
        onChange={(e) => setName({...name,secondName:e.target.value})}
      />
      <h1>
        Hello {name.firstName} {name.secondName}
      </h1>
    </div>
  );
};

export default UseStateHookObject;
