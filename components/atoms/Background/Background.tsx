import { ReactNode } from 'react'

import styles from './Background.module.scss'

type BackgroundProps = {
    color?: string
    children: ReactNode
    className?: string
}

const Background = ({ color, children, className }: BackgroundProps) => {
    return (
        <main className={`${styles.background} ${className}`}>{children}</main>
    )
}

export default Background
