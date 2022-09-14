import React from 'react';
import classes from "./BetHeader.module.css";

const BetHeader = () => {
    return (
        <div>
            <div className={classes.bet}>Bet Slip</div>
            {/*<div className={classes.cartMenu}>*/}
            {/*    <div className={classes.cartMenuItem}>Single</div>*/}
            {/*    <div className={classes.cartMenuItem}>Parlay</div>*/}
            {/*    <div className={classes.cartMenuItem}>System</div>*/}
            {/*</div>*/}
        </div>
    );
};

export default BetHeader;