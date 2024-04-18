import "./App.css";
import React from "react";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import UseStateHookObject from "./components/UseStateHookObject";
import UseStateHookArray from "./components/UseStateHookArray";
import UseEffectCounter from "./components/UseEffectCounter";
function App() {
  return (
    <div className="App">
      <ClassCounter />
      <HookCounter />
      <UseStateHookObject />
      <UseStateHookArray />
      <UseEffectCounter />
    </div>
  );
}

export default App;
