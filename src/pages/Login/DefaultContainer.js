import { Route, Switch } from "react-router-dom";

import AboutPage from "../About";
import HomePage from "../Home";

import WidgetDashboard from "../Widgits";
import CounterWidget from "../../widgets/Counter";
import ColorChangerWidget from "../../widgets/ColorChanger";
import PasswordToggleWidget from "../../widgets/PasswordToggle";
import ClockWidget from "../../widgets/Clock";
import WeatherWidget from "../../widgets/Weather";

function DefaultContainer() {
  return (
    <Switch>
      <Route path="/homepage" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/widgets" component={WidgetDashboard} />
      <Route path="/counter/widget" component={WidgetDashboard} />
      <Route path="/widget/colorchanger" component={ColorChangerWidget} />
      <Route path="/widget/counter" component={CounterWidget} />
      <Route path="/widget/passwordtoggle" component={PasswordToggleWidget} />
      <Route path="/widget/Clock" component={ClockWidget} />
      <Route path="/widget/Weather" component={WeatherWidget} />
    </Switch>
  );
}

export default DefaultContainer;
