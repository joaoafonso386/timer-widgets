import "./App.css";
import Stopwatch from "./components/Stopwatch/Stopwatch";
import DigitalClock from "./components/DigitalClock/DigitalClock";
import CountdownChristmas from "./components/CountdownChristmans/CountdownChristmas";
import Nav from "./components/Nav/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Redirect to="/digitalclock" />
          </Route>
          <Route path="/digitalclock">
            <DigitalClock />
          </Route>
          <Route path="/stopwatch">
            <Stopwatch />
          </Route>
          <Route path="/countdownchristmas">
            <CountdownChristmas />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
