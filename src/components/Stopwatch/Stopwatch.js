import React from "react";
import { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div>
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        {!running && time === 0 && (
          <button onClick={() => setRunning(true)}>Start</button>
        )}
        {running && time > 0 && (
          <button onClick={() => setRunning(false)}>Stop</button>
        )}
        {!running && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
      </div>
    </div>
  );
};

export default Stopwatch;
