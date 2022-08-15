import { useDispatch } from 'react-redux'
import { prev, reload, next } from 'store/features/pickUpLine/pickUpLineSlice'

import Icon from 'components/atoms/Icon'
import Button from 'components/atoms/Button'
import Wrapper from 'components/atoms/Wrapper'

import styles from './Navigation.module.scss'

const Navigation = () => {
    const dispatch = useDispatch()

    return (
        <Wrapper element="section" className={styles.navigation}>
            <Button
                onClick={() => dispatch(prev())}
                variant="icon"
                aria-label="previous"
            >
                <Icon icon="prev" />
            </Button>
            <Button
                onClick={() => dispatch(reload())}
                variant="icon"
                aria-label="reload"
            >
                <Icon icon="reload" />
            </Button>
            <Button
                onClick={() => dispatch(next())}
                variant="icon"
                aria-label="next"
            >
                <Icon icon="next" />
            </Button>
        </Wrapper>
    )
}

export default Navigation
