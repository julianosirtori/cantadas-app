import Icon from 'components/atoms/Icon'
import Button from 'components/atoms/Button'
import Wrapper from 'components/atoms/Wrapper'

import styles from './Navigation.module.scss'

const Navigation = () => {
    return (
        <Wrapper element="section" className={styles.navigation}>
            <Button variant="icon" aria-label="previous">
                <Icon icon="prev" size={64} />
            </Button>
            <Button variant="icon" aria-label="reload">
                <Icon icon="reload" size={64} />
            </Button>
            <Button variant="icon" aria-label="next">
                <Icon icon="next" size={64} />
            </Button>
        </Wrapper>
    )
}

export default Navigation
