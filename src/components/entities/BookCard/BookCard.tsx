import React, { FC } from "react";
import { IBook } from "../../../types";
import { Button, Card } from "antd";
import classes from './BookCard.module.css';

interface IProps {
    book: IBook,
    isView?: boolean,
}

const BookCard: FC<IProps> = ({
    book,
    isView = false,
}) => {
    return (
        <Card
            className={classes.card}
        >
            <p className={classes.itemProperty}>Название: {book.title}</p>
            <p className={classes.itemProperty}>Описание: {book.description}</p>
            {!isView && (
                <Button>
                    Выдать читателю
                </Button>
            )
            }
        </Card>
    )
};

export default BookCard;