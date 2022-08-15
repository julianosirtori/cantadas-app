import '@testing-library/jest-dom'
import data from 'assets/data.json'

import { rootStore } from './index'

describe('Store redux state tests', () => {
    it('Should initially set pickUpLines to object', () => {
        const state = rootStore.getState()
        expect(state.pickUpLine).toEqual({
            pickUpLines: [...data.pickUpLines],
            currentIndex: 0,
            soundUrl: 'sounds/uh.mp3',
        })
    })
})
