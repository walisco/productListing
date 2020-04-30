Feature: As a user I want to login in order to purchase items

    Background: Navigate to zoro login page
    Given I am navigated to the zoro login screen "www.zoro.co.uk/login"

    Scenario: login to zoro and successfully login
        When I enter login details "test150420@gmail.com", "9999999" and submit
        Then I am successfully logged in and can see "My Account" link
        And I click My Account>Logout takes me to the homepage with link to "Log in"

    Scenario: login to zoro unsuccessful using invalid login details
        When I enter login details "ffdfffdfd@w.czzzzzz", "9999999" and submit
        Then I see validation error on page "Invalid email address or password"


# Things I dislike about the site that can be improved
# 1. Login screen displays when logged in and accessing URL https://www.zoro.co.uk/login 
#  I expected application to know user logged in
# 2. The search for product "keyword", "SKU", etc does not predict what is typed in the field
# 3. On the registration screen, the field "Telephone" does not seem to be validating 
#     for valid phone number pattern e.g entering strings "+", "(" only does not 
#      trigger validation after clicking away