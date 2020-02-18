import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router";
import Items from "../pages/Items";
import Home from "../pages/Home";
import Share from "../pages/Share";
import Profile from "../pages/Profile";
import ViewerContext from "../context/ViewerProvider";
import NavBar from "../components/NavBar";

export default () => (
  <ViewerContext.Consumer>
    {({ viewer, loading }) => {
      if (loading) return <p>Loading!</p>;
      if (viewer) {
        return (
          <Fragment>
            <NavBar />
            <Switch>
              <Route path="/items" component={Items} />
              <Route path="/profile/:userid" component={Profile} />
              <Route path="/profile" component={Profile} />
              <Route path="/share" component={Share} />
              <Redirect from="*" to="/items" />
            </Switch>
          </Fragment>
        );
      } else {
        return (
          <Switch>
            <Route exact path="/welcome" component={Home} />
            <Redirect from="*" to="/welcome" />
          </Switch>
        );
      }
    }}
  </ViewerContext.Consumer>
);
