import React, { Component } from "react";
import ItemPreviewContext from "../../context/ItemPreviewProvider";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ItemCard from "../ItemCard";

class ShareItemPreview extends Component {
  render() {
    return (
      <ItemPreviewContext.Consumer>
        {({ state }) => {
          console.log("context props");
          console.log(state);
          const item = {
            title: state.item.itemName,
            description: state.item.itemDesc,
            tags: state.item.tags,
            itemImg: state.item.media,
            itemowner: state.item.itemowner
          };
          return (
            <div>
              <ItemCard item={state.item} />
            </div>
          );
        }}
      </ItemPreviewContext.Consumer>
    );
  }
}

export default withStyles(styles)(ShareItemPreview);
