// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("setSessionStorage", (token, value) => {
    cy.window({log:false}).then((window) => {
        window.sessionStorage.setItem(token, value);
        cy.log(window.localStorage.getItem(token));
        cy.clearAllSessionStorage();
    });

    const log = Cypress.log({
        name : 'setSessionStorage',
        displayName: 'SessionKey',
        message: `${token}, ${value}`,
        consoleProps: () => {
            return {
                Key: token,
                Value: value,
                'Session Storage': window.sessionStorage,
            }
        },
    });
});

Cypress.Commands.add('login', () => {
    cy.get('input[name="username"]').type("testuser");
    cy.get('input[name="password"]').type("password");
    cy.get('input[type="submit"]').click();
})

Cypress.Commands.add('Validate page', (str) => {
    cy.xpath('//input[@id="userEmail"]').type('testemail');
    cy.xpath('//form[@id="userForm"]/button[@type="submit"]').click();    
});

Cypress.Commands.add('SetAuthTokenInSession', (key, value ) => {
    const [key1, value1]   = [key, value];
});