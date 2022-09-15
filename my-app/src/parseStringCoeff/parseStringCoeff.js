import React from 'react';

const parseStr = (str) => {
    const chunks = str.split("|");
    // console.log("chunks", chunks)
    const outcomes = chunks[7] ? chunks[7].split("!") : {};
    const id = chunks[0];
    const market_type = chunks[1];
    const is_active = chunks[3];
    const market_iid = chunks[10];

    // console.log('outcomes', outcomes);

    const outcome = outcomes.reduce((acc, out) => {
        const outcomes_chunks = out.split("~");
        // console.log("outcomes_chunks", outcomes_chunks)
        const obj = {
            id: outcomes_chunks[0],
            group_field: outcomes_chunks[1],
            iid: outcomes_chunks[7],
            type: outcomes_chunks[1],
            odd: outcomes_chunks[2].slice(0, -1),
            original_odds: outcomes_chunks[2],
            market_id: chunks[0],
            market_title: "",
            parameter: "",
        };
        // console.log('obj', obj)

        const type = outcomes_chunks[3]
            ? `${outcomes_chunks[1]}/${outcomes_chunks[3]}`
            : outcomes_chunks[1];


        acc[type] = obj;
        return acc;
    }, {});
    // console.log("outcome", outcome)
    return {
        id,
        iid: market_iid,
        type: market_type,
        is_active,
        outcomes: outcome,
    };
};

export const parseGroupMarkets = (obj) => {
    const marketsObj = Object.keys(obj).reduce((acc, key) => {
        const arr = obj[key].map((marketString) => parseStr(marketString));
        acc[key] = arr;
        return acc;
    }, {});
    // console.log(marketsObj)
    // console.log(obj)
    return marketsObj;
}