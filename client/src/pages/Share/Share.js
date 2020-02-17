import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ItemCard from "../../components/ItemCard";
import ShareItemForm from "../../components/ShareItemForm";

import BasicTextFields from "../../components/ShareItemForm";
import ShareItemPreview from "../../components/ShareItemPreview";

const Share = ({ tags }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: 50
      }}
    >
      <ShareItemPreview />
      <ShareItemForm tags={tags} />
    </div>
  );
};

export default withStyles(styles)(Share);
