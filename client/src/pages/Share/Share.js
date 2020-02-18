import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ShareItemForm from "../../components/ShareItemForm";
import ShareItemPreview from "../../components/ShareItemPreview";

const Share = ({ tags, classes }) => {
  return (
    <div className={classes.container}>
      <ShareItemPreview />
      <ShareItemForm tags={tags} />
    </div>
  );
};

export default withStyles(styles)(Share);
