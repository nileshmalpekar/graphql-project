import { BookResolvers } from "__generated__/resolvers-types";

const books: BookResolvers = {
  // author: async(parent, _, { dataSources}) => {
  //   dataSources.booksAPI.getAuthor(parent.author_id);
  // }
  author: async (parent, _, { dataSources}) => {
    return dataSources.booksAPI.getAuthor(parent.author_id);
  }

}

export default books;
