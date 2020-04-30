import ShopPage from '../pages/shopPage'
import { When } from 'cucumber';
import Homepage from '../pages/homePage';

When(
    /^I am successfully logged in and can see "([^"]*)" link$/, myAccount => {
      expect(ShopPage.myAccountLabel.getText()).toEqual(myAccount)

    }
  )

  When(
    /^I click My Account>Logout takes me to the homepage with link to "([^"]*)"$/,
    logIn => {
      ShopPage.myAccountDropdown.click()
      ShopPage.logoutLink.click()
      expect(Homepage.loginLink.getText()).toEqual(logIn)
    } 
  )

  
