// @ts-check
import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main-page';
import { ProductPage } from '../pages/product-page';
import { Cart } from '../pages/cart';

test('full e2e path', async ({ page }) => {
    const mainPage = new MainPage(page);
    const productPage = new ProductPage(page);
    const cart = new Cart(page);

    await mainPage.goto();
    await mainPage.verifyTitle();
    await mainPage.verifyHeading();
    expect(await mainPage.getProductTitleById('3')).toEqual('Peleryna Maskująca');
    await mainPage.clickProductById('3');

    await productPage.checkPageTitleById('3');
    await productPage.checkPageHeadingByProductName('Peleryna Maskująca');
    await productPage.addProductToCart();


    await cart.expandCart();
    await cart.checkIfItemIsInTheCart('Peleryna Maskująca');
    await cart.buyItemsFromTheCart();
});

