import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ShareItemForm from "../../components/ShareItemForm";
import ShareItemPreview from "../../components/ShareItemPreview";

const Share = ({ tags }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: 50,
        flexWrap: "wrap",
        boxSizing: "borderBox"
      }}
    >
      <ShareItemPreview />
      <ShareItemForm tags={tags} />
    </div>
  );
};

export default withStyles(styles)(Share);
