import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import logo from "../../images/boomtown.svg";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { LOGOUT_MUTATION } from "../../apollo/queries";
import { Mutation } from "react-apollo";
import client from "../../apollo";

const NavBar = ({ classes }) => {
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.nav}>
          <Link to={"/items"}>
            <img className={classes.logo} src={logo} alt="boomtown_logo" />
          </Link>
          <div className={classes.share}>
            <Link to={"/share"}>
              <Button className={classes.shareIcon}>
                <AddIcon />
                Share Something
              </Button>
            </Link>
            {auth && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <Link to={"/profile"}>
                    <MenuItem onClick={handleClose}>Your Profile</MenuItem>
                  </Link>

                  <Mutation
                    mutation={LOGOUT_MUTATION}
                    onCompleted={() => client.resetStore()}
                  >
                    {logoutMutation => (
                      <MenuItem onClick={logoutMutation}>Sign Out</MenuItem>
                    )}
                  </Mutation>
                </Menu>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(NavBar);
