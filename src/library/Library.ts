import { Book } from "../book";
import { User } from "../user";

export interface Library {
  addBook(book: Book): void;
  removeBook(isbn: string): void;
  findBook(isbn: string): Book | undefined;
  borrowBook(isbn:string, user: User): void;
  returnBook(isbn: string, user: User): void;
  registerUser(user: User): void;
  unregisterUser(userId: number): void;
  findUser(userId: number): User | undefined;
}