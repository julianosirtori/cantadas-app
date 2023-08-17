import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Background from './Background'

describe('Background', () => {
    it('rendes a Background', () => {
        render(
            <Background>
                <span>It&apos;s Me! Mario</span>
            </Background>
        )

        const container = screen.getByRole('main')

        expect(container.hasChildNodes()).toBe(true)
        expect(container.children.length).toBe(1)
    })
})
