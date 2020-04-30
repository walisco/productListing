import Page from './page'

class LoginPage extends Page {
    get username() { return $('[data-e2e="emailAddress"]') }
    get password() { return $('[name="password"]') }
    get loginBtn() { return $('[data-e2e="login"]') }
    get loginError() { return $$(".log-error")[1] }
    
    openLink(url) {
        super.open(url)
    }

    submit() {
        this.loginBtn.click()
    }

    inputLoginDetails(username, password) {
        this.username.setValue(username)
        this.password.setValue(password)
        
    }
    // inputLoginPassword(password) {
    //     this.password.setValue(password)
        
    // }

}

export default new LoginPage()