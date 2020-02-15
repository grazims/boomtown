import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ItemCard from "../../components/ItemCard";
import ShareItemForm from "../../components/ShareItemForm";
/* 
  TODO: Create ShareItemForm and ShareItemPreview in the components dir
  and call them from this file.

  ShareItemForm is the form that our User will use to add a new item 

  When the user is filling ShareItemForm, we will show a preview of 
  this item using the ShareItemPreview. 
  Hint: It should look like any other Item card.

*/
import BasicTextFields from "../../components/ShareItemForm";
import ShareItemPreview from "../../components/ShareItemPreview";

const Share = ({ classes }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: 50
      }}
    >
      <ItemCard />
      <ShareItemForm />
    </div>
  );
};

export default withStyles(styles)(Share);
