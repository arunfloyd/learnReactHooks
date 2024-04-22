import React, { useEffect, useRef } from "react";

const UseRefFocusInput = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default UseRefFocusInput;
