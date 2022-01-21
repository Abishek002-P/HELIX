import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={LandingPage} />
      <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
