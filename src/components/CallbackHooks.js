import React, { useState, useEffect, useCallback, useMemo } from 'react';

const CallbackHooksExample = () => {
  // State hook
  const [count, setCount] = useState(0);

  // Effect hook
  useEffect(() => {
    // This function will be called after every render
    console.log('Effect hook triggered');
    // You can perform side effects here, like data fetching, subscriptions, etc.
    // In this example, we're just logging to the console
  });

  // Callback hook - useCallback
  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // Dependency array, empty for no dependencies

  // Memoization hook - useMemo
  const doubledCount = useMemo(() => {
    console.log('Memoized computation');
    return count * 2;
  }, [count]); // Dependency array, recompute when count changes

  return (
    <div>
      <h2>Callback Hooks Example</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <p>Doubled Count: {doubledCount}</p>
    </div>
  );
};

export default CallbackHooksExample;
