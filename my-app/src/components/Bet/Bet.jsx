import React from 'react';

import classes from "../Bet/Bet.module.css";
import Cart from "../Cart/Cart";
import BetCount from "../BetCount/BetCount";

const Bet = () => {
    return (
        <div>
            <div className={classes.bet}>Bet Slip</div>
            <div className={classes.cartMenu}>
                <div className={classes.cartMenuItem}>Single</div>
                <div className={classes.cartMenuItem}>Parlay</div>
                <div className={classes.cartMenuItem}>System</div>
            </div>
            <Cart/>
            <BetCount/>
        </div>
    );
};

export default Bet;