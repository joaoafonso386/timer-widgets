import React, { useState, useEffect } from "react";
import moment from "moment";
import christmasImg from "../../assets/christmas-img.jpg";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

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
    }, 1);
    return () => {
      clearInterval(findDistance);
    };
  }, [currentTime]);

  return (
    <div>
      <Card className="card-mui" sx={{ maxWidth: 600 }}>
        <CardMedia
          component="img"
          alt="countdown to christmas"
          height="340"
          image={christmasImg}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Christmas Countdown
          </Typography>
          <Typography variant="body2" color="text.secondary">
            How many days, hours and minutes do we have until christmas? Find
            out with this coutdown!
          </Typography>
          <Typography variant="h4">{currentTime}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CountdownChristmas;
