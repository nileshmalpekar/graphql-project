// Use our automatically generated Book and AddBookMutationResponse types
// for type safety in our data source class
import { Book } from "./__generated__/resolvers-types";
import { readFileSync } from "fs";

export class BooksDataSource {

  readonly BooksDB: Omit<Required<Book>, "__typename">[];

  constructor(booksFile: string) {
    let rawData = readFileSync('./books.json', { encoding: 'utf-8' });
    let jsonData = JSON.parse(rawData);
    this.BooksDB = jsonData
  }

  getBooks(): Book[] {
    // simulate fetching a list of books
    return this.BooksDB;
  }

  getBook(id: string): Book {
    return this.BooksDB.find((book) => book.id === id)
  }

}
