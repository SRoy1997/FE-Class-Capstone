import { Route, Switch } from "react-router-dom";
import HomePage from "../../../pages/Home";
import LoginPage from "../../../pages/Login";

function LoginContainer() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  );
}

export default LoginContainer;
