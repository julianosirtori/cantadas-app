import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Icon from './Icon'

describe('Icon', () => {
    it('rendes a Icon', () => {
        const { container } = render(<Icon size={64} icon={'menu'} />)

        expect(container.querySelector('svg')).toBeTruthy()
    })

    it('should render correct icon', () => {
        render(<Icon size={64} icon={'reload'} />)

        const element = screen.getByTestId('icon-menu')

        expect(element).toBeTruthy()
    })
})
