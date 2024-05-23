import { Book } from "./Book";

export class Ebook extends Book {
  private fileSize: number;
  private format: string;

  constructor(
    title:string,
    author: string,
    isbn: string,
    fileSize: number,
    format: string
  ) {
    super(title, author, isbn);
    this.fileSize = fileSize;
    this.format = format;
  }

  getFileSize(): number {
    return this.fileSize;
  }

  getFormat(): string {
    return this.format;
  }
}