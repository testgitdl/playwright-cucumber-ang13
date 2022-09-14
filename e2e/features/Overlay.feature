Feature:  Message Tests
  Background:
    Given I am on the main page of the app
    When I click "Overlay" widget
    Then I see 'Dialog' description
    When I click the TopBar button

  Scenario: Dialog
    When show button from dialog is clicked
    Then dialog window contains 'Dialog' header title
    And dialog window has text in the body
    When dialog is closed
    Then dialog window is no longer visible

