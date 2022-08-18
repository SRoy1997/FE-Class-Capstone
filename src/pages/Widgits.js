import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";

import ClockWidget from "../widgets/Clock";
import ColorChanger from "../widgets/ColorChanger";
import Counter from "../widgets/Counter";
import SearchSwapi from "../widgets/SwapiQuery";
import WeatherWidget from "../widgets/Weather";

export default function WidgetsPage() {
  return (
    <div>
      <div className="Widgets">
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
          <div className="SwapiQueryWidget">
            <Link to="/widget/Swapi">
              <button>Swapi Query Widget</button>
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
          <Route path="/Clock" component={ClockWidget} />

          <Route path="/ColorChanger" component={ColorChanger} />

          <Route path="/Counter" component={Counter} />

          <Route path="/Swapy" component={SearchSwapi} />

          <Route path="/Weather" component={WeatherWidget} />
        </Switch>
      </Router>
    </div>
  );
}
