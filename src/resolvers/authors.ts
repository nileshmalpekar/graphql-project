import { AuthorResolvers } from "__generated__/resolvers-types";

const authors: AuthorResolvers = {
  books: async (parent, _, { dataSources}) => {
    return dataSources.booksAPI.getBooksByAuthor(parent.id);
  }

}

export default authors;
