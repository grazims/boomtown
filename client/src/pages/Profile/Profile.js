import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ViewerContext from "../../context/ViewerProvider";

const Profile = ({ classes }) => {
  // const { viewer, loading } = useContext(ViewerContext);
  // if (loading) return <p>loading...</p>;

  return (
    <div>
      <p>
        This is the profile page located at <code>/profile/:userId</code>.
      </p>
    </div>
  );
};

export default withStyles(styles)(Profile);
