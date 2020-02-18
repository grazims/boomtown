import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ViewerContext from "../../context/ViewerProvider";
import { Avatar } from "@material-ui/core";
import { Query } from "react-apollo";
import { ALL_USER_ITEMS_QUERY } from "../../apollo/queries";
import ItemGrid from "../../components/ItemGrid";

const Profile = ({ classes }) => {
  return (
    <ViewerContext.Consumer>
      {({ viewer }) => {
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
                  <div className={classes.profileContainer}>
                    <div className={classes.container}>
                      <div className={classes.bio}>
                        <Avatar
                          alt="Remy Sharp"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA1_cB_z2jVf-eK2Yo6ePIJMwt5DWNnazeauE9BKh9C4P8cVMs&s"
                        />
                        <p className={classes.userName}>{user.fullname}</p>
                      </div>
                      <p
                        style={{ fontSize: 18 }}
                      >{`${items.length} item(s) shared 0 Items borrowed`}</p>
                      <p style={{ fontSize: 18 }}>
                        {user.bio || "No Bio Provided"}
                      </p>
                    </div>
                  </div>
                  <div className={classes.itemTitleContainer}>
                    <h2 className={classes.itemTitle}>Shared Items</h2>
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
