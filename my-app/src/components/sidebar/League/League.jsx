import {addLeagues} from "../../../redux/eventsSlice"
import classes from "./League.module.css";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


const League = ({league, leaguesAmount, eventByLeagues}) => {
    const dispatch = useDispatch()
    const arrayCheckbox = useSelector((state) => state.sports.arrayCheckbox)

    const navigate = useNavigate()

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
    const handleNavigate = () => {
        navigate('/tournaments')
    }

    return (
        <div onClick={handleNavigate}>
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
        </div>
    )
};

export default League;

