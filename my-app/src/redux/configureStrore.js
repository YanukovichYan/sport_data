import { configureStore } from '@reduxjs/toolkit'

import sportsReducer from './eventsSlice'

export const store = configureStore({
    reducer: {
        sports: sportsReducer,
    },
})

