import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState({});

  return (
    <div className="Widgets">
      <Router>
        <Route path="/" component={NavBar} />

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <h1>Welcome to My Routing Demo</h1>
              </div>
            )}
          />
          <Route path="/product" component={ProductsPage} />
          <Route
            path="/contact"
            render={(routeProps) => <ContactPage {...routeProps} user={user} />}
          />

          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}
