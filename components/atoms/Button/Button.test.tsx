import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
    it('rendes a Button', () => {
        render(
            <Button>
                <span>It&apos;s Me! Mario</span>
            </Button>
        )

        const container = screen.getByRole('button')

        expect(container.hasChildNodes()).toBe(true)
        expect(container.children.length).toBe(1)
    })
})
