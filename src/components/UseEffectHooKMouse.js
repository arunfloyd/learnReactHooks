import React, { useEffect, useState } from "react";

const UseEffectHooKMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const mouseFun = (e) => {
    console.log("Mouse Moved");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect((e) => {
    console.log("UseEffected Callled");
    window.addEventListener("mousemove", mouseFun);
    return () => {
      window.removeEventListener("mousedown", mouseFun);
    };
  });

  return (
    <div>
      <h1> Mouse Position </h1>
      <h3>
        {" "}
        X Axis - {x} : Y Axis - {y}
      </h3>
    </div>
  );
};

export default UseEffectHooKMouse;
