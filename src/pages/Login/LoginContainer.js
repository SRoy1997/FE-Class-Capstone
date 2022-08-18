import { Route, Switch } from "react-router-dom";
import LoginPage from "./Login";
import LoginHome from "../LoginHome";

function LoginContainer() {
  return (
    <Switch>
      <Route exact path="/" component={LoginHome} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  );
}

export default LoginContainer;
