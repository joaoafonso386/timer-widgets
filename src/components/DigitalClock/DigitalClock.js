import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import timeImg from "../../assets/clock-img.jpg";

const DigitalClock = () => {
  const [clock, setClock] = useState();

  //Using useEffect to only rerender the component if the value (state) of clock changes -> [clock]
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString());
    }, 1);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Card className="card-mui" sx={{ maxWidth: 600 }}>
        <CardMedia component="img" alt="clock" height="340" image={timeImg} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Digital Clock
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A simple clock that shows the current time
          </Typography>
          <Typography variant="h2">{clock}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default DigitalClock;
