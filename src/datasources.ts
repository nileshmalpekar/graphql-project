// Use our automatically generated Book and AddBookMutationResponse types
// for type safety in our data source class
import { Book } from "./__generated__/resolvers-types";

const BooksDB: Omit<Required<Book>, "__typename">[] = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

export class BooksDataSource {
  getBooks(): Book[] {
    // simulate fetching a list of books
    return BooksDB;
  }

}
