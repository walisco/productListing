import Page from './page'

class Homepage extends Page {

    get loginLink() { return $('[id="HeaderMenu.showLoginDialogButton"] span')}

}
export default new Homepage()