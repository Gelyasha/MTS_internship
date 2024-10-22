import React, { FC, useState } from "react";

import classes from './ReaderCard.module.css';
import { IReader } from "../../../types";
import { Button, Card, Collapse } from "antd";
import BookCard from "../BookCard";

interface IProps {
    reader: IReader
}

const ReaderCard: FC<IProps> = ({
    reader
}) => {

    const hasAnyBook = reader.bookList.length > 0;

    const [isItemsVisible, setIsItemsVisible] = useState(false);

    const handleChangeItemsVisible = async () => {
        setIsItemsVisible(prev => !prev)
    };

    return (
        <Card
            className={classes.card}
        >
            <div className={classes.title}>
                <p>Фамилия: {reader.lastName}</p>
            </div>
            {hasAnyBook && (
                <Collapse onChange={handleChangeItemsVisible}>
                    <Collapse.Panel
                        key={1}
                        header={`${isItemsVisible ? 'Скрыть' : 'Показать'} книги читателя`}
                    >
                        <div className={classes.bookList}>
                            {reader.bookList.map((book) => {
                                return (
                                    <BookCard
                                        key={book.id}
                                        book={book}
                                        isView
                                    />
                                )
                            })}
                        </div>
                    </Collapse.Panel>
                </Collapse>
            )}
            {!hasAnyBook && <p>Пока не читает ни одну книгу</p>}
        </Card>
    )
};

export default ReaderCard;