import { Page, Locator } from '@playwright/test';

export class HeaderPage {
  readonly page: Page;
  readonly profilePhoto: Locator;
  readonly logoutOption: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profilePhoto = page.getByRole('button', { name: 'Abrir opções' });
    this.logoutOption = page.getByRole('menuitem', { name: 'Sair' });
  }

  async clickOnProfilePhoto() {
    await this.profilePhoto.click();
  }

  async clickOnLogoutOption() {
    await this.logoutOption.click();
  }

}