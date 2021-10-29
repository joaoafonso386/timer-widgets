import React, { useState, useEffect } from "react";
import moment from "moment";

const CountdownChristmas = () => {
  const [currentTime, setCurrentTime] = useState("");

  //Using let cause time is always changing. useEffect is helpfull to only rerender on currentTime update
  useEffect(() => {
    let christmasTime = new Date("2021-12-25 00:00:00").getTime();
    let findDistance = setInterval(() => {
      let now = new Date().getTime();
      let diff = christmasTime - now;
      let formatDateDays = moment(diff).format("DDD");
      let formatDateHours = moment(diff).format("HH");
      let formatDateMinutes = moment(diff).format("mm");
      setCurrentTime(
        `${formatDateDays} days : ${formatDateHours} hours : ${formatDateMinutes} minutes`
      );

      if (diff <= 0) {
        setCurrentTime("CHRISTMAS IS HERE");
      }
    }, 100);
    return () => {
      clearInterval(findDistance);
    };
  }, [currentTime]);

  return (
    <div className="countdown">
      <h1>{currentTime}</h1>
    </div>
  );
};

export default CountdownChristmas;
