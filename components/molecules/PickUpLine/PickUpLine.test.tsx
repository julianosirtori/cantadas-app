import '@testing-library/jest-dom'
import { render, fireEvent, screen } from 'utils/test/helpers'
import PickUpLine from './PickUpLine'

describe('PickUpLine', () => {
    it('rendes a PickUpLine', () => {
        const { container } = render(<PickUpLine />)

        const pickUpLineTitle = container.querySelector('h1')
        expect(pickUpLineTitle).not.toBe(undefined)
        expect(pickUpLineTitle).not.toBe(null)
    })

    it('if click in button should generate another pick up line', () => {
        const { rerender } = render(<PickUpLine />)

        const textPickUpLineOld =
            screen.getByTestId('text-pickUpLine').innerHTML
        fireEvent.click(screen.getByTestId('button-generate'))
        rerender(<PickUpLine />)
        const textPickUpLineNew =
            screen.getByTestId('text-pickUpLine').innerHTML
        expect(textPickUpLineOld).not.toBe(textPickUpLineNew)
    })
})
