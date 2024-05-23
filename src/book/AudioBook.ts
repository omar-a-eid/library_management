import { Book } from "./Book";

export class AudioBook extends Book {
  private durationInMin: number;
  private narrator: string;
  constructor (
    title: string,
    author: string,
    isbn: string,
    durationInMin: number,
    narrator: string
  ){
    super(title, author, isbn);

    this.durationInMin = durationInMin;
    this.narrator = narrator;
  }

  getDurationInMin(): number {
    return this.durationInMin;
  }

  getNarrator(): string {
    return this.narrator;
  }
}