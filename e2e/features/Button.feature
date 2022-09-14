Feature:  Button Tests

  Scenario: Button - basic
    Given I am on the main page of the app
    When I click "Button" widget
    Then I see 'Default' description
    When I click the TopBar button