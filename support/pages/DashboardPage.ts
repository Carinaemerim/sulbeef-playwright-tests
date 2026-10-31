import { Page, Locator, expect } from "@playwright/test";

export class DashboardPage {
    readonly page: Page;
    readonly topBarTitle: Locator;
    readonly criarNovoPedidoButton: Locator;
    readonly lateralMenuPedidos: Locator;
    readonly lateralMenuNotasFiscais: Locator;
    readonly lateralMenuPlantas: Locator;
    readonly lateralMenuProdutos: Locator;
    readonly lateralMenuClientesFornecedores: Locator;
    readonly lateralMenuRelatorios: Locator;
    readonly lateralMenuUsuarios: Locator;
    readonly cardPedidos: Locator;
    readonly cardBaixarComissao: Locator;
    readonly cardAcessarWebmail: Locator;

    constructor(page: Page) {
        this.page = page;
        this.topBarTitle = page.getByTestId('top-bar-title');
        this.criarNovoPedidoButton = page.getByRole('link', { name: /criar novo pedido/i });
        this.lateralMenuPedidos = page.getByTestId('menu-list-orders');
        this.lateralMenuNotasFiscais = page.getByTestId('menu-list-receipts');
        this.lateralMenuPlantas = page.getByTestId('menu-list-plants');
        this.lateralMenuProdutos = page.getByTestId('menu-list-products');
        this.lateralMenuClientesFornecedores = page.getByTestId('menu-list-companies');
        this.lateralMenuRelatorios = page.getByTestId('menu-list-reports');
        this.lateralMenuUsuarios = page.getByTestId('menu-list-users');
        this.cardPedidos = page.locator('div.MuiPaper-root').filter({ has: page.getByRole('heading', { name: 'Pedidos' }) });
        this.cardBaixarComissao = page.locator('div.MuiPaper-root').filter({ has: page.getByRole('heading', { name: 'Baixar Comissão' }) });
        this.cardAcessarWebmail = page.locator('div.MuiPaper-root').filter({ has: page.getByRole('heading', { name: 'Acessar Webmail' }) });
    } 

    async goto() {
        await this.page.goto('https://pedidos.sulbeef.hc.dev.br/');
    }
}