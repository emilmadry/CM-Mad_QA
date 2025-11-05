import { expect } from '@playwright/test';

export class MainPage {
    constructor(page) {
        this.page = page;
        this.url = '/';
        this.title = 'Testowy Sklep – Strona główna';
        this.pageHeading = this.page.getByRole('heading', { name: 'Strona główna' });
    }
    async goto() {
        await this.page.goto(this.url);
    }
    async verifyTitle() {
        await expect(this.page).toHaveTitle(this.title);
    }

    async verifyHeading() {
        await expect(this.pageHeading).toBeVisible();
    }

    async getProductTitleById(productId) {
        return await this.page.getByTestId(`product-title-${productId}`).textContent();
    }

    async clickProductById(productId) {
        await this.page.getByTestId(`product-title-${productId}`).click();
    }
}

module.exports = { MainPage };