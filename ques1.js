import React, { useState } from 'C:\Users\Admin\my-counter-app\src\App.js';

function Counter() {
  // Initialize the count state with an initial value of 0
  const [count, setCount] = useState(0);

  // Function to handle the button click and update the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default Counter;

