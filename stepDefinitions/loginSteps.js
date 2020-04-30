import LoginPage from '../pages/loginPage';
import { Given, When } from 'cucumber';
import config from '../testData/config.json'

Given(
    /^I am navigated to the zoro login screen$/,
      () => {
       LoginPage.openLink(config.loginURL)
    }
);

When(
  /^I enter valid login details from test data$/,
  () => {
    LoginPage.inputLoginDetails(config.valid.username, config.valid.password )
    LoginPage.submit()
}); 
When(
  /^I enter invalid login details from test data$/,
  () => {
    LoginPage.inputLoginDetails(config.invalid.username, config.invalid.password )
    LoginPage.submit()
}); 

When(
  /^I see validation error on page "([^"]*)"$/, 
  errorMessage => {
    browser.pause(2000)
    expect(LoginPage.loginError.getText()).toEqual(errorMessage)}
)



