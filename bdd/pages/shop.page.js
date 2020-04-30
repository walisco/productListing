import Page from './page'

class ShopPage extends Page {

    get myAccountLabel() {return $('[id="HeaderMenu.goToMyAccountButton"] label')}
    get logoutLink() { return $$("[id='HeaderMenu.logout']")[0]}
    get myAccountDropdown() {return $$(".AccountIcon label")[0]}

}
export default new ShopPage()