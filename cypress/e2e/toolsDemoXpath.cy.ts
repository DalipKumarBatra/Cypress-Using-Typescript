/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('Xpath Css selector', () => {
  beforeEach('Add URL', ()=>{
    // cy.visit(Cypress.config('baseUrl'));
    // cy.viewport('samsung-s10');
    // cy.title().contains('DEMOQA');
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.title().should('contain', 'DEMOQA');
  });

  it('fill student form with xpath', ()=> {
    cy.fixture('studentInformation').then((studentInfo) => {
      cy.xpath('//input[@placeholder="First Name"]').type('studentInfo.name');
    });
  });
});