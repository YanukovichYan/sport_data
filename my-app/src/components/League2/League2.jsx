

import React, {useState} from 'react';
import {addLeagues, removeLeagues} from "../../redux/eventsSlice"
import classes from "./League.module.css";
import {useDispatch} from "react-redux";

const League = ({league, leaguesAmount, eventsBySport, eventByLeagues}) => {

    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch()

    // console.log(eventByLeagues)

    const checkboxClick = () => {
        dispatch(addLeagues(eventByLeagues))
        setIsOpen(!isOpen)
        // console.log(eventByLeagues)
        // if (isOpen) {
        //     dispatch(removeLeagues(eventByLeagues))
        // }
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