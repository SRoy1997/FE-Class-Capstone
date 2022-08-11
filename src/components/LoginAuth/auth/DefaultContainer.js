import { Switch, Route } from "react-router-dom";
import LoginContainer from "./LoginContainer";

function DefaultContainer() {
  return (
    <Switch>
      <Route path="/login" component={LoginContainer} />
    </Switch>
  );
}

export default DefaultContainer;
