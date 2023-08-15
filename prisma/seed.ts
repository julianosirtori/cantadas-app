import data from '../assets/data.json'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.pickUpLine.createMany({
        data: data.pickUpLines.map((pickUpLine) => ({
            line: pickUpLine,
        })),
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
