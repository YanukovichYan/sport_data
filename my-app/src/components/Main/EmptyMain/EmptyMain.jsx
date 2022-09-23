import React from 'react';
import classes from "../EmptyMain/EmptyMain.module.css";

const EmptyMain = () => {

    return (
            <div className={classes.main}>
                <div className={classes.headerEmptyEvents}>BETTING</div>
                <div className={classes.emptyEvents}>
                    <div className={classes.cartEmptyMessage}>Choose an event</div>
                </div>
            </div>
    );
};

export default EmptyMain;