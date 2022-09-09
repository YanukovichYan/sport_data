import React, {useState} from 'react';
import classes from "../Event/Event.module.css";
import {useDispatch, useSelector} from "react-redux";

const Event = () => {

    const clickEvent = useSelector((state) => state.sports.arrayCheckbox)

    return (
        <>
            {clickEvent.map(([title, items], index) =>
                <div key={index}>
                    {items.map((item, index) => {
                        return <div key={index}>
                            <div className={classes.event}>
                                <div className={classes.eventTime}>
                                    <div>{item.data.time.substring(8, 10)}-{item.data.time.substring(5, 7)}</div>
                                    <div>{item.data.time.substring(11, 16)}</div>
                                </div>
                                <div className={classes.participants}>
                                    <div className={classes.participantsName}>{item.data.name}</div>
                                    <div className={classes.participantsLeague}>{item.data.tournament.name}</div>
                                </div>
                                <div className={classes.market}>
                                    <div className={classes.outcome}>
                                        <button>{item.group_markets.full_event | 0[6]}</button>
                                    </div>
                                    <div className={classes.outcome}>
                                        <button>4.20</button>
                                    </div>
                                    <div className={classes.outcome}>
                                        <button>5.10</button>
                                    </div>
                                    <div className={classes.other}>+{item.data.emc}</div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            )}
        </>
    );
};

export default Event;