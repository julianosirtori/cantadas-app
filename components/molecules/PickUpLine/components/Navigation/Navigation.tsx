import { useDispatch } from 'react-redux'
import { reload } from 'store/features/pickUpLine/pickUpLineSlice'

import Text from 'components/atoms/Text'
import Button from 'components/atoms/Button'
import Wrapper from 'components/atoms/Wrapper'

import styles from './Navigation.module.scss'

const Navigation = () => {
    const dispatch = useDispatch()

    return (
        <Wrapper element="section" className={styles.navigation}>
            <Button
                onClick={() => dispatch(reload())}
                variant="outline"
                aria-label="reload"
            >
                <Text>Gerar</Text>
            </Button>
        </Wrapper>
    )
}

export default Navigation
