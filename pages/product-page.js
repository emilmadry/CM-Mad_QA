import { expect } from '@playwright/test';

export class ProductPage {
    constructor(page) {
        this.page = page;
        this.partialUrl = '/products'
        this.addToCartButton = this.page.getByRole('button', { name: 'Dodaj do koszyka' });
    }

    async goto(productId) {
        await this.page.goto(`${this.url}/p${productId}.html`)
    }

    async checkPageTitleById(productId) {
        await expect(this.page).toHaveURL(`${this.partialUrl}/p${productId}.html`)
    }

    async checkPageHeadingByProductName(productName) {
        await expect(this.page.getByRole('heading', { name: `${productName}` })).toBeVisible();
    }

    async addProductToCart() {
        await this.addToCartButton.click();
        await expect(this.page.getByText('Dodano do koszyka: ')).toBeVisible();

    }


}


module.exports = { ProductPage }