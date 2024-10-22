import React, { FC } from 'react';
import { useNavigate } from 'react-router';

import { Button } from 'antd';

import classes from './Header.module.css';

const Navbar: FC = () => {

    const navigate = useNavigate();

    return (
        <div className={classes.navbar}>
            <Button
                size="large"
                onClick={() => {
                    navigate('/')
                }}
            >
                Книги
            </Button>
            <Button
                size="large"
                onClick={() => {
                    navigate('/readers')
                }}
            >
                Читатели
            </Button>
        </div>
    )
}

export default Navbar;