import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    events: [],
    arrayCheckbox: [],
    titles: []
}

export const eventsSlice = createSlice({
    name: 'sports',
    initialState,
    reducers: {
        addEvents: (state, action) => {
           state.events = action.payload
        },
        addLeagues:(state, action) => {
            console.log(action.payload)
            state.arrayCheckbox = [...action.payload]
        },
    },
})


export const { addEvents, addLeagues, removeLeagues, addTitle } = eventsSlice.actions

export default eventsSlice.reducer