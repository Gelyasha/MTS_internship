import { action, makeObservable, observable } from "mobx";
import { IBook, IReader } from "../types"
import { notification } from "antd";

const LS_KEY = 'readers';

interface IReadersStore {
    readers: IReader[],
    addReader: (reader: { lastName: string }) => void,
}

class ReadersStore implements IReadersStore {
    readers: IReader[] = [];

    constructor() {
        makeObservable(this, {
            readers: observable,
            addReader: action
        });
        this.#loadReadersFromLoacalStorage();
    };

    addReader(reader: { lastName: string }) {
        const newReader: IReader = {
            ...reader,
            bookList: [],
            id: Date.now(),
        }
        this.readers.push(newReader);
        this.#saveReadersToLoacalStorage();
    };

    giveBook(readerId: number, book: IBook) {
        const reader = this.readers.find((reader) => reader.id === readerId);
        if (!reader) {
            notification.error({ message: 'Читатель не найден' })
            return
        }
        const isExist = reader.bookList.some((readerBook) => readerBook.id === book.id);
        if (isExist) {
            notification.error({ message: 'Читатель уже взял эту книгу' })
            return
        }
        reader.bookList.push(book);
    }

    #saveReadersToLoacalStorage() {
        localStorage.setItem(LS_KEY, JSON.stringify(this.readers))
    };

    #loadReadersFromLoacalStorage() {
        const readersFromStorage = localStorage.getItem(LS_KEY)
        if (readersFromStorage) {
            this.readers = JSON.parse(readersFromStorage)
        }
    }
}

const readersStore = new ReadersStore()
export default readersStore;