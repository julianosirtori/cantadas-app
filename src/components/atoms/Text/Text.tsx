import { ReactNode } from 'react'

type TextProps = {
    [key: string]: any
    children: ReactNode
    element?: keyof JSX.IntrinsicElements
}

const Text = ({ children, element, ...props }: TextProps) => {
    const Element = element || 'span'
    return <Element {...props}>{children}</Element>
}

export default Text
