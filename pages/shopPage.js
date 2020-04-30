import Page from './page'

class ShopPage extends Page {

    get myAccountLabel() {return $('[id="HeaderMenu.goToMyAccountButton"] label')}
    get logoutLink() { return $("[id='HeaderMenu.logout']")}
    get myAccountDropdown() {return $(".AccountIcon label")}
    

}
export default new ShopPage()