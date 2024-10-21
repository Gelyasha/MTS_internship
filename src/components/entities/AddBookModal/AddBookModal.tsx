import React, { FC } from 'react';
import { Form, Input, Modal, notification } from 'antd';
import booksStore from '../../../store/booksStore';

interface IFormValues {
    title: string,
    description: string,
}

interface IProps {
    isVisible: boolean,
    setIsVisible: (value: boolean) => void,
}

const AddBookModal: FC<IProps> = ({
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
            booksStore.addBook(values);
            setIsVisible(false);
            form.resetFields();
        } catch (_error) {
            notification.error({ message: 'Не удалось добавить книгу' })
        }
    }

    return (
        <Modal
            open={isVisible}
            title='Добавить книгу'
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
                    name={'title'}
                    rules={[
                        {
                            required: true,
                            message: 'Обязательное поле'
                        }
                    ]}
                    label='Название'
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={'description'}
                    rules={[
                        {
                            required: true,
                            message: 'Обязательное поле'
                        },
                    ]}
                    label='Описание'
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    )
};

export default AddBookModal;
