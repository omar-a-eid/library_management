import { Book } from "../book";

export interface Library {
  addBook(book: Book): void;
  removeBook(isbn: string): void;
  findBook(isbn: string): Book | undefined;
}