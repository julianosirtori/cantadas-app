import HomePage from 'components/pages/Home'
import { THomeProps } from 'components/pages/Home/Home'
import { PrismaClient } from '@prisma/client'

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const pickUpLine = await prisma.pickUpLine.findFirst()

  return {
    props: { pickUpLine },
    revalidate: 60
  }
}

const Home = (props: THomeProps) => {
  return <HomePage {...props} />
}

export default Home
