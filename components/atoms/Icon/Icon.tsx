import iconPath, { IconType } from './IconsSvg'
import styles from './Icon.module.scss'

export type IconProps = {
    size?: number | string
    icon: IconType
    color?: string
}

const Icon = ({ icon, color = 'white', ...props }: IconProps) => (
    <svg
        className={styles[`icon-size-64`]}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={iconPath[icon].viewBox}
        color={color}
        {...props}
    >
        {iconPath[icon].path}
    </svg>
)

export default Icon
