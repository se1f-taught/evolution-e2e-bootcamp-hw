@evolution<3
Feature: Bootcamp E2E

    Background: Home page setup
        Given I open the page
        Then I refresh the page to close the promo banner

    Scenario: Search bar
        Given I entry in the search bar the word "Windows"
        When I click the search
        Then I check that at least one item appears

    Scenario: Internet shop logo button
        Given I open Today's Best Deals tab
        When I click on the Internet shop logo top right corner
        Then I check that the main page opened