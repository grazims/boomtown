import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router";
import Items from "../pages/Items";
import Home from "../pages/Home";
import Share from "../pages/Share";
import Profile from "../pages/Profile";
import ViewerContext from "../context/ViewerProvider";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MoreIcon from "@material-ui/icons/MoreVert";
// import AddIcon from "@material-ui/icons/Add";
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
