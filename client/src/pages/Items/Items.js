import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const Items = ({ classes }) => {
  return (
    <div>
      <p>
        This is the items page located at <code>/items</code>.
        <h1>djisjdisjds</h1>
        <h2>dhshdih</h2>
      </p>
    </div>
  );
};

export default withStyles(styles)(Items);
