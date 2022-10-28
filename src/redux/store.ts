import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "../component/Theme/slice"

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
})