import { useState, useEffect } from "react";

export default function TimeRunning() {
  const [time, setTime] = useState(0);
  const [choose, setChoose] = useState("");
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timerId;
    // const target = 0;

    if (running && time > 0) {
      timerId = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [running, time]);

  const handleStart = () => {
    setTime(time);
    setRunning(true);
    // console.log(time);
  };

  const handleStop = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setRunning(false);
  };

  return (
    <div>
      <h1>Exercise Time Running</h1>
      <div>
        <span>Choose the seconds: </span>
        <input
          type="number"
          value={choose}
          onChange={(e) => setChoose(e.target.value)}
        />
      </div>
      <h3>Stop Watch {choose} Seconds</h3>
      <button onClick={handleStart} disabled={running || time}>Start</button>
      <button onClick={handleStop} disabled={setRunning}>
        Stop
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
