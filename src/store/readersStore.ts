import { makeAutoObservable } from "mobx";
import { IReader } from "../types"

interface IReadersStore {
    readers: IReader[],
    addReader: (reader: IReader) => void,
}

class ReadersStore implements IReadersStore {
    readers: IReader[] = [];

    constructor() {
        makeAutoObservable(this);
        this.#loadReadersFromLoacalStorage();
    };

    addReader(reader: IReader) {
        this.readers.push(reader);
        this.#saveReadersToLoacalStorage();
    };

    #saveReadersToLoacalStorage() {
        localStorage.setItem("readers", JSON.stringify(this.readers))
    };

    #loadReadersFromLoacalStorage() {
        const readersFromStorage = localStorage.getItem("readers")
        if (readersFromStorage) {
            this.readers = JSON.parse(readersFromStorage)
        }
    }
}

const readersStore = new ReadersStore()
export default readersStore;