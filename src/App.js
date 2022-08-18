import { Route, BrowserRouter as Router } from "react-router-dom";

import UserProvider from "./pages/Login/UserProvider";
import { StandardUser } from "./pages/Login/Helpers/UserRoles";
import LoginContainer from "./pages/Login/LoginContainer";
import DefaultContainer from "./pages/Login/DefaultContainer";

import NavBar from "./components/NavBar";

import "./styles/styles.scss";

export default function App() {
  return (
    <div className="WidgetApp">
      <Router>
        <UserProvider>
          <StandardUser>
            <NavBar />
          </StandardUser>

          <Route path="/" component={LoginContainer} />

          <StandardUser>
            <Route path="/" component={DefaultContainer} />
          </StandardUser>
        </UserProvider>
      </Router>
    </div>
  );
}
