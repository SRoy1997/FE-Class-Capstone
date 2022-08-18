import {
  Route,
  Switch,
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";

import LoginPage from "./Login/Login";

export default function LoginHome() {
  const history = useHistory();

  return (
    <div className="LoginHome">
      <div className="LoginHomeContent">
        <h1>Welcome to my Widgets Capstone</h1>
        <div className="LoginPageButton">
          <button onClick={() => history.push("/login")}>Login</button>
        </div>
      </div>

      <div className="LoginHomeRightSide"></div>

      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}
