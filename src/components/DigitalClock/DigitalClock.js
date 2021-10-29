import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const [clock, setClock] = useState();

  //Using useEffect to only rerender the component if the value (state) of clock changes -> [clock]
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString());
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="digital-clock">
      <h2>{clock}</h2>
    </div>
  );
};

export default DigitalClock;
