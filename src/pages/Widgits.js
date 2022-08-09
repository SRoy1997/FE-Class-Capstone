import {
  Route,
  Switch,
  BrowserRouter as Router,
  useHistory,
  NavLink,
} from "react-router-dom";

import ClockWidget from "../widgets/Clock";
import ColorChanger from "../widgets/ColorChanger";
import Counter from "../widgets/Counter";
import PasswordToggle from "../widgets/PasswordToggle";

export default function WidgetsPage() {
  const history = useHistory();

  return (
    <div className="Widgets">
      <div>
        <div>
          <div className="ClockWidgetButton">
            <button onClick={() => history.push("/clock_widget")}>Clock</button>
          </div>
        </div>

        <div>
          <div className="ColorChangerWidgetButton">
            <NavLink to="/color_changer_widget">Color Changer Widget</NavLink>
          </div>
        </div>

        <div>
          <div className="CounterWidgetButton">
            <button onClick={() => history.push("/counter_widget")}>
              Counter
            </button>
          </div>
        </div>

        <div>
          <div className="PasswordToggleWidgetButton">
            <button onClick={() => history.push("/password_toggle_widget")}>
              Password Toggle
            </button>
          </div>
        </div>
      </div>
      <Router>
        <Switch>
          <Route exact path="/clock_widget" component={ClockWidget} />

          <Route path="/color_changer_widget" component={ColorChanger} />

          <Route path="/counter_widget" component={Counter} />

          <Route path="/password_toggle_widget" component={PasswordToggle} />
        </Switch>
      </Router>
    </div>
  );
}
