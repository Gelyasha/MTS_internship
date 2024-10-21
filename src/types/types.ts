export interface IBook {
    id: number,
    title: string,
    description: string,
};

export interface IReader {
    id: number,
    lastName: string,
    bookList: IBook[],
};