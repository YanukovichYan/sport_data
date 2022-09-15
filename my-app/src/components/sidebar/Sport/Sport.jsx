import arrow from "../../../static/images/arrow.svg";
import React, {useState, useEffect} from "react";
import Country from "../Country/Country";
import classes from "./Sport.module.css";

const Sport = ({sport, amount, eventsBySport}) => {

    const [isOpen, setIsOpen] = useState(false);

    const [eventsByCountry, setEventByCountry] = useState([])
    const sortedCountry = [...eventsByCountry.sort((a, b) => b[1].length < a[1].length && -1)]
    useEffect(() => {
        if (eventsBySport.length) {
            const countriesBySport = eventsBySport.reduce((object, event) => {
                if (object[event.data.country.name]) {
                    object[event.data.country.name].push(event)
                } else {
                    object[event.data.country.name] = [event]
                }

                return object
            }, {})
            setEventByCountry(Object.entries(countriesBySport))

        }
    }, [eventsBySport])
    return (
        <>
            <div onClick={() => {
                setIsOpen(!isOpen)
            }} className={classes["event-item"]}>
                <div>{sport}</div>
                <div className={classes["item-right"]}>
                    <div className={classes["event-amount"]}>({amount})</div>
                    <span className={classes["border"]}></span>
                    <div className={classes["event-arrow"]}>
                        <img
                            src={arrow}
                            className={`${isOpen && classes.arrowRotate}`}
                            alt="arrow"
                        />
                    </div>
                </div>
            </div>
            {
                isOpen ? eventsByCountry?.map(([country, countriesBySport], index) => {
                    return <Country country={country}  key={index} countryAmount={countriesBySport.length} countriesBySport={countriesBySport} />
                }) : null
            }
        </>
    )
}

export default Sport;

