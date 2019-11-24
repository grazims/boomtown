import { Query } from "react-apollo";
import React from "react";
// , { Fragment }
import { VIEWER_QUERY } from "../apollo/queries";

const ViewerContext = React.createContext();

const ViewerProvider = ({ children }) => {
  return (
    <Query query={VIEWER_QUERY}>
      {({ data, loading }) => {
        if (!data) return children;

        //some data validation or null check
        //or something to that effect
        return (
          <ViewerContext.Provider value={(data.viewer, loading)}>
            {children}
          </ViewerContext.Provider>
        );
      }}
    </Query>
  );
};

export { ViewerProvider };
export default ViewerContext;
