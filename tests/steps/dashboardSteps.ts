import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../../support/fixtures/baseTest.js';

const { Given, When, Then } = createBdd(test);

Given(
  'I am on the dashboard page',
  async ({ loginPage, dashboardPage, page }) => {
    await loginPage.performSecureLogin();
    await page.getByText('Carregando...').waitFor({ state: 'hidden' });
    await expect(dashboardPage.topBarTitle).toBeVisible();
  },
);

Then('I should see the dashboard header', async ({ dashboardPage }) => {
  const expectedHeaderText = 'Portal de Pedido';

  await expect(dashboardPage.topBarTitle).toHaveText(expectedHeaderText);
});

Then('I should see Criar Novo Pedido button', async ({ dashboardPage }) => {
  await expect(dashboardPage.criarNovoPedidoButton).toBeVisible();
});

Then('I should see the lateral menu Pedidos', async ({ dashboardPage }) => {
  await expect(dashboardPage.lateralMenuPedidos).toBeVisible();
});

Then(
  'I should see the lateral menu Notas Fiscais',
  async ({ dashboardPage }) => {
    await expect(dashboardPage.lateralMenuNotasFiscais).toBeVisible();
  },
);

Then('I should see the lateral menu Plantas', async ({ dashboardPage }) => {
  await expect(dashboardPage.lateralMenuPlantas).toBeVisible();
});

Then('I should see the lateral menu Produtos', async ({ dashboardPage }) => {
  await expect(dashboardPage.lateralMenuProdutos).toBeVisible();
});

Then(
  'I should see the lateral menu Clientes e Fornecedores',
  async ({ dashboardPage }) => {
    await expect(dashboardPage.lateralMenuClientesFornecedores).toBeVisible();
  },
);

Then('I should see the lateral menu Relatorios', async ({ dashboardPage }) => {
  await expect(dashboardPage.lateralMenuRelatorios).toBeVisible();
});

Then('I should see the lateral menu Usuarios', async ({ dashboardPage }) => {
  await expect(dashboardPage.lateralMenuPedidos).toBeVisible();
});

Then('I should see the Pedidos card', async ({ dashboardPage }) => {
  await expect(dashboardPage.cardPedidos).toBeVisible();
});

Then('I should see the Baixar Comissao card', async ({ dashboardPage }) => {
  await expect(dashboardPage.cardBaixarComissao).toBeVisible();
});

Then('I should see the Acessar Webmail card', async ({ dashboardPage }) => {
  await expect(dashboardPage.cardAcessarWebmail).toBeVisible();
});

Then('I should see Hamburger Menu icon with its itens hidden', async ({ dashboardPage }) => {
    await expect(dashboardPage.lateralMenuContainer).toBeHidden();
  },
);
