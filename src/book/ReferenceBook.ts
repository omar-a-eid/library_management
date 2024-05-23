import { Book } from "./Book";

export class ReferenceBook extends Book {
  constructor(
    title: string,
    author: string,
    isbn: string
  ) {
    super(title, author, isbn);
  }
}