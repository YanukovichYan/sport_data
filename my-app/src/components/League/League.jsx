import {addLeagues} from "../../redux/eventsSlice"
import classes from "./League.module.css";
import {useDispatch, useSelector} from "react-redux";

const League = ({league, leaguesAmount, eventsBySport, eventByLeagues}) => {

    const dispatch = useDispatch()

    const clickEvent = useSelector((state) => state.sports.arrayCheckbox)

    const checkboxClick = () => {
        const copy = [...clickEvent]
        const index = copy.findIndex(([nameLeague, eventByLeagues]) => nameLeague === league)
        console.log(index)
        if (index === -1) {
            copy.push([league, eventByLeagues])
        } else {
            copy.splice(index, 1)
        }
        dispatch(addLeagues(copy))
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

