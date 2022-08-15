import { useSelector, useDispatch } from 'react-redux'
import { getPickUpLines, init } from 'store/features/pickUpLine/pickUpLineSlice'

import Wrapper from 'components/atoms/Wrapper'
import Text from 'components/atoms/Text'

import Navigation from './components/Navigation'
import styles from './PickUpLine.module.scss'
import { useEffect } from 'react'

type PickUpLineProps = {
    className?: string
}

const PickUpLine = ({ className, ...props }: PickUpLineProps) => {
    const pickUpLine = useSelector(getPickUpLines)
    const dispatch = useDispatch()

    // https://nextjs.org/docs/messages/react-hydration-error
    useEffect(() => {
        dispatch(init())
    }, [])

    return (
        <Wrapper
            element="main"
            className={`${styles.pickUpLine} ${className}`}
            {...props}
        >
            <Text
                element="h1"
                className={styles.pickUpLine__title}
            >{`"${pickUpLine}"`}</Text>

            <Navigation />
        </Wrapper>
    )
}

export default PickUpLine
