import React from 'react';
import classes from "../Events/Events.module.css";

const Events = () => {
    return (
        <div className={classes["main-events"]}>
            <div className={classes["events-title"]}>05.09.2022</div>
            <div className={classes["events-title"]}>EVENT</div>
            <div className={classes["events-title"]}>1</div>
            <div className={classes["events-title"]}>X</div>
            <div className={classes["events-title"]}>2</div>
            <div className={classes["events-title"]}>other</div>
        </div>
    );
};

export default Events;