import classes from "./Main.module.css";
import {useSelector} from "react-redux";
import Events from "../Events/Events";

const Main = () => {
    const arrayCheckbox = useSelector((state) => state.sports.arrayCheckbox)
    return (
        <div className={classes.main}>
            {arrayCheckbox.map(([league, items], index) => {
                    return <div key={index}>
                        <div className={classes.mainHeader}>
                            {items[0]?.data?.sport.name} » {league}
                        </div>
                        <Events items={items}/>
                    </div>
                }
            )}
        </div>
    );
};

export default Main;