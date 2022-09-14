import { configureStore } from '@reduxjs/toolkit'

import sportsReducer from './eventsSlice'

export const store = configureStore({
    reducer: {
        sports: sportsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    })
})

