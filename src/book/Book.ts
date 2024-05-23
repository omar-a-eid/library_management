import { User } from "../user";
import { Borrowable } from "./Borrowable";

export class Book implements Borrowable {
  private title: string;
  private author: string;
  private isbn: string;
  private availability: boolean;

  constructor(
      title: string,
      author: string,
      isbn: string,
      availability: boolean = true
  ) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.availability = availability;
  }

  getTitle(): string {
      return this.title;
  }

  getAuthor(): string {
      return this.author;
  }

  getIsbn(): string {
      return this.isbn;
  }

  isAvailable(): boolean {
      return this.availability;
  }

  borrowBook(user: User): void {
    if (this.availability) {
      this.availability = false;
      user.addBorrowedBook(this);
      console.log(`${user.getName()} borrowed ${this.title}`);
    } else {
      console.log(`${this.title} is not available for borrowing`);
    }
  }

  returnBook(user: User): void {
    this.availability = true;
    user.removeBorrowedBook(this);
    console.log(`${user.getName()} returned ${this.title}`);
  }
}
