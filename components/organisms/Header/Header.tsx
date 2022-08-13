import Button from 'components/atoms/Button'
import Icon from 'components/atoms/Icon'

import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <Button variant="icon" aria-label="Volume">
                <Icon icon="volume" size={64} />
            </Button>
        </header>
    )
}

export default Header
