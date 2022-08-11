import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import HomePage from "./pages/Home";
import NavBar from "./components/NavBar";

import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import WidgetsPage from "./pages/Widgits";
import LoginContainer from "./components/LoginAuth/auth/LoginContainer";
import { StandardUser } from "./components/LoginAuth/helpers/UserRoles";
import DefaultContainer from "./components/LoginAuth/auth/DefaultContainer";
import LogoutPage from "./pages/Logout";
// import WidgetsPage from "./pages/Widgits";

import "./styles/styles.scss";

export default function App() {
  return (
    <div className="WidgetApp">
      <Router>
        <Route path="/" component={NavBar} />

        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route path="/widgets" component={WidgetsPage} />

          <Route path="/about" component={AboutPage} />

          <Route path="/contact" component={ContactPage} />

          <Route path="/login" component={LoginContainer} />

          <StandardUser withRedirect>
            <Route path="/" component={DefaultContainer} />
          </StandardUser>

          <Route path="/logout" component={LogoutPage} />
        </Switch>
      </Router>
    </div>
  );
}
