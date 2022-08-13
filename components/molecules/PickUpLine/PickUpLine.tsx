import Wrapper from 'components/atoms/Wrapper'
import Text from 'components/atoms/Text'

import Navigation from './components/Navigation'
import styles from './PickUpLine.module.scss'

type PickUpLineProps = {
    className?: string
}

const PickUpLine = ({ className, ...props }: PickUpLineProps) => {
    return (
        <Wrapper
            element="main"
            className={`${styles.pickUpLine} ${className}`}
            {...props}
        >
            <Text element="h1" className={styles.pickUpLine__title}>
                “Se nada dura para sempre, quer ser o meu nada?”
            </Text>
            <Navigation />
        </Wrapper>
    )
}

export default PickUpLine
