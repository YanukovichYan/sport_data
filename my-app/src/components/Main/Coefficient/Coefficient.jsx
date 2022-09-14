import classes from "../../betCart/ButtonCoeff/ButtonCoeff.module.css";
import {addItemCart, deleteItemCart} from "../../../redux/eventsSlice";
import {useDispatch, useSelector} from "react-redux";


export const Coefficient = ({value, item, type, outcomeId}) => {
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.sports.cart)

    const inCart = [...cartData]
    const index = inCart.findIndex(({id}) => id === outcomeId)

    function clickCoeff(e) {

        if (index === -1) {
            dispatch(addItemCart({
                id: outcomeId,
                participants: item.data.name,
                coeff: e.target.innerHTML,
                home: item.data.participants.home,
                draw: 'Draw',
                away: item.data.participants.away,
                outcomesType: type,
                isActive: true
            }))
        } else {
            inCart.splice(index, 1)
            dispatch(deleteItemCart(inCart))
        }
    }

    return <button className={`${classes.buttonCoeff} ${index !== -1 && classes.active}`}
                onClick={(e) => clickCoeff(e)}>{value}</button>
};
