import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import PrivateRoute from "./PrivateRoute";
import { checkTheme } from "./pages/theme";

export default function App() {
  useEffect(() => {
    checkTheme();
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <PrivateRoute exact path="/home" component={Home} />
        {/* // <PrivateRoute exact path="/live" component={Live} /> */}
        <Route exact path="/404" component={Error404} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}
