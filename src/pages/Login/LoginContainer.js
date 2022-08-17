import { Route, Switch } from "react-router-dom";
import LoginPage from "./Login";
import HomePage from "../Home";

function LoginContainer() {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
}

export default LoginContainer;
