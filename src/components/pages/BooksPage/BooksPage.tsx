import React, { FC, useState } from "react";
import classes from './BooksPage.module.css'
import { observer } from "mobx-react-lite";
import { IBook } from "../../../types";
import AddBookModal from "../../entities/AddBookModal";
import { Button } from "antd";
import BookCard from "../../entities/BookCard";
import GiveBookModal from "../../entities/GiveBookModal";
import readersStore from "../../../store/readersStore";

interface IProps {
    books: IBook[],
}

const BooksPage: FC<IProps> = observer(({ books }) => {

    const [isAddBookModalVisible, setIsAddBookModalVisible] = useState(false);
    const [isReadersModalVisible, setIsReadersModalVisible] = useState(false);
    const [chosenBook, setChosenBook] = useState<IBook | null>(null);

    const handleGiveBookClick = (book: IBook) => {
        setChosenBook(book);
        setIsReadersModalVisible(true);
    }

    const handleCloseReadersModal = () => {
        setChosenBook(null);
        setIsReadersModalVisible(false);
    }

    return (
        <div>
            <Button
                size="large"
                onClick={() => {
                    setIsAddBookModalVisible(true);
                }}
            >
                Добавить книгу
            </Button>
            <div className={classes.bookList}>
                {books.map((book) => {
                    return (
                        <BookCard
                            key={book.id}
                            book={book}
                            handleGiveBookClick={() => {
                                handleGiveBookClick(book);
                            }}
                        />
                    )
                })}
            </div>
            <AddBookModal
                isVisible={isAddBookModalVisible}
                setIsVisible={setIsAddBookModalVisible}
            />
            {chosenBook && (
                <GiveBookModal
                    readers={readersStore.readers}
                    book={chosenBook}
                    isModalVisible={isReadersModalVisible}
                    onCancel={handleCloseReadersModal}
                />
            )}
        </div>
    )
});

export default BooksPage;