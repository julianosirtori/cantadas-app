import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Wrapper from './Wrapper'

describe('Wrapper', () => {
    it('rendes a Wrapper', () => {
        render(<Wrapper>Winter is coming!</Wrapper>)

        const container = screen.getByText('Winter is coming!')

        expect(container).toBeTruthy()
    })

    it('should render a element type of Wrapper', () => {
        const element = 'h1'
        const { container } = render(
            <Wrapper element={element}>Winter is coming!</Wrapper>
        )

        const textElement = container.querySelector(element)

        expect(textElement).toBeTruthy()
    })
})
