import { User } from "../user";
import { Book } from "./Book";

export class ReferenceBook extends Book {
  constructor(
    title: string,
    author: string,
    isbn: string
  ) {
    super(title, author, isbn);
  }

  borrowBook(user: User): void {
    console.log(`${this.getTitle()} cannot be borrowed as it is a reference book.`);
  }

  returnBook(user: User): void {
    console.log(`${this.getTitle()} is a reference book and cannot be returned.`);
  }
}