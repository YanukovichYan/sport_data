import React, {useState} from 'react';
import EventsDate from "../EventsDate/EventsDate";
import classes from "./Events.module.css";
import dayjs from "dayjs";
import ButtonCoeff from "../../betCart/ButtonCoeff/ButtonCoeff";
import {useDispatch, useSelector} from "react-redux";
import {addEvents, addSelectedEvent} from "../../../redux/eventsSlice";
import {NavLink, useLocation, useNavigate, useParams} from "react-router-dom";


const Events = ({items}) => {
    const location = useLocation().pathname;

    const navigate = useNavigate();
    const dispatch = useDispatch();

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
        // console.log(item.id)
        setSelectedEvent(item)
        navigate(`${location}/market/${item.id}`)
        // dispatch(addSelectedEvent(item))
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
                                    <div
                                    // to={`${location}/${item.id}`}
                                    onClick={() => {eventForMarket(item)}}
                                    className={classes.participants}
                                    >
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