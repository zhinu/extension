Feature: Matching context
  In order to read relevant notice
  As a user
  I want to see notices that match my current tab context

  Scenario: Open Pixmania homepage
    When I open the url "https://pixmania.fr"
    Then I see the notification within 10 seconds
      And The first notice has text "Que choisir signale que de nombreux clients mécontents"
