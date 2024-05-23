export class Book{
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
}
