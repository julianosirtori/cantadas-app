import HomePage from '@/components/pages/Home'
import { PrismaClient } from '@prisma/client'
import { notFound } from 'next/navigation'

const Home = async () => {
  const prisma = new PrismaClient()
  const pickUpLine = await prisma.pickUpLine.findFirst()

  if (!pickUpLine) {
    notFound();
  }

  return <HomePage pickUpLine={pickUpLine} />
}

export default Home