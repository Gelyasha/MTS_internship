import React, { FC, useState } from "react";
import classes from './BooksPage.module.css'
import { observer } from "mobx-react-lite";
import { IBook } from "../../../types";
import AddBookModal from "../../entities/AddBookModal";
import { Button } from "antd";

interface IProps {
    books: IBook[],
}

const BooksPage: FC<IProps> = observer(({ books }) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <div>
            <div>
                {books.map((book) => {
                    return (
                        <div>
                            Название: {book.title}
                            Описание: {book.description}
                        </div>
                    )
                })}
            </div>
            <Button
                onClick={() => {
                    setIsModalVisible(true)
                }}
            >
                Добавить книгу
            </Button>
            <AddBookModal
                isVisible={isModalVisible}
                setIsVisible={setIsModalVisible}
            />
        </div>
    )
});

export default BooksPage;