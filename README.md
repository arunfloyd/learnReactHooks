   >>>  React Hooks !!

-> State variable - super powerful variable you can use Hook 

-> Noraml JS Utility given by React is Hook super power 

->Types of  important !! Hooks 
     
   -> useState() - Superpowerful state variable in React
                 - Import {useState} from "react" : import as named 
                 - When ever a state variable updates react rerender the component

   -> useReducer()- 
                      useReducer is a hook in React that allows you to manage state with a reducer function.
                      It's similar to useState, but it's more suitable for managing complex state logic and debugging.
            
   -> useEffect() - UseEffect Hooks which is normal JS function in which react give super power
                       which have specific function purpose

                  - useEffect(which have two arguments)    
                  - when this call back function called is after the render 
               Eg:-  
                     useEffect(() => {
                        console.log("UseEffect");
                             }, []);
 First the body function will render & after the render cycle the useEffect callback is called  
     
 -> useCallback() - Allows you to memoize a callback function, preventing it from being recreated on every render
                  - The useCallback hook in React is used to prevent a function from being recreated on every render.
                  - This is especially useful if you're passing a function as a prop to a child component that uses the       shouldComponentUpdate method or React.memo to prevent unnecessary re-renders.

                Eg:- import { useCallback } from 'react';

                     function ProductPage({ productId, referrer, theme }) {
                     const handleSubmit = useCallback((orderDetails) => {
                     post('/product/' + productId + '/buy', { referrer, orderDetails });
                     }, [productId, referrer]);
                     return ();}         
     
   -> useMemo () - useMemo is a hook in React that allows you to memoize a value so that it is only recalculated when the  dependencies change.
                    This can help improve performance by avoiding unnecessary recalculations.        

                Eg:- import React, { useMemo } from 'react';

                     function MyComponent({ data }) {
                     const expensiveOperation = useMemo(() => {
                     // Perform a costly computation based on data
                     return data.filter(item => item > 5);
                     }, [data]);
                     return (
                     <div>
                     <p>Result of expensive operation: {expensiveOperation}</p>
                     </div>
                     );
                     }          
   -> React.memo():
                    React.memo is a higher-order component that memoizes a functional component, preventing unnecessary re-renders when the component's props have not changed.
                    It caches the output of the component and only re-renders it if its props have changed. 
                    Useful when a component's rendering is expensive and you want to avoid unnecessary re-renders.    
                
                Eg:- const MemoizedComponent = React.memo((props) => {
                     /\* component code */\});                

   -> React.lazy() :
                     React.lazy is a function that allows you to define a component that will be loaded lazily, only when it's  needed.
                     This is useful for code splitting, where you want to split your code into smaller chunks that can be loaded separately.

                Eg:- import React, { Suspense } from 'react';

                    const MyLazyComponent = React.lazy(() => import('./MyLazyComponent'));

                     function MyComponent() {
                        return (
                            <div>
                            <Suspense fallback={<div>Loading...</div>}>
                            <MyLazyComponent />
                            </Suspense>
                            </div>
                            );}     
