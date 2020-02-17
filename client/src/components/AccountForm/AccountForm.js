import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { Form, Field } from "react-final-form";
import { graphql, compose } from "react-apollo";
import validate from "./helpers/validation";
import styles from "./styles";
import {
  LOGIN_MUTATION,
  SIGNUP_MUTATION,
  VIEWER_QUERY
} from "../../apollo/queries";

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: true
    };
  }

  render() {
    const { classes, signup, login } = this.props;
    // const validateValues = values => {
    //   console.log(values);
    // };

    return (
      <Form
        onSubmit={values => {
          // console.log(values);
          const loginInput = {
            variables: {
              user: values
            }
          };

          this.state.formToggle ? login(loginInput) : signup(loginInput);
        }}
        validate={validate}
        render={({ handleSubmit, pristine, invalid, form }) => (
          <form onSubmit={handleSubmit} className={classes.accountForm}>
            {!this.state.formToggle && (
              <FormControl fullWidth className={classes.formControl}>
                <InputLabel htmlFor="fullname">Username</InputLabel>
                <Field
                  name="fullname"
                  render={({ input, meta }) => (
                    <div>
                      <Input
                        id="fullname"
                        type="text"
                        inputProps={{
                          autoComplete: "off",
                          ...input
                        }}
                        value={input.value}
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                />
              </FormControl>
            )}
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Field
                name="email"
                render={({ input, meta }) => (
                  <div>
                    <Input
                      id="email"
                      type="text"
                      inputProps={{
                        autoComplete: "off",
                        ...input
                      }}
                      value={input.value}
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              />
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Field
                name="password"
                render={({ input, meta }) => (
                  <div>
                    <Input
                      id="password"
                      type="password"
                      inputProps={{
                        autoComplete: "off",
                        ...input
                      }}
                      value={input.value}
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Button
                  type="submit"
                  className={classes.formButton}
                  variant="contained"
                  size="large"
                  color="secondary"
                  disabled={
                    pristine || invalid
                    //false // @TODO: This prop should depend on pristine or valid state of form
                  }
                >
                  {this.state.formToggle ? "Enter" : "Create Account"}
                </Button>
                <Typography>
                  <button
                    className={classes.formToggle}
                    type="button"
                    onClick={() => {
                      // @TODO: Reset the form on submit
                      form.reset();
                      this.setState({
                        fullname: "",
                        email: "",
                        password: "",
                        formToggle: !this.state.formToggle,
                        error: null
                      });
                    }}
                  >
                    {this.state.formToggle
                      ? "Create an account."
                      : "Login to existing account."}
                  </button>
                </Typography>
              </Grid>
            </FormControl>
            <Typography className={classes.errorMessage}>
              {/* @TODO: Display sign-up and login errors */}
              {this.state.error && this.state.formToggle}
            </Typography>
          </form>
        )}
      />
    );
  }
}
const refetchQueries = [{ query: VIEWER_QUERY }];
export default compose(
  graphql(SIGNUP_MUTATION, {
    options: {
      refetchQueries
    },
    name: "signup"
  }),
  graphql(LOGIN_MUTATION, {
    options: {
      refetchQueries
    },
    name: "login"
  }),
  withStyles(styles)
)(AccountForm);
