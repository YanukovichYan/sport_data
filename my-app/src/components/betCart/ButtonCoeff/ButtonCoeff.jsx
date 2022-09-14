import React from 'react';
import classes from "./ButtonCoeff.module.css";
import {Coefficient} from "../../main/Coefficient/Coefficient";

const ButtonCoeff = ({item}) => {

    const market = item.markets["full_event|0"].find((market) => {
            return market.type === "1x2";
        }) ||
        item.markets["full_event|0"].find((market) => {
            return market.type === "12";
        });
    return (<>
            {market && Object.keys(market.outcomes).map((outcomeItem, index) => {
                const outcome = market.outcomes[outcomeItem];
                return (
                    <div key={index} className={classes.outcome}>
                        <Coefficient
                            value={outcome.odd}
                            type={outcome.type}
                            outcomeId={outcome.id}
                            item={item}
                            market={market}
                            outcome={outcome}
                        />
                    </div>
                )
            })
            }
        </>
    );
}
export default ButtonCoeff;
