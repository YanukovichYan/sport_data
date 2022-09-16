import React, {useEffect, useState} from 'react';
import classes from "./Country.module.css";
import League from "../League/League";
import {useLocation, useNavigate, useParams} from "react-router-dom";

const Country = ({country, countryAmount, countriesBySport}) => {

    const location = useLocation().pathname;

    const params = useParams();

    useEffect(() => {
        if (country === params.country) {
            setIsOpen(true)
        }
    }, [params.country])

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [eventByLeagues, setEventByLeagues] = useState([])
    const sortedLeagues = [...eventByLeagues.sort((a, b) => b[1].length < a[1].length && -1)]

    useEffect(() => {
        if (countriesBySport.length) {
            const leagues = countriesBySport.reduce((object, event) => {
                if (object[event.data.tournament.name]) {
                    object[event.data.tournament.name].push(event)
                } else {
                    object[event.data.tournament.name] = [event]
                }
                return object
            }, {})
            setEventByLeagues(Object.entries(leagues))
        }
    }, [countriesBySport])

    const {sport} = useParams();

    function handleCountryOpen() {
        setIsOpen(!isOpen)
        !isOpen ? navigate(`${location}/${country}`) : window.history.back();
    }

    return (
        <>
            <div onClick={handleCountryOpen} className={classes.country}>
                {country}
                <div className={classes.countryRight}>
                    <div className={classes["country-amount"]}>({countryAmount})</div>
                    <div className={classes["country-arrow"]}>
                        <svg className={`${isOpen && classes.arrowRotate}`} width="8" height="16" viewBox="0 0 8 16"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.214317 3.57843L3.3963 0.396445C3.59156 0.201183 3.90814 0.201183 4.1034 0.396445L7.28539 3.57843C7.48065 3.77369 7.48065 4.09027 7.28539 4.28553C7.09012 4.48079 6.77354 4.48079 6.57828 4.28553L4.24985 1.95711L4.24985 15.75L3.24985 15.75L3.24985 1.95711L0.921424 4.28553C0.726162 4.48079 0.409579 4.48079 0.214317 4.28553C0.019055 4.09027 0.019055 3.77369 0.214317 3.57843Z"
                                fill="white"></path>
                        </svg>
                    </div>
                </div>
            </div>
            {
                isOpen ? eventByLeagues.map(([league, eventByLeagues], index) => {
                    return <League league={league} key={index} leaguesAmount={eventByLeagues.length}
                                   countriesBySport={countriesBySport} eventByLeagues={eventByLeagues}/>
                }) : null
            }
        </>
    )
};

export default Country;
