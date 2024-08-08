import Page from '../Page';

class LoginPage extends Page {
  elements = {
    //Here you place the locators you are going to use for testing.
    /*signInWithGoogleButton: () => cy.get("button[type='button']"),*/
  };

  //Here you place some functions, e.g.: clicks to certain components 
  /*clickSignIn() {
    super.dblClickElement(this.elements.signInButton());
  }*/

}

export default new LoginPage();