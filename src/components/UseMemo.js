import React, { useState, useMemo } from 'react';

const MyComponent = () => {
    const [count, setCount] = useState(0);

    // Expensive calculation function
    const expensiveCalculation = (num) => {
        console.log("Calculating...");
        for (let i = 0; i < 10000; i++) {
            num += 1;
        }
        return num;
    };

    // Memoize the expensive calculation based on the 'count' dependency
    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    const increment = () => {
        setCount((c) => c + 1);
    };

    return (
        <div>
            <div>
                Count: {count}
                <button onClick={increment}>Increment</button>
            </div>
            <div>
                Expensive Calculation: {calculation}
            </div>
        </div>
    );
};

export default MyComponent;