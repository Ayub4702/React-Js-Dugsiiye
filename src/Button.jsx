import { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(1);

  const handleBtnIncrement = () => {
    setCount(count + 1);
  };

  const handleBtnDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleBtnIncrement}>increment</button>
      <button onClick={handleBtnDecrement} disabled={count === 0}>
        decrement
      </button>
    </div>
  );
};

export default Button;
