import Background from 'components/atoms/Background'
import Header from 'components/organisms/Header'
import PickUpLine from 'components/molecules/PickUpLine'

import styles from './Home.module.scss'

const Home = () => {
    return (
        <Background className={styles.home}>
            <Header />
            <PickUpLine className={styles.home__pickUpLine} />
        </Background>
    )
}

export default Home
