import React, { Component } from "react";
import Share from "./Share";
import { Query } from "react-apollo";
import { ALL_TAGS_QUERY } from "../../apollo/queries";

class ShareContainer extends Component {
  render() {
    return (
      <Query query={ALL_TAGS_QUERY}>
        {({ data, loading }) => {
          if (loading) return null;
          let tags = data.tags.map(tag => {
            return {
              title: tag.title,
              id: tag.id
            };
          });
          return <Share tags={tags} />;
        }}
      </Query>
    );
  }
}

export default ShareContainer;
