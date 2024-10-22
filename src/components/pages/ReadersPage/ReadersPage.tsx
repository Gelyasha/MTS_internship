import React, { FC, useState } from "react";
import classes from './ReadersPage.module.css';
import { IReader } from "../../../types";
import { observer } from "mobx-react-lite";
import { Button } from "antd";
import AddReaderModal from "../../entities/AddReaderModal";

interface IProps {
    readers: IReader[],
}

const ReadersPage: FC<IProps> = observer(({ readers }) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <div>
            <div>
                {readers.map((reader) => {
                    return (
                        <div>
                            Фамилия: {reader.lastName}
                        </div>
                    )
                })}
            </div>
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
        </div>
    )
});

export default ReadersPage;