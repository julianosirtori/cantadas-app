import type { NextPage } from 'next'


import Background from 'components/Background'
import Header from 'components/Header/Header'
import PickUpLine from 'components/PickUpLine'

const Home: NextPage = () => {
  return (
    <Background>
      <Header/>
      <PickUpLine/>
    </Background>
   
  )
}

export default Home
