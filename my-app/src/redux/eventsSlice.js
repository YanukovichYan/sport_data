import {createSlice} from '@reduxjs/toolkit'
import {parseGroupMarkets} from '../parseStringCoeff/parseStringCoeff'

const initialState = {
    events: [],
    arrayCheckbox: [],
    cart: []
}

export const eventsSlice = createSlice({
    name: 'sports',
    initialState,
    reducers: {
        addEvents: (state, {payload}) => {
            const events = payload.map((event) => {
                return {
                    ...event,
                    markets: parseGroupMarkets(event.group_markets),
                };
            });
            return { ...state, events };
        },
        addLeagues: (state, action) => {
            state.arrayCheckbox = [...action.payload]
        },
        addItemCart: (state, action) => {
            state.cart.push(action.payload)
        },
        deleteItemCart: (state, action) => {
            state.cart = action.payload
        }
    },
})


export const {addEvents, addLeagues, addItemCart, deleteItemCart} = eventsSlice.actions

export default eventsSlice.reducer