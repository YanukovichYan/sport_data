import classes from '../Cart/Cart.module.css'
import {useDispatch, useSelector} from "react-redux";
import {deleteItemCart} from "../../../redux/eventsSlice";
import BetCalc from "../BetCalc/BetCalc";

const Cart = () => {
    const dispatch = useDispatch()
    const cartData = useSelector((state) => state.sports.cart)

    const cartClose = (item) => {
        const addDeleteCartData = [...cartData]

        const index = addDeleteCartData.findIndex(({id}) => id === item.id)
        if (index !== -1) {
            addDeleteCartData.splice(index, 1)
        }
        dispatch(deleteItemCart(addDeleteCartData))
    }

    return (
        <div>
            {cartData.map((item, index) =>
                <div key={index} className={classes.outcome}>
                    <div className={classes.left}>
                        <div className={classes.number}>{index += 1}</div>
                        <div className={classes.participant}>{item.participants}</div>
                        <div className={classes.bottomCart}>
                            <div>
                                <div className={classes.results}>Match Odds</div>
                                <div className={classes.win}>Wager: {item[item.outcomesType]}</div>
                            </div>
                            <div className={classes.odd}>{item.coeff}</div>
                        </div>
                    </div>
                    <div className={classes.close} onClick={() => cartClose(item)}>
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.56066 0.43934C1.14645 -0.146447 2.09619 -0.146447 2.68198 0.43934L5.5 3.25736L8.31802 0.43934C8.90381 -0.146447 9.85355 -0.146447 10.4393 0.43934C11.0251 1.02513 11.0251 1.97487 10.4393 2.56066L7.62132 5.37868L10.5607 8.31802C11.1464 8.90381 11.1464 9.85355 10.5607 10.4393C9.97487 11.0251 9.02513 11.0251 8.43934 10.4393L5.5 7.5L2.56066 10.4393C1.97487 11.0251 1.02513 11.0251 0.43934 10.4393C-0.146447 9.85355 -0.146447 8.90381 0.43934 8.31802L3.37868 5.37868L0.56066 2.56066C-0.0251265 1.97487 -0.0251265 1.02513 0.56066 0.43934Z"
                                fill="#A47353"></path>
                        </svg>
                    </div>
                </div>
            )}
            {cartData.length ? <BetCalc cartData={cartData}/> : null}
        </div>
    );
};

export default Cart;