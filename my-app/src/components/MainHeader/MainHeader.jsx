import React, {useEffect, useState} from 'react';

import classes from "./MainHeader.module.css";
import {useSelector} from "react-redux";

const MainHeader = () => {

    const [name, setName] = useState('');

    const clickEvent = useSelector((state) => state.sports.arrayCheckbox)

    useEffect(() => {
        if (clickEvent.length) {
            // console.log(clickEvent[0][1][0].data.sport.name)
            // console.log(clickEvent[0][1][0].data.tournament.name)
            setName(clickEvent[0][1][0].data)
            // setName(clickEvent[0][1][0].data.tournament.name)
        }
    }, [clickEvent])


    // console.log('name', name)
    // console.log("clickEvent", clickEvent)

    return (
        <div className={classes.mainHeader}>
            {name?.sport?.name || "LIVE BETTING"} » {name?.tournament?.name}
            {/*{clickEvent && clickEvent?.length && clickEvent[0][1][0]?.data?.sport?.name} {clickEvent[0][1][0]?.data?.tournament?.name}*/}
        </div>
    );
};

export default MainHeader;