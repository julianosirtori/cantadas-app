import React from 'react'

import styles from './Button.module.scss'
interface ButtonProps extends React.BaseHTMLAttributes<HTMLButtonElement> {
    variant?: 'icon'
    [key: string]: any
}

const Button = ({
    children,
    type = 'button',
    variant,
    ...props
}: ButtonProps) => {
    return (
        <button type={type} className={styles[`button-${variant}`]} {...props}>
            {children}
        </button>
    )
}

export default Button
