import ShopPage from '../pages/shop.page'
import { When } from 'cucumber';

When(
    /^I am successfully logged in and can see "([^"]*)" link$/, myAccount => {
      expect(ShopPage.myAccountLabel.getText()).toEqual(myAccount)
    }
  )

  
