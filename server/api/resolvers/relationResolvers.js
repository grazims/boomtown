const { ApolloError } = require("apollo-server");

const relationResolvers = {
  User: {
    async items({ id }, args, { pgResource }, info) {
      const userItems = await pgResource.getItemsForUser(id);
      return userItems;
    },
    async borrowed({ id }, args, { pgResource }, info) {
      const getBorrowed = await pgResource.getBorrowedItemsForUser(id);
      return getBorrowed;
    }
  },

  Item: {
    async itemowner(parent, arg, { pgResource }) {
      const itemowner = await pgResource.getUserById(parent.ownerId);
      const { id, fullname, email, bio } = itemowner;
      return {
        id,
        fullname,
        email,
        bio
      };
    },
    async tags(parent, arg, { pgResource }) {
      const tags = await pgResource.getTagsForItem(parent.id);
      return tags;
    },
    async borrower(parent, arg, { pgResource }) {
      const borrower = await pgResource.getUserById(parent.borrower);
      const { id, fullname, email, bio } = borrower;
      return borrower ? { id, fullname, email, bio } : null;
    }
  }
};

module.exports = relationResolvers;
