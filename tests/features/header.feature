Feature: header

@desktop
  Scenario: Verify logout button funcionality
    Given I am on the dashboard page
    When I click on profile photo
    And I click on logout option
    Then I should be redirected to the login page 