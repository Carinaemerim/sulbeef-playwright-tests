Feature: dashboard

  Scenario: Verify dashboard page default elements
    Given I am on the dashboard page
    Then I should see the dashboard header
    And I should see Criar Novo Pedido button
    And I should see the lateral menu Pedidos
    And I should see the lateral menu Notas Fiscais
    And I should see the lateral menu Plantas
    And I should see the lateral menu Produtos
    And I should see the lateral menu Clientes e Fornecedores
    And I should see the lateral menu Relatorios
    And I should see the lateral menu Usuarios
    And I should see the Pedidos card
    And I should see the Baixar Comissao card
    And I should see the Acessar Webmail card

    # Scenario: Verify funcionality of Hide lateral menu button
    #     Given I am on the dashboard page
    #     When I click on the Hide lateral menu button
    #     Then I should see the lateral menu hidden
    #     When I click on the Show lateral menu button
    #     Then I should see the lateral menu visible

  #Scenario: Verify funcionality of Criar Novo Pedido button
    #Given I am on the dashboard page
    #When I click on the Criar Novo Pedido button
    #Then I should be redirected to the Criar Novo Pedido page

