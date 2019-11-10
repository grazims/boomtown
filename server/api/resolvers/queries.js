const { ApolloError } = require("apollo-server");

const queryResolvers = app => ({
  viewer(parent, args, { user }, info) {
    return user;
  },
  async user(parent, { id }, { pgResource }, info) {
    try {
      const user = await pgResource.getUserById(id);
      if (id === null) {
        return null;
      } else {
        return user;
      }
    } catch (e) {
      throw new ApolloError(e);
    }
  },
  async items(parent, { filter }, { pgResource }, info) {
    try {
      const items = await pgResource.getItems(filter);

      return items;
    } catch (e) {
      throw new ApolloError(e);
    }
  },
  async tags(parent, { tag }, { pgResource }) {
    try {
      const tags = await pgResource.getTags(tag);
      return tags;
    } catch (e) {
      throw new ApolloError(e);
    }
  }
});
module.exports = queryResolvers;
