import { action, makeObservable, observable } from "mobx";
import { IReader } from "../types"

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