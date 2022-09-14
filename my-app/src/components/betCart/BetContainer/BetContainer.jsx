import React from 'react';
import classes from "../BetContainer/BetContainer.module.css";
import BetHeader from "../BetHeader/BetHeader";
import Cart from "../Cart/Cart";
import {useSelector} from "react-redux";

const BetContainer = () => {
    const cartData = useSelector((state) => state.sports.cart)

    return (
        <div className={classes.BetContainer}>
            {cartData.length ? <BetHeader cartData={cartData}/> :null}
            <Cart/>
        </div>
    );
};

export default BetContainer;