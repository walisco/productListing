import Page from './page'

class LoginPage extends Page {
    get username() { return $('[data-e2e="emailAddress"]') }
    get password() { return $('[data-e2e="password"]') }
    get loginBtn() { return $('[data-e2e="login"]') }
    get loginError() { return $$(".log-error")[1] }
    
    openLink(url) {
        super.open(url)
    }

    submit() {
        this.loginBtn.click()
    }

}

export default new LoginPage()