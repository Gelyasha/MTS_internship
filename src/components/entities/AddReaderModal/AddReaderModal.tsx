import { Form, Input, Modal, notification } from "antd";
import React, { FC } from "react";
import readersStore from "../../../store/readersStore";

interface IFormValues {
    lastName: string,
}

interface IProps {
    isVisible: boolean,
    setIsVisible: (value: boolean) => void,
}

const AddReaderModal: FC<IProps> = ({
    isVisible,
    setIsVisible,
}) => {
    const [form] = Form.useForm<IFormValues>()

    const handleCancel = () => {
        form.resetFields();
        setIsVisible(false);
    }

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            readersStore.addReader(values);
            setIsVisible(false);
            form.resetFields();
        } catch (_error) {
            notification.error({ message: 'Не удалось добавить читателя' })
        }
    }

    return (
        <Modal
            open={isVisible}
            title='Добавить читателя'
            onCancel={handleCancel}
            cancelText='Отмена'
            okText='Сохранить'
            onOk={handleOk}
            destroyOnClose
        >
            <Form
                form={form}
            >
                <Form.Item
                    name={'lastName'}
                    rules={[
                        {
                            required: true,
                            message: 'Обязательное поле'
                        }
                    ]}
                    label='Фамилия'
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    )
};

export default AddReaderModal