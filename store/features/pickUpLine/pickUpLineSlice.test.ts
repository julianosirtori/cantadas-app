import '@testing-library/jest-dom'

import data from 'assets/data.json'
import { rootStore as store } from '../../index'
import * as pickUpLineSlice from './pickUpLineSlice'

describe('PickUpLine redux state tests', () => {
    beforeEach(() => {
        jest.spyOn(global.Math, 'floor').mockReturnValue(5)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('Should init pickUpLine with a random index', async () => {
        store.dispatch(pickUpLineSlice.init())

        const state = store.getState().pickUpLine

        expect(state.currentIndex).toBe(5)
    })

    it('Should increment currentIndex if call next', async () => {
        store.dispatch(pickUpLineSlice.init())
        store.dispatch(pickUpLineSlice.next())

        const state = store.getState().pickUpLine

        expect(state.currentIndex).toBe(6)
    })

    it('Should set currentIndex zero if currentIndex is last index', async () => {
        jest.spyOn(global.Math, 'floor').mockReturnValue(
            data.pickUpLines.length
        )
        store.dispatch(pickUpLineSlice.init())
        store.dispatch(pickUpLineSlice.next())

        const state = store.getState().pickUpLine

        expect(state.currentIndex).toBe(0)
    })

    it('Should decrement currentIndex if call prev', async () => {
        store.dispatch(pickUpLineSlice.init())
        store.dispatch(pickUpLineSlice.prev())

        const currentIndex = store.getState().pickUpLine.currentIndex

        expect(currentIndex).toBe(4)
    })

    it('Should set currentIndex if currentIndex is zero', async () => {
        jest.spyOn(global.Math, 'floor').mockReturnValue(0)
        store.dispatch(pickUpLineSlice.init())
        store.dispatch(pickUpLineSlice.prev())

        const currentIndex = store.getState().pickUpLine.currentIndex

        expect(currentIndex).toBe(data.pickUpLines.length - 1)
    })
})
