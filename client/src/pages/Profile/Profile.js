import React, { useContext, Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ViewerContext from "../../context/ViewerProvider";
import { Avatar } from "@material-ui/core";
// import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from "react-apollo";
import { ALL_USER_ITEMS_QUERY } from "../../apollo/queries";
import ProfileCard from "../../components/ProfileContents/ProfileCard";
import Card from "../../components/ItemCard/ItemCard";

const Profile = ({ classes, item, viewer }) => {
  // class Profile extends Component {
  //   render() {
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
              if (loading || !data)
                return (
                  <>
                    <div
                      style={{
                        backgroundColor: "pink",
                        display: "flex",
                        justifyContent: "center"
                      }}
                    >
                      {/* <div className={classes.container}> */}
                      <div
                        style={{
                          display: "grid",
                          //flexDirection: "row",
                          justifyContent: "center",
                          width: 400,
                          backgroundColor: "red"
                        }}
                      >
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
                          <h3>{viewer.fullname}</h3>
                        </div>
                        <p>1 Item shared 0 Items borrowed</p>
                        <p>"No bio provided."</p>
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
                      <Card />
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

//export default ProfileContainer;
// export const ALL_USER_ITEMS_QUERY = gql`
//   query user($id: ID!) {
//     user(id: $id) {
//       bio
//       email
//       fullname
//       items {
//         ...ItemFields
//       }
//       borrowed {
//         ...ItemFields
//       }
//     }
//   }
//   ${ItemFields}
// `;

// const Profile = ({ classes }) => {
//   const { viewer, loading } = useContext(ViewerContext);
//   if (loading) return <p>loading...</p>;

//   return (
//     <div>
//       <p>
//         This is the profile page located at <code>/profile/:userId</code>.
//       </p>
//     </div>
//   );
// };
