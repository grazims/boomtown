import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ViewerContext from "../../context/ViewerProvider";
import { Avatar } from "@material-ui/core";
// import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from "react-apollo";
import { ALL_USER_ITEMS_QUERY } from "../../apollo/queries";
//import ProfileCard from "../../components/ProfileContents/ProfileCard";

import ItemGrid from "../../components/ItemGrid";

const Profile = ({ classes, item, viewer }) => {
  return (
    <ViewerContext.Consumer>
      {({ viewer, item, classes }) => {
        return (
          <Query
            query={ALL_USER_ITEMS_QUERY}
            variables={{
              id: viewer.id
            }}
            fetchPolicy="network-only"
          >
            {({ loading, data }) => {
              if (loading || !data) return null;
              const { user } = data;
              let items = user.items.map(item => {
                item.tags = item.tags.map(tag => {
                  return tag.title;
                });
                item.itemImg = item.imageurl;
                return item;
              });

              return (
                <>
                  <div
                    style={{
                      backgroundColor: "pink",
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                    <div className={classes.container}>
                      {/* <div
                      style={{
                        display: "grid",
                        //flexDirection: "row",
                        justifyContent: "center",
                        width: 400,
                        backgroundColor: "red"
                      }}
                    > */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row"
                          //justifyContent: "center"
                        }}
                      >
                        <Avatar
                          alt="Remy Sharp"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA1_cB_z2jVf-eK2Yo6ePIJMwt5DWNnazeauE9BKh9C4P8cVMs&s"
                        />
                        <h3>{user.fullname}</h3>
                      </div>
                      <p>{`${items.length} item(s) shared 0 Items borrowed`}</p>
                      <p>{user.bio || "No Bio Provided"}</p>
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: "purple",
                      display: "flex",
                      flexDirection: "column"
                    }}
                  >
                    <h2>Shared Items</h2>
                    <ItemGrid items={items} />
                  </div>
                </>
              );
            }}
          </Query>
        );
      }}
    </ViewerContext.Consumer>
  );
};

export default withStyles(styles)(Profile);
