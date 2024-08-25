/// <reference types = "cypress-xpath" />
describe('DemoAutomation', () => {
    before(()=> {
        cy.visit('https://demo.automationtesting.in/');
        cy.on('uncaught:exception', (error, runnable) => {
            // if(error.message.includes('undefined'))
            return false;
        });
        cy.title().should('contain', 'Index');
        cy.get('#btn2').click();
    });

    it('User Registeration', () => {
        cy.get('ul.nav.navbar-nav').find('li').contains('Register').click();
        cy.get('#section h2').should('contain', 'Register');
        cy.get('input[placeholder="First Name"]').type('');
        cy.get('input[placeholder="Last Name"]').type('');
        cy.get('textarea').first().type("This is test result");
        cy.xpath('//input[@type="email"]').type("");
        cy.get('input[type="tel"]').type('1234567890');
        cy.get('input[value="Male"]').click();
        cy.get('.form-group:nth-of-type(6) input').check(['Cricket', 'Hockey']);
        cy.get('#Skills').select(['C']);
        cy.get('#countries').select(['C']);



    });

});