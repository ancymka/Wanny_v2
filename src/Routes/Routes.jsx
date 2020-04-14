import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

const Stands = React.lazy(() => {
  return import("../Pages/Stands/Stands");
});

const Baths = React.lazy(() => {
  return import("../Pages/Baths/Baths");
});

const Archives = React.lazy(() => {
  return import("../Pages/Archives/Archives");
});

const Login = React.lazy(() => {
  return import("../Pages/Login/Login");
});

const Routes = (props) => {
  const token = useSelector((state) => state.auth.token !== null);

  let routes = (
    <Switch>
      <Route path="/login" exact render={(props) => <Login {...props} />} />
    </Switch>
  );

  if (token) {
    routes = (
      <Switch>
        <Route
          path="/stanowiska"
          exact
          render={(props) => <Stands {...props} />}
        />
        <Route path="/wanny" exact render={(props) => <Baths {...props} />} />
        <Route
          path="/archiwum"
          exact
          render={(props) => <Archives {...props} />}
        />
        <Route path="/login" exact render={(props) => <Login {...props} />} />
      </Switch>
    );
  }

  return <Suspense fallback={<p>Ładowanie...</p>}>{routes}</Suspense>;
};

export default Routes;
