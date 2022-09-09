import React, {useEffect, useState} from 'react';
import classes from "../Container/Container.module.css";
import NavMenu from "../NavMenu/NavMenu";
import Main from "../Main/Main";
import BetContainer from "../BetContainer/BetContainer";

const Container = () => {
    return (
        <div className={classes.container}>
            <NavMenu/>
            <Main/>
            <BetContainer/>
        </div>
    );
};

export default Container;