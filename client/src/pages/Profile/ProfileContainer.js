import React, { Component } from "react";
import Profile from "./Profile";
// import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from "react-apollo";
import {} from "../../apollo/queries";

class ProfileContainer extends Component {
  render() {
    return <Profile />;
  }
}

export default ProfileContainer;

// import React, { Component } from "react";
// import Profile from "./Profile";
// // import FullScreenLoader from '../../components/FullScreenLoader';
// import { Query } from "react-apollo";
// import { ALL_USER_ITEMS_QUERY } from "../../apollo/queries";
// import ViewerContext from "../../context/ViewerProvider";
// import Typography from "@material-ui/core/Typography";

// class ProfileContainer extends Component {
//   render() {
//     return (
//       <ViewerContext.Consumer>
//         {({ viewer, item }) => {
//           return (
//             <Query
//               query={ALL_USER_ITEMS_QUERY}
//               variables={{
//                 id: this.props.match.params.userid || viewer.id
//               }}
//               fetchPolicy="network-only"
//             >
//               {({ loading, data }) => {
//                 if (loading || !data) return <p>{viewer.fullname}</p>;
//                 return <Profile classes={this.props.classes} data={data} />;
//               }}
//             </Query>
//           );
//         }}
//       </ViewerContext.Consumer>
//     );
//   }
// }

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
