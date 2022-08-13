import Background from 'components/atoms/Background'
import Header from 'components/organisms/Header'
import PickUpLine from 'components/molecules/PickUpLine'

import styles from './Home.module.scss'
import Wrapper from 'components/atoms/Wrapper'

const Home = () => {
    return (
        <Background className={styles.home}>
            <Header />
            <Wrapper className={styles.home__content}>
                <PickUpLine className={styles.home__content__pickUpLine} />
            </Wrapper>
        </Background>
    )
}

export default Home
