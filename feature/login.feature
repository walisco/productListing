Feature: As a user I want to login in order to purchase items

    Background: Navigate to zoro login page
    Given I am navigated to the zoro login screen "www.zoro.co.uk/login"

    Scenario: login to zoro and successfully login
        When I enter login details "test150420@gmail.com", "9999999" and submit
        Then I am successfully logged in and can see "My Account" link
        # And I click My Account > Logout I am logged out and see "Log ins" link

    Scenario: login to zoro unsuccessful using invalid login details
        When I enter login details "ffdfffdfd@w.czzzzzz", "9999999" and submit
        Then I see validation error on page "Invalid email address or password"


# Things I dislike about the site
# 1. Login screen displays when logged in and accessing URL https://www.zoro.co.uk/login 
#  I expected application to know user logged in
# 2. 
# 