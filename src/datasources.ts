// Use our automatically generated Book and AddBookMutationResponse types
// for type safety in our data source class
import { Book } from "./__generated__/resolvers-types";
import { readFileSync } from "fs";
let rawData = readFileSync('./books.json', { encoding: 'utf-8' });
let jsonData = JSON.parse(rawData);

const BooksDB: Omit<Required<Book>, "__typename">[] = jsonData;

export class BooksDataSource {
  getBooks(): Book[] {
    // simulate fetching a list of books
    return BooksDB;
  }

}
