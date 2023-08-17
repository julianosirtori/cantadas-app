import Background from '@/components/atoms/Background'
import Header from '@/components/organisms/Header'
import PickUpLineComponent from '@/components/molecules/PickUpLine'

import styles from './Home.module.scss'
import Wrapper from '@/components/atoms/Wrapper'
import { PickUpLine } from '@prisma/client'

export type THomeProps = {
  pickUpLine: PickUpLine
}

const Home = ({ pickUpLine }: THomeProps) => {
  return (
    <Background className={styles.home}>
      <Header />
      <Wrapper className={styles.home__content}>
        <PickUpLineComponent pickUpLineModel={pickUpLine} className={styles.home__content__pickUpLine} />
      </Wrapper>
    </Background>
  )
}

export default Home
