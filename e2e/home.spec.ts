import { test, expect } from '@playwright/test'
import data from 'assets/data.json'

const hasMatchPickUpLine = (pickUpLine: string | null) =>
    data.pickUpLines.includes(pickUpLine?.trim().replaceAll('"', '') || '')

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/')
})

test.describe('Cantadas', () => {
    test('should have a pick-up-line when open Cantadas', async ({ page }) => {
        const getPickUpLine = page.locator('data-testid=text-pickUpLine')

        const pickUpLineText = await getPickUpLine.textContent()

        const hasMatch = hasMatchPickUpLine(pickUpLineText)

        expect(true).toBe(hasMatch)
    })

    test('should generate a new pick-up-line when click on generate Button', async ({
        page,
    }) => {
        const oldPickupLine = await page
            .locator('data-testid=text-pickUpLine')
            .textContent()

        await page.locator('data-testid=button-generate').click()

        const newPickupLine = await page
            .locator('data-testid=text-pickUpLine')
            .textContent()

        const hasMatch = hasMatchPickUpLine(newPickupLine)
        expect(true).toBe(hasMatch)

        expect(oldPickupLine).not.toBe(newPickupLine)
    })

    test('should copy pick-up-line when click on them', async ({ page }) => {
        const pickupLine = await page.locator('data-testid=text-pickUpLine')
        await pickupLine.click()
        await expect(page.locator('.Toastify__toast-body')).toHaveText(
            'copiado'
        )
    })
})
