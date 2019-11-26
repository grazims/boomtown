import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router";
import Items from "../pages/Items";
import Home from "../pages/Home";
import Share from "../pages/Share";
import Profile from "../pages/Profile";
import ViewerContext from "../context/ViewerProvider";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

export default () => (
  <ViewerContext.Consumer>
    {({ viewer, loading }) => {
      console.log(viewer);
      if (loading) return null;
      if (viewer) {
        return (
          <Fragment>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                {/* <Typography variant="h6">Newsaqui mudar tudo</Typography> */}
                <Button color="inherit">+ SHARE SOMETHING</Button>
              </Toolbar>
            </AppBar>
            <Switch>
              {/* //all other routes but welcome //one redirect to item from * to items*/}
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
