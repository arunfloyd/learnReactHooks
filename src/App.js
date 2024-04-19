import "./App.css";
import React from "react";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import UseStateHookObject from "./components/UseStateHookObject";
import UseStateHookArray from "./components/UseStateHookArray";
import UseEffectCounter from "./components/UseEffectCounter";
import UseEffectHooKMouse from "./components/UseEffectHooKMouse";
import TimerHook from "./components/TimerHook";
import DataFetching from "./components/DataFetching";
function App() {
  return (
    <div className="App">
      <ClassCounter />
      <HookCounter />
      <UseStateHookObject />
      <UseStateHookArray />
      <UseEffectCounter />
      <UseEffectHooKMouse/>
      <TimerHook/>
      <DataFetching/>
    </div>
  );
}

export default App;
