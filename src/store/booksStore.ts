import { makeAutoObservable } from "mobx";
import { IBook } from "../types"

interface IBookStore {
    books: IBook[],
    addBook: (book: IBook) => void,
}

class BooksStore implements IBookStore {
    books: IBook[] = [];

    constructor() {
        makeAutoObservable(this);
        this.#loadBooksFromLoacalStorage();
    };

    addBook(book: IBook) {
        this.books.push(book);
        this.#saveBooksToLoacalStorage();
    };

    #saveBooksToLoacalStorage() {
        localStorage.setItem("books", JSON.stringify(this.books))
    };

    #loadBooksFromLoacalStorage() {
        const booksFromStorage = localStorage.getItem("books")
        if (booksFromStorage) {
            this.books = JSON.parse(booksFromStorage)
        }
    }
}

const booksStore = new BooksStore()
export default booksStore;