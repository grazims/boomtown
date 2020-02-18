import React, { Component } from "react";

const ItemPreviewContext = React.createContext();

const initialState = {
  itemName: "Name your Item",
  itemDesc: "Describe your item",
  tags: [],
  itemImg: "https://via.placeholder.com/300",
  itemowner: {},
  created: new Date()
};

class ItemPreviewProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { item: initialState };
  }

  updatePreview = item => {
    const updatedItem = { ...this.state.item, ...item };
    this.setState({
      item: updatedItem
    });
  };

  resetPreview = () => {
    this.setState({ item: initialState });
  };

  render() {
    return (
      <ItemPreviewContext.Provider
        value={{
          state: this.state,
          updatePreview: this.updatePreview,
          resetPreview: this.resetPreview
        }}
      >
        {this.props.children}
      </ItemPreviewContext.Provider>
    );
  }
}

export { ItemPreviewProvider };
export default ItemPreviewContext;
