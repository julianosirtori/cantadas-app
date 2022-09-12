import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import useSound from 'use-sound'

import {
    getSoundUrl,
    getPickUpLines,
} from 'store/features/pickUpLine/pickUpLineSlice'
import Button from 'components/atoms/Button'
import Icon from 'components/atoms/Icon'

import styles from './Header.module.scss'

const Header = () => {
    const [soundActive, setSoundActive] = useState(true)
    const soundUrl = useSelector(getSoundUrl)
    const pickUpLine = useSelector(getPickUpLines)

    const [play, { stop }] = useSound(soundUrl)

    useEffect(() => {
        if (!soundActive) {
            return
        }
        play()
        return () => {
            stop()
        }
    }, [play, pickUpLine])

    useEffect(() => {
        if (!soundActive) {
            stop()
        } else {
            play()
        }
    }, [soundActive])

    return (
        <header className={styles.header}>
            <Button
                variant="icon"
                aria-label="Volume"
                onClick={() =>
                    setSoundActive((prevSoundActive: boolean) => {
                        return !prevSoundActive
                    })
                }
            >
                <Icon icon={soundActive ? 'volume' : 'no_volume'} size={64} />
            </Button>
        </header>
    )
}

export default Header
