import React, {useEffect, useState} from 'react';
import Sidebar from "../Sidebar/Sidebar";
import classes from "./NavMenu.module.css";
import {useSelector} from "react-redux";

const betting = [
    {
        sport: 'Soccer',
        amount: 1500,
        countries: [
            {
                country: 'Turkey',
                amount: '10',
                leagues: [
                    {
                        league: 'Super Lig',
                        amount: '10'
                    },
                    {
                        league: 'TFF 1. Lig',
                        amount: '5'
                    },
                    {
                        league: 'TFF 1.',
                        amount: '3'
                    }
                ]
            },
            {
                country: 'England',
                amount: '17',
                leagues: [
                    {
                        league: 'Super Lig',
                        amount: '7'
                    },
                    {
                        league: 'TFF 1. Lig',
                        amount: '3'
                    },
                    {
                        league: 'TFF 1.',
                        amount: '1'
                    }
                ]
            },
            {
                country: 'Italy',
                amount: '5',
                leagues: [
                    {
                        league: 'Super Lig',
                        amount: '11'
                    },
                    {
                        league: 'TFF 1. Lig',
                        amount: '9'
                    },
                    {
                        league: '1. Lig',
                        amount: '5'
                    }
                ]
            },
        ]

    },
    {
        sport: 'Volleyball',
        amount: 945,
        countries: [
            {
                country: 'USA',
                amount: '10',
                leagues: [
                    {
                        league: 'Super Lig',
                        amount: '15'
                    },
                    {
                        league: 'TFF 1. Lig',
                        amount: '10'
                    },
                    {
                        league: 'TFF 1.',
                        amount: '1'
                    }
                ]
            },
            {
                country: 'Australia',
                amount: '7',
                leagues: [
                    {
                        league: 'Super Lig',
                        amount: '7'
                    },
                    {
                        league: 'TFF 1. Lig',
                        amount: '7'
                    },
                    {
                        league: 'TFF 1.',
                        amount: '3'
                    }
                ]
            },
            {
                country: 'Mexico',
                amount: '5',
                leagues: [
                    {
                        league: 'Super Lig',
                        amount: '5'
                    },
                    {
                        league: 'TFF 1. Lig',
                        amount: '3'
                    },
                    {
                        league: 'TFF 1.',
                        amount: '1'
                    }
                ]
            },
        ]
    },
    {
        sport: 'Handball',
        amount: 578,
        countries: [
            {
                country: 'Spain',
                amount: '10',
                leagues: [
                    {
                        league: 'Super Lig',
                        amount: '9'
                    },
                    {
                        league: 'TFF 1. Lig',
                        amount: '7'
                    },
                    {
                        league: 'TFF 1.',
                        amount: '1'
                    }
                ]
            },
            {
                country: 'Germany',
                amount: '7',
                leagues: [
                    {
                        league: 'Super Lig',
                        amount: '3'
                    },
                    {
                        league: 'TFF 1. Lig',
                        amount: '2'
                    },
                    {
                        league: 'TFF 1.',
                        amount: '1'
                    }
                ]
            },
            {
                country: 'Poland',
                amount: '5',
                leagues: [
                    {
                        league: 'Super Lig',
                        amount: '6'
                    },
                    {
                        league: 'TFF 1. Lig',
                        amount: '4'
                    },
                    {
                        league: 'TFF 1.',
                        amount: '3'
                    }
                ]
            },
        ]
    },
    {
        sport: 'Tennis',
        amount: 21,
        countries: [
            {
                country: 'International',
                amount: '10',
                leagues: [
                    {
                        league: 'Super Lig',
                        amount: '6'
                    },
                    {
                        league: 'TFF 1. Lig',
                        amount: '2'
                    },
                    {
                        league: 'TFF 1.',
                        amount: '1'
                    }
                ]
            },
            {
                country: 'France',
                amount: '8',
                leagues: [
                    {
                        league: 'Super Lig',
                        amount: '3'
                    },
                    {
                        league: 'TFF 1. Lig',
                        amount: '2'
                    },
                    {
                        league: 'TFF 1.',
                        amount: '1'
                    }
                ]
            },
            {
                country: 'Denmark',
                amount: '3',
                leagues: [
                    {
                        league: 'Super Lig',
                        amount: '15'
                    },
                    {
                        league: 'TFF 1. Lig',
                        amount: '11'
                    },
                    {
                        league: 'TFF 1.',
                        amount: '7'
                    }
                ]
            },
        ]
    },
    {
        sport: 'Ice Hockey',
        amount: 3,
        countries: [
            {
                country: 'Hungary',
                amount: '11',
                leagues: [
                    {
                        league: 'Super Lig',
                        amount: '9'
                    },
                    {
                        league: 'TFF 1. Lig',
                        amount: '5'
                    },
                    {
                        league: 'TFF 1.',
                        amount: '1'
                    }
                ]
            },
            {
                country: 'Norway',
                amount: '8',
                leagues: [
                    {
                        league: 'Super Lig',
                        amount: '6'
                    },
                    {
                        league: 'TFF 1. Lig',
                        amount: '3'
                    },
                    {
                        league: 'TFF 1.',
                        amount: '1'
                    }
                ]
            },
            {
                country: 'Canada',
                amount: '1',
                leagues: [
                    {
                        league: 'Super Lig',
                        amount: '14'
                    },
                    {
                        league: 'TFF 1. Lig',
                        amount: '12'
                    },
                    {
                        league: 'TFF 1.',
                        amount: '10'
                    }
                ]
            },
        ]
    }
];

const NavMenu = () => {

    const [eventBySport, setEventBySport] = useState([])
    const events = useSelector((state) => state.sports.events)

    useEffect(() => {

        if (events.length) {
            const eventsBySport = events.reduce((object, event) => {
                if (object[event.data.sport.name]) {
                    object[event.data.sport.name].push(event)
                    // console.log(events)
                } else {
                    object[event.data.sport.name] = [event]
                }
                // console.log(object)
                return object
            }, {})
            // console.log(eventsBySport)
            setEventBySport(Object.entries(eventsBySport))
        }

    }, [events])
    // console.log(eventBySport)

    return (
        <div className={classes.nav}>
            <div className={classes.navHead}>SPORT BETTING</div>
            {eventBySport?.map(([sport, eventsBySport], index) => {
                return <Sidebar sport={sport} amount={eventsBySport.length} key={index} eventsBySport={eventsBySport}/>
            })}
        </div>
    );
};

export default NavMenu;