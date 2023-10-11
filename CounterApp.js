import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const handleIncrement = () => {
    setMessage(''); // Clear any previous messages
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setMessage(''); // Clear any previous messages
      setCount(prevCount => prevCount - 1);
    } else {
      setMessage('Value cannot go below 0.');
    }
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CounterApp;
