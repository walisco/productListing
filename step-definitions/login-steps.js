import LoginPage from '../pages/login.page';
import { Given, When } from 'cucumber';

Given(
    /^I am navigated to the zoro login screen "([^"]*)"$/,
      url => {
       LoginPage.openLink(url)
    }
);

When(
  /^I enter login details "([^"]*)", "([^"]*)" and submit$/,
  (username, password) => {
    LoginPage.username.setValue(username)
    LoginPage.password.setValue(password)
    LoginPage.submit()
}); 

When(
  /^I see validation error on page "([^"]*)"$/, 
  errorMessage => {
    expect(LoginPage.loginError.getText()).toEqual(errorMessage)}
)



