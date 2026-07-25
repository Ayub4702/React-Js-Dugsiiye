import { useRef } from "react";

function CounterBox() {
  const countRef = useRef(0);

  function handleCounter() {
    countRef.current = countRef.current + 1;

    console.log(countRef.current);
  }

  return (
    <div>
      <button onClick={handleCounter}>addd+</button>
    </div>
  );
}

export default CounterBox;
