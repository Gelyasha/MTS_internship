import React, { FC } from 'react';
import { IBook, IReader } from '../../../types';
import { observer } from 'mobx-react-lite';
import { Button, Modal } from 'antd';
import readersStore from '../../../store/readersStore';

import classes from './GiveBookModal.module.css';

interface IProps {
    readers: IReader[],
    book: IBook,
    isModalVisible: boolean,
    onCancel: () => void,
}

const GiveBookModal: FC<IProps> = observer(({
    readers,
    book,
    isModalVisible,
    onCancel,
}) => {

    const modalTitle = `Выдать книгу "${book.title}"`;

    return (
        <Modal
            title={modalTitle}
            open={isModalVisible}
            onCancel={onCancel}
            footer={null}
        >
            <div className={classes.readersList}>
                {readers.map((reader) => {
                    const hasThisBook = reader.bookList.some((readersBook) => readersBook.id === book.id);
                    return (
                        <div
                            key={reader.id}
                            className={classes.reader}
                        >
                            <span>{reader.lastName}</span>
                            {hasThisBook && <span>Уже читает эту книгу</span>}
                            {!hasThisBook && (
                                <Button
                                    onClick={() => readersStore.giveBook(reader.id, book)}
                                >
                                    Выдать
                                </Button>
                            )}
                        </div>
                    )
                })}
            </div>
        </Modal>
    )
});

export default GiveBookModal;
