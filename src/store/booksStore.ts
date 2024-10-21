import { action, makeObservable, observable } from "mobx";
import { IBook } from "../types"

const LS_KEY = 'books';

interface IBookStore {
    books: IBook[],
    addBook: (book: { title: string, description: string }) => void,
}

class BooksStore implements IBookStore {
    books: IBook[] = [];

    constructor() {
        makeObservable(this, {
            books: observable,
            addBook: action,
        });
        this.#loadBooksFromLoacalStorage();
    };

    addBook(book: { title: string, description: string }) {
        const newBook = {
            ...book,
            id: Date.now(),
        }
        this.books.push(newBook);
        this.#saveBooksToLoacalStorage();
    };

    #saveBooksToLoacalStorage() {
        localStorage.setItem(LS_KEY, JSON.stringify(this.books))
    };

    #loadBooksFromLoacalStorage() {
        const booksFromStorage = localStorage.getItem(LS_KEY)
        if (booksFromStorage) {
            this.books = JSON.parse(booksFromStorage)
        }
    }
}

const booksStore = new BooksStore()
export default booksStore;