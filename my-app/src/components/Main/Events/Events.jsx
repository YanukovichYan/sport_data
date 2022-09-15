import React, {useState} from 'react';
import EventsDate from "../EventsDate/EventsDate";
import classes from "./Events.module.css";
import dayjs from "dayjs";
import ButtonCoeff from "../../betCart/ButtonCoeff/ButtonCoeff";
import EventMarketsContainer from "../EventMarketsContainer/EventMarketsContainer";
import BetHeader from "../../betCart/BetHeader/BetHeader";
import {useDispatch, useSelector} from "react-redux";
import {addEvents, addSelectedEvent} from "../../../redux/eventsSlice";
import {useNavigate} from "react-router-dom";


const Events = ({items}) => {

    const navigate =useNavigate();
    const dispatch = useDispatch();

    const [marketOpen, setMarketOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState({});

    const eventsByDate = items.reduce((result, event) => {
        const date = dayjs(event.data?.time).format("DD.MM.YYYY");
        result[date] ? result[date].push(event) : (result[date] = [event]);

        return result
    }, {})

    const arrEventsByDate = Object.entries(eventsByDate)
    const sortEventsByDate = [...arrEventsByDate.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    })];

    function eventForMarket (item) {
        // setMarketOpen(!marketOpen)
        setSelectedEvent(item)
        navigate('/eventsMarket')
        dispatch(addSelectedEvent(item))
    }

    return (
        <div>
            {arrEventsByDate.map(([date, items], index) => {
                return <div key={index}>
                    <EventsDate date={date}/>
                    {items.map((item, index) => {
                        return <div key={index}>
                            <div key={index}>
                                <div className={classes.event}>
                                    <div className={classes.eventTime}>
                                        <div>{dayjs(item.data.time).format("DD.MM")}</div>
                                        <div>{dayjs(item.data.time).format("HH:mm")}</div>
                                    </div>
                                    <div onClick={() => {eventForMarket(item)}} className={classes.participants}>
                                        <div className={classes.participantsName}>{item.data.name}</div>
                                        <div className={classes.participantsLeague}> {item.data.tournament.name}</div>
                                    </div>
                                    <div className={classes.market}>
                                            <ButtonCoeff item={item}/>
                                        <div onClick={() => {eventForMarket(item)}} className={classes.other}>+{item.data.emc}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            })}
        </div>
    );
};

export default Events;