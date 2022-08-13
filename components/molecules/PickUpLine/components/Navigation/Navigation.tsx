import Icon from 'components/atoms/Icon'
import Button from 'components/atoms/Button'
import Wrapper from 'components/atoms/Wrapper'

import styles from './Navigation.module.scss'

const Navigation = () => {
    return (
        <Wrapper element="section" className={styles.navigation}>
            <Button variant="icon" aria-label="previous">
                <Icon icon="prev" />
            </Button>
            <Button variant="icon" aria-label="reload">
                <Icon icon="reload" />
            </Button>
            <Button variant="icon" aria-label="next">
                <Icon icon="next" />
            </Button>
        </Wrapper>
    )
}

export default Navigation
