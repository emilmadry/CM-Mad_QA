export class Login {
    constructor(page) {
        this.page = page;
        this.loginField = this.page.getByTestId('login-username');
        this.passwordField = this.page.getByTestId('login-password')
        this.loginButton = this.page.getByRole('button', { name: 'Zaloguj' })
        this.logoutButton = this.page.getByRole('button', { name: 'Wyloguj' })
        this.welcomeMessage = this.page.getByTestId('welcome-msg')
    }

    async fillLoginField(username) {
        await this.loginField.fill(username);
    }

    async fillPasswordField(password) {
        await this.passwordField.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async clickLogout() {
        await this.logoutButton.click();
    }

    async logInUserWithCredentials(login, password) {
        await this.fillLoginField(login);
        await this.fillPasswordField(password);
        await this.clickLogin();
    }

    async returnWelcomeMessage() {
        return await this.welcomeMessage.textContent();
    }

}

module.exports = { Login }