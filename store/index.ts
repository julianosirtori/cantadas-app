import { configureStore } from '@reduxjs/toolkit'
import pickUpLineReduce from './features/pickUpLine/pickUpLineSlice'
import { createWrapper } from 'next-redux-wrapper'

export const rootStore = configureStore({
    reducer: {
        pickUpLine: pickUpLineReduce,
    },
    devTools: true,
})

const makeStore = () => rootStore

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>

export const wrapper = createWrapper<AppStore>(makeStore)
