import { useSelector, useDispatch } from 'react-redux'
import { getPickUpLines, init } from 'store/features/pickUpLine/pickUpLineSlice'
import copy from 'copy-to-clipboard'
import { toast } from 'react-toastify'

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

    const copyText = () => {
        copy(pickUpLine)
        toast('copiado')
    }

    return (
        <Wrapper
            element="main"
            className={`${styles.pickUpLine} ${className}`}
            {...props}
        >
            <Text
                onClick={() => copyText()}
                element="h1"
                className={styles.pickUpLine__title}
            >{`"${pickUpLine}"`}</Text>

            <Navigation />
        </Wrapper>
    )
}

export default PickUpLine
