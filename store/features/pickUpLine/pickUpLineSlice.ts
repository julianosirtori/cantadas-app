import { createSlice } from '@reduxjs/toolkit'
import getRandomArrayIndex from 'utils/getRandomArrayIndex'

import data from 'assets/data.json'
import sounds from 'public/sounds/sounds.json'
import { HYDRATE } from 'next-redux-wrapper'
import { AppState } from 'store'

const getRandomSoundUrl = (sounds: string[]) => {
    const songIndex = getRandomArrayIndex(sounds)
    return `/sounds/${sounds[songIndex]}`
}
export interface PickUpLineState {
    pickUpLines: string[]
    currentIndex: number
    soundUrl: string
}

const initialState: PickUpLineState = {
    pickUpLines: [...data.pickUpLines],
    currentIndex: 0,
    soundUrl: 'sounds/uh.mp3',
}

export const pickUpLineSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        init: (state: PickUpLineState) => {
            state.currentIndex = getRandomArrayIndex(state.pickUpLines)
            state.soundUrl = getRandomSoundUrl(sounds.sounds)
        },
        next: (state: PickUpLineState) => {
            state.soundUrl = getRandomSoundUrl(sounds.sounds)
            if (state.currentIndex >= state.pickUpLines.length) {
                state.currentIndex = 0
                return
            }
            state.currentIndex += 1
        },
        reload: (state: PickUpLineState) => {
            state.soundUrl = getRandomSoundUrl(sounds.sounds)
            state.currentIndex = getRandomArrayIndex(state.pickUpLines)
        },
        prev: (state: PickUpLineState) => {
            state.soundUrl = getRandomSoundUrl(sounds.sounds)
            if (state.currentIndex <= 0) {
                state.currentIndex = state.pickUpLines.length - 1
                return
            }
            state.currentIndex -= 1
        },
    },
    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.auth,
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { next, reload, prev, init } = pickUpLineSlice.actions

export const getPickUpLines = (state: AppState) => {
    return state.pickUpLine.pickUpLines[state.pickUpLine.currentIndex]
}

export const getCurrentIndex = (state: AppState) => {
    return state.pickUpLine.currentIndex
}

export const getSoundUrl = (state: AppState) => {
    return state.pickUpLine.soundUrl
}

export default pickUpLineSlice.reducer
