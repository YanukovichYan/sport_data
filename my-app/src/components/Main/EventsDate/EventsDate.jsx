import React from 'react';
import classes from "./EventsDate.module.css";

const EventsDate = ({date}) => {
    return (
        <div>
                <div className={classes.mainEvents}>
                    <div className={classes.eventsTitle}>{date}</div>
                    <div className={classes.eventsTitle}>EVENT</div>
                    {/*<div className={classes.eventsTitle}>1</div>*/}
                    {/*<div className={classes.eventsTile}>X</div>*/}
                    {/*<div className={classes.eventsTitle}>2</div>*/}
                    <div className={classes.eventsTitle}>other</div>
                </div>
        </div>
    );
};

export default EventsDate;