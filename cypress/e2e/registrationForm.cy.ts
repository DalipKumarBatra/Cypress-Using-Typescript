describe('Form fields retrival Training', () => {
  beforeEach(() => {
    cy.visit('https://www.vivatechsolutions.io/contact');
    cy.setSessionStorage("token", "abc");

    // Exception to handle redirection
    cy.on("uncaught:exception", (err, runnable) => {
      console.log("error", err);
      return false;
      // if(err.message.includes("undefined"))
      // {
      //   expect(err.message).to.include("undefined");
      //   return false;
      // }
    });
  });

  it('Complete registration form', () => {
    cy.title().should('eq', "Contact us | VivaTech Solutions | IT Recruitment Canada");
    cy.get('input[name="first-name"]').type('jalan');
    cy.get('input[name="last-name"]').type('Deva');
    cy.get('input[name="email"]').type('jala@gmail.com');
    cy.get('textarea[id^="textarea_comp"]').type("I want to make an enquiry");
    cy.get('button[data-testid="buttonElement"]').click();
    cy.get('#CAPTCHA_DIALOG_ROOT_COMP button[data-testid="close-btn"]').click();
  });
});