import iconPath, { IconType } from './IconsSvg'
import styles from './Icon.module.scss'

export type IconProps = {
    size?: 16 | 32 | 56 | 64
    icon: IconType
    color?: string
}

const Icon = ({ icon, color = 'white', size = 64, ...props }: IconProps) => (
    <svg
        className={styles[`icon-size-${size}px`]}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={iconPath[icon].viewBox}
        color={color}
        {...props}
    >
        {iconPath[icon].path}
    </svg>
)

export default Icon
