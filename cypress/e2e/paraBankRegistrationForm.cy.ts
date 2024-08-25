describe('Para bank app Form fields retrival Training', () => {
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    cy.setSessionStorage("token", "abc");

    // Exception to handle redirection
    cy.on("uncaught:exception", (err, runnable) => {
      // console.log("error", err);
      // return false;
      if(err.message.includes("undefined"))
      {
        expect(err.message).to.include("undefined");
        return false;
      }
    });
  });
 
  it('Complete registration form', () => {
    cy.title().should('eq', "Contact us | VivaTech Solutions | IT Recruitment Canada");
    cy.get('input[name="first-name"]').type('jalan');
    
    cy.get('#CAPTCHA_DIALOG_ROOT_COMP button[data-testid="close-btn"]').click();
  });
});