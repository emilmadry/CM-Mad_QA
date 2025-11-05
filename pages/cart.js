import { expect } from "@playwright/test";

export class Cart {
    constructor(page) {
        this.page = page;
        this.openCartButton = this.page.getByTestId('cart-button');
        this.cartModal = this.page.locator('#cart-panel');
        this.cartList = this.page.locator('#cart-list');
        this.cartItem = this.page.locator('.cart-item');
        this.buyButton = this.page.getByRole('button', { name: 'Kup' });
        this.succesToast = this.page.locator('.toast-container').getByText('sukces');
    }

    async expandCart() {
        await this.openCartButton.click();
        await expect(this.cartModal).toBeVisible();
    }

    async checkIfItemIsInTheCart(item) {
        expect(await this.cartList.textContent()).toContain(item);
    }

    async buyItemsFromTheCart() {
        await this.buyButton.click();
        await expect(this.succesToast).toBeVisible();
    }
}

module.exports = { Cart }