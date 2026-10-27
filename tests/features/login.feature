@login
Feature: Login

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I fill in the login form with valid company credentials
    And I click on the login button
    Then I should be redirected to the dashboard page
    
  Scenario: Unsuccessful login with invalid credentials
    Given I am on the login page
    When I fill in the username "invaliduser" and password "invalidpassword"
    And I click on the login button
    Then I should see an error message

  Scenario: Unsuccessful login with invalid username
    Given I am on the login page
    When I fill in the login form with an invalid username but a valid password
    And I click on the login button
    Then I should see an error message

  Scenario: Unsuccessful login with invalid password
    Given I am on the login page
    When I fill in the login form with a valid username but an invalid password
    And I click on the login button
    Then I should see an error message

  Scenario: Unsuccessful login with empty username and password
    Given I am on the login page
    When I leave the username and password fields empty
    And I click on the login button
    Then I should see an error message under the username field
    And I should see an error message under the password field
    
  Scenario: Unsuccessful login with empty username
    Given I am on the login page
    When I leave the username field empty but fill in a valid password
    And I click on the login button
    Then I should see an error message under the username field

  Scenario: Unsuccessful login with empty password
    Given I am on the login page
    When I fill in a valid username but leave the password field empty
    And I click on the login button
    Then I should see an error message under the password field