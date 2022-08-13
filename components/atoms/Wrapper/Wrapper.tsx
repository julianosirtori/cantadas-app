import { ReactNode } from 'react'

type WrapperProps = {
    [key: string]: any
    children?: ReactNode
    element?: keyof JSX.IntrinsicElements
}

const Wrapper = ({ children, element, ...props }: WrapperProps) => {
    const Element = element || 'div'
    return <Element {...props}>{children}</Element>
}

export default Wrapper
