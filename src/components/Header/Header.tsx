import React, { FC } from "react";
import classes from './Header.module.css';
import Navbar from "./Navbar";

const Header: FC = () => {

    return (
        <div className={classes.header}>
            <p className={classes.title}>БИБЛИОТЕКА</p>
            <Navbar />
        </div>
    )

};

export default Header;