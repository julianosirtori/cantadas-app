import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Text from './Text'

describe('Text', () => {
    it('rendes a Text', () => {
        render(<Text>Winter is coming!</Text>)

        const container = screen.getByText('Winter is coming!')

        expect(container).toBeTruthy()
    })

    it('should render a element type of Text', () => {
        const element = 'h1'
        const { container } = render(
            <Text element={element}>Winter is coming!</Text>
        )

        const textElement = container.querySelector(element)

        expect(textElement).toBeTruthy()
    })
})
