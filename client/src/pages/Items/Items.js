import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ItemGrid from "../../components/ItemGrid";

const Items = ({ items }) => {
  items = items.map(item => {
    item.tags = item.tags.map(tag => {
      return tag.title;
    });
    item.itemImg = item.imageurl;
    return item;
  });

  return (
    <div>
      <ItemGrid items={items} />
    </div>
  );
};

export default withStyles(styles)(Items);
