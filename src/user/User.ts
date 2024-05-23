import { Book } from "../book";
export class User {
  private id: number;
  private name: string;
  private borrowedBooks: Book[] = [];

  constructor(
    id: number,
    name: string
  ) {
    this.id = id;
    this.name = name;
  }

  getId(): number {
      return this.id;
  }

  getName(): string {
      return this.name;
  }

  getBorrowedBooks(): Book[] {
    return this.borrowedBooks;
  }

  addBorrowedBook(book: Book): void {
    this.borrowedBooks.push(book);
  }

  removeBorrowedBook(book: Book): void {
    this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
  }
}
