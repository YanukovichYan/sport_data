import React from 'react';
import classes from "./Market.module.css";
import {MARKETS} from "../../../marketsObject/markets";
import {addItemCart, deleteItemCart} from "../../../redux/eventsSlice";
import {useDispatch, useSelector} from "react-redux";

const Market = ({selectedEvent, market}) => {

    console.log("market", market)
    // console.log("market.type", MARKETS[market.type].title)

    const cartData = useSelector((state) => state.sports.cart);

    const dispatch = useDispatch();

    const inCart = [...cartData]

    function clickCoeff(e, name, odd, id, index) {

        if (index === -1) {
            dispatch(addItemCart({
                id: id,
                coeffTitle: MARKETS[market.type].title,
                participants: selectedEvent?.data?.name,
                coeff: odd,
                name: name,
            }))

        } else {
            inCart.splice(index, 1)
            dispatch(deleteItemCart(inCart))
        }
    }

    return (
        <div>
            <div className={classes.marketTitle}>{MARKETS[market.type]?.title}</div>
            <div style={{display: "flex", padding: "10px 0px"}}>
                {MARKETS[market.type] &&
                    MARKETS[market.type].order.map((marketType) => {
                        const id = market.outcomes[marketType].id;
                        const odd = market.outcomes[marketType].odd;
                        const name = MARKETS[market.type].name[marketType];

                        const index = inCart.findIndex((inCart) => inCart.id === id)

                        return (
                            <span
                                key={id}
                                className={`${classes.coeffWrapper} ${index !== -1 && classes.inCart}`}
                                onClick={(e) => clickCoeff(e, name, odd, id, index)}
                            >
                <span className={`${classes.marketType} ${index !== -1 && classes.activeMarketType}`}>{name}</span>
                <span className={classes.coeff}>{odd}</span>
              </span>
                        );
                    })}
            </div>

        </div>
    );
};

export default Market;