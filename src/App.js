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
import UseContextA from "./components/UseContextA";
import UseContextTricky from "./components/UseContextTricky";
import UseReducerCounter from "./components/UseReducerCounter";
import UseReducerCounterObject from "./components/UseReducerCounterObject";
import UseRefFocusInput from "./components/UseRefFocusInput";
import CallbackHooks from "./components/CallbackHooks";
import UseReduce from "./components/UseReduce";
import UseRedObject from "./components/UseRedObject";



export const UserContext = React.createContext();
export const LevelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <ClassCounter />
      // <HookCounter />
      <UseStateHookObject />
      <UseStateHookArray />
      <UseEffectCounter />
      <UseEffectHooKMouse />
      <TimerHook />
      <DataFetching />
      <UserContext.Provider value={"Arun"}>
        <LevelContext.Provider value={12}>
          <UseContextA />
          <UseContextTricky />
        </LevelContext.Provider>
      </UserContext.Provider>
      <UseReducerCounter />
      <UseReducerCounterObject/>
      <UseRefFocusInput/> */}
      {/* <CallbackHooks/>
      <UseReduce/> */}
      <UseRedObject/>
    </div>
  );
}

export default App;
