import {useSelector} from "react-redux";
import Market from "../Market/Market";
import classes from "../Main/Main.module.css";
import dayjs from "dayjs";
import {useParams} from "react-router-dom";

const EventMarketsContainer = () => {

    const allEvents = useSelector((state) => state.sports.events);
    const {id} = useParams();
    console.log("useParams", useParams())

    const selectedEvent = allEvents.find((event) => {
        return event.id === id;
    });

    let market = selectedEvent?.markets?.["full_event|0"];
    const market2 = selectedEvent?.markets?.["first-half|0"];
    console.log("market", market);
    console.log("market2", market2);
    // if (market2) {
    //     market = [...market, market2];
    //     console.log(market)
    // }
    const allMarket = market?.concat(market2);

    return (selectedEvent && market && <div className={classes.main}>
            <>
                <div className={classes.marketHeader}>
                    <div className={classes.path}>
                        {selectedEvent.data.sport.name}
                        <span className={classes.separator}>
                        <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg"
                             className="breadcrumbs-icon_b4828"><path

                            d="M10.2451 0.19887L14.7908 4.51989C15.0697 4.78505 15.0697 5.21495 14.7908 5.48011L10.2451 9.80113C9.96616 10.0663 9.5139 10.0663 9.23495 9.80113C8.95601 9.53597 8.95601 9.10606 9.23495 8.8409L12.5613 5.67898L0.714285 5.67898C0.319796 5.67898 -4.69897e-07 5.37499 -4.37114e-07 5C-4.04331e-07 4.62501 0.319796 4.32102 0.714285 4.32102L12.5613 4.32102L9.23495 1.1591C8.95601 0.893937 8.95601 0.464029 9.23495 0.19887C9.5139 -0.066289 9.96616 -0.0662889 10.2451 0.19887Z"
                            fill="#142e3f"></path></svg>
                    </span>
                        {selectedEvent.data.country.name}
                        <span className={classes.separator}>
                        <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg"
                             className="breadcrumbs-icon_b4828"><path

                            d="M10.2451 0.19887L14.7908 4.51989C15.0697 4.78505 15.0697 5.21495 14.7908 5.48011L10.2451 9.80113C9.96616 10.0663 9.5139 10.0663 9.23495 9.80113C8.95601 9.53597 8.95601 9.10606 9.23495 8.8409L12.5613 5.67898L0.714285 5.67898C0.319796 5.67898 -4.69897e-07 5.37499 -4.37114e-07 5C-4.04331e-07 4.62501 0.319796 4.32102 0.714285 4.32102L12.5613 4.32102L9.23495 1.1591C8.95601 0.893937 8.95601 0.464029 9.23495 0.19887C9.5139 -0.066289 9.96616 -0.0662889 10.2451 0.19887Z"
                            fill="#142e3f"></path></svg>
                    </span>
                        {selectedEvent.data.tournament.name}
                    </div>
                    <button onClick={() => {
                        window.history.back()
                    }} className={classes.backButton}>Back
                    </button>
                </div>
                <div className={classes.participants}>
                    <div className={classes.sportName}>
                        {selectedEvent.data.sport.name}, {selectedEvent.data.country.name}, {selectedEvent.data.tournament.name}
                    </div>
                    <div className={classes.participantsName}>{selectedEvent.data.name}</div>
                    <div className={classes.timeStart}>
                        <div>{dayjs(selectedEvent.data.time).format("DD.MM.YYYY")}</div>
                        <div>{dayjs(selectedEvent.data.time).format("HH:mm")}</div>
                    </div>

                </div>
                {allMarket.map((market, index) => {
                    return (
                        <Market
                            key={index}
                            selectedEvent={selectedEvent}
                            market={market}
                        />
                    );
                })}
            </>
        </div>
    );
};

export default EventMarketsContainer;