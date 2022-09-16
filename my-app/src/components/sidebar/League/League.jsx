import {addLeagues} from "../../../redux/eventsSlice"
import classes from "./League.module.css";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";


const League = ({league, leaguesAmount, eventByLeagues}) => {
    const params = useParams();
    const location = useLocation().pathname;
    const dispatch = useDispatch()

    // useEffect(() => {
    //     if (league === params.league) {
    //         setIsOpen(true)
    //     }
    // }, [params.league])

    const arrayCheckbox = useSelector((state) => state.sports.arrayCheckbox)

    const navigate = useNavigate()

    const checkboxClick = () => {
        const addArrayCheckbox = [...arrayCheckbox]
        const index = addArrayCheckbox.findIndex(([nameLeague, eventByLeagues]) => nameLeague === league)
        if (index === -1) {
            addArrayCheckbox.unshift([league, eventByLeagues])
            navigate(`${location}/${league}`)
        } else {
            addArrayCheckbox.splice(index, 1)
            window.history.back()
        }
        dispatch(addLeagues(addArrayCheckbox))
    }

    return (
        <div>
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

