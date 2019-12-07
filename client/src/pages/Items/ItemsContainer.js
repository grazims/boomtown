import React, { Component } from "react";
import Items from "./Items";
//import FullScreenLoader from "../../components/FullScreenLoader";
import { Query } from "react-apollo";
import { ALL_ITEMS_QUERY } from "../../apollo/queries";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

class ItemsContainer extends Component {
  render() {
    return (
      <Query query={ALL_ITEMS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>{`Error! ${error.message}`}</p>;
          return <Items items={data.items} classes={this.props.classes} />;
        }}
      </Query>
    );
  }
}

export default withStyles(styles)(ItemsContainer);
