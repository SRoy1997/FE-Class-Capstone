import { Route, BrowserRouter as Router } from "react-router-dom";

import UserProvider from "./pages/Login/UserProvider";
import { StandardUser } from "./pages/Login/Helpers/UserRoles";
import LoginContainer from "./pages/Login/LoginContainer";
import DefaultContainer from "./pages/Login/DefaultContainer";

// import HomePage from "./pages/Home";
import NavBar from "./components/NavBar";

// import AboutPage from "./pages/About";
// import ContactPage from "./pages/Contact";
// import WidgetsPage from "./pages/Widgits";
// import LogoutPage from "./pages/Logout";
// import WidgetsPage from "./pages/Widgits";

// import ClockWidget from "./widgets/Clock";
// import ColorChangerWidget from "./widgets/ColorChanger";
// import CounterWidget from "./widgets/Counter";
// import WeatherWidget from "./widgets/Weather";

import "./styles/styles.scss";
// import LoginPage from "./pages/Login";

export default function App() {
  return (
    <div className="WidgetApp">
      <Router>
        <UserProvider>
          <StandardUser>
            <Route path="/" component={NavBar} />
          </StandardUser>

          <Route path="/" component={LoginContainer} />

          <StandardUser>
            <Route path="/" component={DefaultContainer} />
          </StandardUser>

          {/* <Switch>
            <Route exact path="/" component={HomePage} />

            <Route path="/widgets" component={WidgetsPage} />
            <Route path="/widget/Clock" component={ClockWidget} />
            <Route path="/widget/ColorChanger" component={ColorChangerWidget} />
            <Route path="/widget/Counter" component={CounterWidget} />
            
            <Route path="/widget/Weather" component={WeatherWidget} />

            <Route path="/about" component={AboutPage} />

            <Route path="/contact" component={ContactPage} />

            <Route path="/login" component={LoginPage} /> 

            <Route path="/logout" component={LogoutPage} />
          </Switch> */}
        </UserProvider>
      </Router>
    </div>
  );
}
