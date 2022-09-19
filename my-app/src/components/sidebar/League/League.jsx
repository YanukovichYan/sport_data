import {addLeagues} from "../../../redux/eventsSlice"
import classes from "./League.module.css";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";


const League = ({league, leaguesAmount, eventByLeagues, country}) => {
    const params = useParams();
    let keys = Object.keys(params);
    const location = useLocation().pathname;
    const dispatch = useDispatch();

    const allEvents = useSelector((state) => state.sports.events);
    const [eventByLeagues2, setEventByLeagues2] = useState([]);

    useEffect(() => {
        if (allEvents.length) {
            const leagues = allEvents.reduce((object, event) => {
                if (object[event.data.tournament.name]) {
                    object[event.data.tournament.name].push(event)
                } else {
                    object[event.data.tournament.name] = [event]
                }
                return object
            }, {})
            setEventByLeagues2(Object.entries(leagues))
        }
    }, [allEvents]);

    const [checkbox, setCheckbox] = useState(false);
    const [aa, setAa] = useState(' ');
    // console.log(params);


    useEffect(() => {
        let array1 = [];
        if (params[keys[2]]) {
            let a = [];
            a = params[keys[2]].split("/");
            setAa(a[0]);
            // console.log(a[0])
        }
        const foundEvents = eventByLeagues2.find(([event, arr]) => {
            return event === aa;
            // return event === params[keys[2]];
        });
        foundEvents && array1.push(foundEvents);
        if (league === aa) {
        // if (league === params[keys[2]]) {
            setCheckbox(true);
            dispatch(addLeagues(array1))
        }
    }, [params[keys[2]], eventByLeagues2])

    const arrayCheckbox = useSelector((state) => state.sports.arrayCheckbox)

    const navigate = useNavigate()

    const checkboxClick = () => {
        setCheckbox(!checkbox)
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
                    <input checked={checkbox} onChange={checkboxClick} type="checkbox"
                           className={classes["league-checkbox"]}/>
                    <div className={classes["league-checkbox-made"]}></div>
                </div>
            </label>
        </div>
    )
};

export default League;

