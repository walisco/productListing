import ShopPage from '../pages/shop.page'
import { When } from 'cucumber';

When(
    /^I am successfully logged in and can see "([^"]*)" link$/, myAccount => {
        browser.pause(3000)
        // ShopPage.myAccountLabel.click()
      expect(ShopPage.myAccountLabel.getText()).toEqual(myAccount)
    }
  )

  
