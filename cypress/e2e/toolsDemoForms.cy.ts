/// <reference types="cypress" />

describe('Form fields retrival Training', () => {
  beforeEach('Open Url', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.on('uncaught:exception', (err, runnable) => {
      if(err.message.includes("Script error")) {
        return false;
      }
    });
    cy.title().should('contain', 'DEMOQA');
  });
  
  it('Fill student registration form', () => {
    cy.fixture('studentInformation').then((info) => {
      cy.get('#firstName').type(info.firstName);
      cy.get('#lastName').type(info.lastName);
      cy.get('#userEmail').type(info.email);
      // cy.get(`input[name="gender"][value="${info.gender}"]`).check({force:true});
      cy.get('.custom-control-label').contains(info.gender).click();
      cy.get('input[placeholder="Mobile Number"]').type(info.mobile);
      // cy.get('.form-control.react-datepicker-ignore-onclickoutside').should('be.visible').click();
      // cy.get('[class$="--018"]').click();
      cy.get('#hobbiesWrapper .custom-control-label').each(($ele)=> {
        if($ele.text().includes('Sports') || $ele.text().includes('Music')) {
          cy.wrap($ele).click();
        }
      });
      cy.get('#uploadPicture').selectFile('D:/\DrivingLicense.jpeg');
      cy.get('#currentAddress').type('text area text');
      cy.get('div').contains('Select State').click().type('Rajasthan{enter}');
      cy.get('div').contains('Select City').click().type('Jaipur{enter}');
      cy.get('#userForm').submit();      
    });    
  });

  // it('Use Intercept', () => {
  //   cy.intercept('https://code.jquery.com/jquery-3.5.0.min.js').as('loadQueryFile');
  //   cy.wait('@loadQueryFile').its('response.statusCode').should('eq', 200);
  // });
});