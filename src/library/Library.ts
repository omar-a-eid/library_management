import { Book } from "../book";
import { User } from "../user";
import { BookFilter } from "./BookFilter";

export interface Library {
  addBook(book: Book): void;
  removeBook(isbn: string): void;
  findBook(isbn: string): Book | undefined;
  borrowBook(isbn:string, user: User): void;
  returnBook(isbn: string, user: User): void;
  registerUser(user: User): void;
  unregisterUser(userId: number): void;
  findUser(userId: number): User | undefined;
  filterBooks(filter: BookFilter): Book[];
}