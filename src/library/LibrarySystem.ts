import { Book } from "../book";
import { User } from "../user";
import { BookFilter } from "./BookFilter";
import { Library } from "./Library";

export class LibrarySystem implements Library {
  private books: Book[] = [];
  private users: User[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }
  
  removeBook(isbn: string): void {
    this.books = this.books.filter(book => book.getIsbn() !== isbn);
  }

  findBook(isbn: string): Book | undefined {
    return this.books.find(book => book.getIsbn() === isbn);
  }

  borrowBook(isbn: string, user: User): void {
    const book = this.findBook(isbn);

    if(!book) {
      throw new Error(`Book with ISBN ${isbn} not found`);
    }

    book.borrowBook(user);
  }

  returnBook(isbn: string, user: User): void {
    const book = user.getBorrowedBooks().find(book => book.getIsbn() === isbn);

    if (!book) {
      throw new Error(`${user.getName()} does not have this book borrowed`);
    }

    book.returnBook(user);
  }

  registerUser(user: User): void {
    this.users.push(user);
  }

  unregisterUser(userId: number): void {
    this.users = this.users.filter(user => user.getId() !== userId);
  }

  findUser(userId: number): User | undefined {
    return this.users.find(user => user.getId() === userId);
  }

  filterBooks(filter: BookFilter): Book[] {
    return this.books.filter(filter);
  }
}