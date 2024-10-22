import React, { FC, useState } from "react";
import classes from './ReadersPage.module.css';
import { IReader } from "../../../types";
import { observer } from "mobx-react-lite";
import { Button } from "antd";
import AddReaderModal from "../../entities/AddReaderModal";
import ReaderCard from "../../entities/ReaderCard";

interface IProps {
    readers: IReader[],
}

const ReadersPage: FC<IProps> = observer(({ readers }) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <div>
            <Button
                onClick={() => {
                    setIsModalVisible(true)
                }}
            >
                Добавить читателя
            </Button>
            <AddReaderModal
                isVisible={isModalVisible}
                setIsVisible={setIsModalVisible}
            />
            <div className={classes.readersList}>
                {readers.map((reader) => {
                    return (
                        <ReaderCard
                            key={reader.id}
                            reader={reader}
                        />
                    )
                })}
            </div>
        </div>
    )
});

export default ReadersPage;