import { AudioBook, Ebook, ReferenceBook } from "./book";
import { LibrarySystem } from "./library/LibrarySystem";
import { User } from "./user";

const library = new LibrarySystem();
const user1 = new User(1, "Omar");
const user2 = new User(2, "Ahmed");

const referenceBook = new ReferenceBook("Encyclopedia Britannica", "Various", "0987654321");
const ebook = new Ebook("Digital Fortress", "Dan Brown", "1122334455", 5, "PDF");
const audiobook = new AudioBook("Becoming", "Michelle Obama", "2233445566", 450, "Narrator Name");

library.registerUser(user1);
library.registerUser(user2);

library.addBook(referenceBook);
library.addBook(ebook);
library.addBook(audiobook);

library.borrowBook("1122334455", user1); // Omar borrows "Digital Fortress"
library.borrowBook("0987654321", user1); // Omar tries to borrow "Encyclopedia Britannica" (Reference Book)

library.returnBook("1122334455", user1); // Omar returns "Digital Fortress"
library.borrowBook("1122334455", user2); // Ahmed borrows "Digital Fortress"

console.log(user1.getBorrowedBooks()); // []
console.log(user2.getBorrowedBooks()); // [ "Digital Fortress" ]