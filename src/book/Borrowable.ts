import { User } from "../user";

export interface Borrowable {
  borrowBook(user: User): void;
  returnBook(user: User): void;
}