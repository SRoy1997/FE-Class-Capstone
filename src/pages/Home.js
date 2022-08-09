import {
  Route,
  Switch,
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";

import LoginPage from "../pages/Login";

export default function HomePage() {
  const history = useHistory();

  return (
    <div>
      <h1>Welcome to my Widgets Capstone</h1>
      <div className="LoginPageButton">
        <button onClick={() => history.push("/login")}>Login</button>
      </div>

      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}
