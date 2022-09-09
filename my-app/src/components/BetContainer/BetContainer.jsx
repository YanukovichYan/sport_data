import React from 'react';

import classes from "../BetContainer/BetContainer.module.css";

import Bet from "../Bet/Bet";

const BetContainer = () => {
    return (
        <div className={classes.BetContainer}>
            <Bet/>
        </div>
    );
};

export default BetContainer;