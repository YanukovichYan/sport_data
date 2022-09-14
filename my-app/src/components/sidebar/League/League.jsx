import {addLeagues} from "../../../redux/eventsSlice"
import classes from "./League.module.css";
import {useDispatch, useSelector} from "react-redux";

const League = ({league, leaguesAmount, eventByLeagues}) => {
    const dispatch = useDispatch()
    const arrayCheckbox = useSelector((state) => state.sports.arrayCheckbox)

        const checkboxClick = () => {
            const addArrayCheckbox = [...arrayCheckbox]
            const index = addArrayCheckbox.findIndex(([nameLeague, eventByLeagues]) => nameLeague === league)
            if (index === -1) {
                addArrayCheckbox.unshift([league, eventByLeagues])
            } else {
                addArrayCheckbox.splice(index, 1)
            }
            dispatch(addLeagues(addArrayCheckbox))
        }

    return (
        <label className={classes.league}>
            <div>
                <span>{league}</span>
                <span className={classes["league-amount"]}>({leaguesAmount})</span>
            </div>
            <div>
                <input onClick={checkboxClick} type="checkbox" className={classes["league-checkbox"]}/>
                <div className={classes["league-checkbox-made"]}></div>
            </div>
        </label>
    )
};

export default League;

