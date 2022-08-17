import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";

import ClockWidget from "../widgets/Clock";
import ColorChanger from "../widgets/ColorChanger";
import Counter from "../widgets/Counter";
import PasswordToggle from "../widgets/PasswordToggle";

export default function WidgetsPage() {
  return (
    <div className="Widgets">
      <div>
        <div>
          <div className="ClockWidgetButton">
            <Link to="/widget/Clock">
              <button>Clock Widget</button>
            </Link>
          </div>
        </div>

        <div>
          <div className="ColorChangerWidgetButton">
            <Link to="/widget/ColorChanger">
              <button>Color Changer Widget</button>
            </Link>
          </div>
        </div>

        <div>
          <div className="CounterWidgetButton">
            <Link to="/widget/Counter">
              <button>Counter Widget</button>
            </Link>
          </div>
        </div>

        <div>
          <div className="PasswordToggleWidgetButton">
            <Link to="/widget/PasswordToggle">
              <button>Password Toggle Widget</button>
            </Link>
          </div>
        </div>

        <div>
          <div className="WeatherWidgetButton">
            <Link to="/widget/Weather">
              <button>Weather Widget</button>
            </Link>
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
