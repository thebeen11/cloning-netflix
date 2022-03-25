import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Browse, Signin, Signup, Home } from "./pages";
import * as ROUTES from "./constans/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";

export default function App() {
  const user = null;
  return (
    <Router>
      <Switch>
        <IsUserRedirect
          exact
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
        >
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect
          exact
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
        >
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute exact user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect
          exact
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}
