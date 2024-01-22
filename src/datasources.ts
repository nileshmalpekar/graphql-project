// Use our automatically generated Book and AddBookMutationResponse types
// for type safety in our data source class
import { Book, Author } from "./__generated__/resolvers-types";
import { readFileSync } from "fs";

export class BooksDataSource {

  readonly BooksDB: Omit<Required<Book>, "__typename">[];
  readonly AuthorsDB: Omit<Required<Author>, "__typename">[];

  constructor(booksFile: string) {
    let rawData = readFileSync(booksFile, { encoding: 'utf-8' });
    let jsonData = JSON.parse(rawData);
    this.BooksDB = jsonData["books"]
    this.AuthorsDB = jsonData["authors"]
  }

  getBooks(): Book[] {
    return this.BooksDB;
  }

  getBooksByAuthor(author_id: string): Book[] {
    return this.BooksDB.filter((book) => book.author_id === author_id);
  }

  getBook(id: string): Book {
    return this.BooksDB.find((book) => book.id === id)
  }

  getAuthors(): Author[] {
    return this.AuthorsDB;
  }

  getAuthor(id: string): Author {
    return this.AuthorsDB.find((author) => author.id === id)
  }

}
