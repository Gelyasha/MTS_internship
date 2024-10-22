import React, { FC, useState } from "react";

import classes from './ReaderCard.module.css';
import { IReader } from "../../../types";
import { Card, Collapse } from "antd";
import BookCard from "../BookCard";

interface IProps {
    reader: IReader
}

const ReaderCard: FC<IProps> = ({
    reader
}) => {

    const [isItemsVisible, setIsItemsVisible] = useState(false);

    const handleChangeItemsVisible = async () => {
        setIsItemsVisible(prev => !prev)
    };

    return (
        <Card
            className={classes.card}
        >
            <p>Фамилия: {reader.lastName}</p>
            <Collapse onChange={handleChangeItemsVisible}>
                <Collapse.Panel
                    key={1}
                    header={isItemsVisible ? 'Скрыть книги читателя' : 'Показать книги читателя'}
                >
                    <div className={classes.itemProperty}>
                        {reader.bookList.map((book) => {
                            return (
                                <BookCard
                                    key={book.id}
                                    book={book}
                                />
                            )
                        })}
                    </div>
                </Collapse.Panel>
            </Collapse>
        </Card>
    )
};

export default ReaderCard;