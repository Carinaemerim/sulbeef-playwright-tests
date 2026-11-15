import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly usernameErrorMessage: Locator;
  readonly passwordErrorMessage: Locator;
  readonly loginWithMicrosoftButton: Locator;
  readonly showPasswordCheckbox: Locator;
  readonly forgotPasswordLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder('Enter username');
    this.passwordInput = page.getByPlaceholder('Enter password');
    this.loginButton = page.getByRole('button', { name: 'Sign in' });
    this.errorMessage = page.getByText(/Invalid input/i).first();
    this.usernameErrorMessage = page.getByText(/missing username/i);
    this.passwordErrorMessage = page.getByText(/missing password/i);
    this.loginWithMicrosoftButton = page.getByRole('link', { name: 'Continue with Microsoft' });
    this.showPasswordCheckbox = page.getByRole('checkbox', { name: 'Show password' });
    this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot your password?' });
  }

  async goto() {
    await this.page.goto('https://pedidos.sulbeef.hc.dev.br/');
  }

  async fillLogin(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async clickSubmitButton() {
    await this.loginButton.click();
  }

  async performSecureLogin() {
    await this.goto();
    const username = process.env.SULBEEF_USER || '';
    const password = process.env.SULBEEF_PASS || '';

    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.clickSubmitButton();
  }

  async clickOnShowPasswordCheckbox() {
    await this.showPasswordCheckbox.click();
  }

  async clickOnForgotPasswordLink() {
    await this.forgotPasswordLink.click();
  }

  async clickOnLoginWithMicrosoftButton() {
    await this.loginWithMicrosoftButton.click();
  }
}
