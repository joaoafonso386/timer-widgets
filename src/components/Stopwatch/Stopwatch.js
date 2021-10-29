import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
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
      <Card className="card-mui" sx={{ maxWidth: 600 }}>
        <CardMedia component="img" alt="clock" height="340" image="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Stopwatch
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A stopwatch clock that can start, stop and reset a timer
          </Typography>
          <Typography variant="h2">
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
          </Typography>
          <div>
            {!running && (time === 0 || time > 0) && (
              <Button onClick={() => setRunning(true)}>Start</Button>
            )}
            {running && time >= 0 && (
              <Button onClick={() => setRunning(false)}>Stop</Button>
            )}
            {!running && time > 0 && (
              <Button onClick={() => setTime(0)}>Reset</Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Stopwatch;
