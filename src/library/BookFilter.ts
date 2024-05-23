import { Book } from "../book";

export interface BookFilter {
  (book:Book): boolean;
}