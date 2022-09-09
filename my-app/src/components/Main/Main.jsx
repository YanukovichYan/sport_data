import React from 'react';

import classes from "../Main/Main.module.css";
import MainHeader from "../MainHeader/MainHeader";
import Events from "../Events/Events";
import Event from "../Event/Event";


const Main = () => {

    return (
        <div className={classes.main}>
            <MainHeader/>
            <Events/>
            <Event/>
        </div>
    );
};

export default Main;