import { useState, useEffect } from "react";

function TimerUseEffect() {
  const [input, setInput] = useState("");
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const userInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    let timerId;

    if (isRunning && time > 0) {
      timerId = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [isRunning, time]);

  const handleStart = () => {
    setTime(input);
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
  };

  return (
    <>
      <p>
        Set Time (seconds)
        <input
          type="number"
          placeholder="Enter Number"
          value={input}
          onChange={userInput}
        />
      </p>

      <p>Time Left: {time}</p>

      <button onClick={handleStart} disabled={isRunning || !input}>
        Start
      </button>
      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={handleReset}>
        Reset
      </button>
    </>
  );
}

export default TimerUseEffect;
