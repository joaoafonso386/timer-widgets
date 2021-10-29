import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

import "./Nav.css";

const useStyles = makeStyles(() => ({
  background: {
    backgroundColor: "rgb(43, 43, 43)",
  },
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className={classes.background}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Timer Widgets
            </Typography>
            <Button color="inherit">
              <NavLink className="button-nav" to="/digitalclock">
                Ditigal Clock
              </NavLink>
            </Button>
            <Button color="inherit">
              <NavLink className="button-nav" to="/countdownchristmas">
                Countdown Christmas
              </NavLink>
            </Button>
            <Button color="inherit">
              <NavLink className="button-nav" to="/stopwatch">
                Stopwatch
              </NavLink>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Nav;
