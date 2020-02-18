import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

import Button from "@material-ui/core/Button";
import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { Form, Field } from "react-final-form";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

import HomeIcon from "@material-ui/icons/HomeOutlined";
import ToolIcon from "@material-ui/icons/BuildOutlined";
import ElectronicsIcon from "@material-ui/icons/DevicesOutlined";
import SportsIcon from "@material-ui/icons/SportsOutlined";
import MusicIcon from "@material-ui/icons/MusicNoteOutlined";
import BooksIcon from "@material-ui/icons/BookOutlined";
import HappinessIcon from "@material-ui/icons/TagFacesOutlined";
import Typography from "@material-ui/core/Typography";

import ItemPreviewContext from "../../context/ItemPreviewProvider";

import { Mutation } from "react-apollo";
import { ADD_ITEM_MUTATION } from "../../apollo/queries";
import { Redirect } from "react-router";

class ShareItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  render() {
    const { classes, tags } = this.props;

    if (this.state.redirect) {
      return <Redirect to="/items" />;
    }
    return (
      <ItemPreviewContext.Consumer>
        {({ updatePreview, resetPreview }) => {
          return (
            <Mutation mutation={ADD_ITEM_MUTATION}>
              {(addItem, { data }) => {
                return (
                  <Form
                    onSubmit={async values => {
                      let itemTags = tags.filter(tag => {
                        return values.tags.indexOf(tag.title) !== -1;
                      });
                      let data = {
                        variables: {
                          item: {
                            title: values.itemName,
                            description: values.itemDesc,
                            imageurl: values.itemImg,
                            tags: itemTags
                          }
                        }
                      };
                      await addItem(data);
                      resetPreview();

                      this.setState({
                        redirect: true
                      });
                    }}
                    validate={updatePreview}
                  >
                    {({ handleSubmit }) => {
                      return (
                        <div className={classes.grandecontainer}>
                          <div className={classes.container1}>
                            <form className={classes.container1}>
                              <h1 style={{ marginTop: 0 }}>
                                Share. Borrow. Prosper.
                              </h1>

                              <FormControl className={classes.formControl}>
                                <Field name="itemImg">
                                  {({ input }) => (
                                    <div>
                                      <TextField
                                        className={classes.imageInput}
                                        type="text"
                                        margin="normal"
                                        label="SELECT AN IMAGE"
                                        fullWidth
                                        variant="outlined"
                                        inputProps={{
                                          autoComplete: "off",
                                          ...input
                                        }}
                                        value={input.value}
                                      />
                                    </div>
                                  )}
                                </Field>
                              </FormControl>
                              <FormControl>
                                <InputLabel htmlFor="itemName">
                                  Name your item
                                </InputLabel>
                                <Field
                                  name="itemName"
                                  render={({ input, meta }) => (
                                    <Input
                                      id="itemName"
                                      type="text"
                                      fullWidth
                                      inputProps={{
                                        autoComplete: "off",
                                        ...input
                                      }}
                                      value={input.value}
                                    />
                                  )}
                                />
                              </FormControl>
                              <FormControl>
                                <InputLabel htmlFor="itemDesc">
                                  Describe your item
                                </InputLabel>
                                <Field
                                  name="itemDesc"
                                  render={({ input, meta }) => (
                                    <Input
                                      id="itemDesc"
                                      type="text"
                                      inputProps={{
                                        autoComplete: "off",
                                        ...input
                                      }}
                                      value={input.value}
                                    />
                                  )}
                                />
                              </FormControl>

                              <FormControl className={classes.formControl}>
                                <Typography variant="body1">
                                  Add Tags:{" "}
                                </Typography>
                                <div className={classes.tags}>
                                  <label className={classes.tagIcons}>
                                    <Field
                                      name="tags"
                                      component="input"
                                      type="checkbox"
                                      value="Household Items"
                                    />
                                    Household Items
                                    <HomeIcon />
                                  </label>
                                  <label className={classes.tagIcons}>
                                    <Field
                                      name="tags"
                                      component="input"
                                      type="checkbox"
                                      value="Tools"
                                    />
                                    Tools
                                    <ToolIcon />
                                  </label>
                                  <label className={classes.tagIcons}>
                                    <Field
                                      name="tags"
                                      component="input"
                                      type="checkbox"
                                      value="Electronics"
                                    />
                                    Electronics
                                    <ElectronicsIcon />
                                  </label>
                                  <label className={classes.tagIcons}>
                                    <Field
                                      name="tags"
                                      component="input"
                                      type="checkbox"
                                      value="Musical Instruments"
                                    />
                                    Musical Instruments
                                    <MusicIcon />
                                  </label>
                                  <label className={classes.tagIcons}>
                                    <Field
                                      name="tags"
                                      component="input"
                                      type="checkbox"
                                      value="Books"
                                    />
                                    Books
                                    <BooksIcon />
                                  </label>

                                  <label className={classes.tagIcons}>
                                    <Field
                                      name="tags"
                                      component="input"
                                      type="checkbox"
                                      value="Sports Goods"
                                    />
                                    Sports Goods
                                    <SportsIcon />
                                  </label>
                                  <label className={classes.tagIcons}>
                                    <Field
                                      name="tags"
                                      component="input"
                                      type="checkbox"
                                      value="Happiness"
                                    />
                                    Happiness
                                    <HappinessIcon />
                                  </label>
                                </div>
                              </FormControl>
                              <Button
                                variant="contained"
                                color="primary"
                                style={{ display: "flex", marginTop: 30 }}
                                onClick={handleSubmit}
                              >
                                Share
                              </Button>
                            </form>
                          </div>
                        </div>
                      );
                    }}
                  </Form>
                );
              }}
            </Mutation>
          );
        }}
      </ItemPreviewContext.Consumer>
    );
  }
}

export default withStyles(styles)(ShareItemForm);
