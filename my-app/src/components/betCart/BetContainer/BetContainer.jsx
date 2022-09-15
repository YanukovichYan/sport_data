import React from 'react';
import classes from "../BetContainer/BetContainer.module.css";
import BetHeader from "../BetHeader/BetHeader";
import Cart from "../Cart/Cart";
import {useSelector} from "react-redux";

const BetContainer = () => {
    const cartData = useSelector((state) => state.sports.cart)

    return (
        <div className={classes.BetContainer}>
            <BetHeader cartData={cartData}/>
            {!cartData.length ? <div className={classes.cartFooter}>
                <div className={classes.cartEmptyMessage}>Click on the odds to start with the bet</div>
            </div> :null}
            <Cart/>
        </div>
    );
};

export default BetContainer;