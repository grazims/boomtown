import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppRoutes from "./routes";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from "react-router-dom";
//import { Provider as ReduxProvider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import theme from "./theme";
import client from "./apollo";
//import store from "./redux";
import { ViewerProvider } from "./context/ViewerProvider";

/**
 * @TODO: Initialize Redux Store
 *
 * Uncomment the following line when your Redux store is configured
 *
 * import store from './redux'
 *
 * Below in your <App />, wrap a <ReduxProvider /> component around all
 * of the app's children, and pass it the imported `store` as the `store`
 * prop's value.
 */

import "./index.css";

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={client}>
        <ViewerProvider>
          {/* <ItemPreviewProvider> */}
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
          {/* </ItemPreviewProvider> */}
        </ViewerProvider>
      </ApolloProvider>
    </MuiThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
