Feature:  Message Tests
  Background:
    Given I am on the main page of the app
    When I click "Message" widget
    Then I see 'Toast' description
    When I click the TopBar button
  @runMe
  Scenario: Message usage1 - success
    When "success" button from "first section" infobubble is clicked
    Then "Success Message" with "Message sent" body is displayed
  @runMe
  Scenario: Message usage1 - info
    When "info" button from "first section" infobubble is clicked
    Then "Info Message" with "PrimeNG rocks" body is displayed

  Scenario: Message usage1 - warning
    When "warning" button from "first section" infobubble is clicked
    Then "Warn Message" with "There are unsaved changes" body is displayed

  Scenario: Message usage1 - error
    When "error" button from "first section" infobubble is clicked
    Then "Error Message" with "Validation failed" body is displayed

  Scenario: Message usage2 - success
    When "success" button from "second section" infobubble is clicked
    Then "Success Message" with "Message sent" body is displayed

  Scenario: Message usage2 - info
    When "info" button from "second section" infobubble is clicked
    Then "Info Message" with "PrimeNG rocks" body is displayed

  Scenario: Message usage2 - warning
    When "warning" button from "second section" infobubble is clicked
    Then "Warn Message" with "There are unsaved changes" body is displayed

  Scenario: Message usage2 - error
    When "error" button from "second section" infobubble is clicked
    Then "Error Message" with "Validation failed" body is displayed
