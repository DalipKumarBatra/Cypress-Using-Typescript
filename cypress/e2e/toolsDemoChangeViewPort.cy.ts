/// <reference types="cypress" />

describe('Verify Home Page with different View Port', () => {
  context( 'Run in viewport', () => {
    before('Open Url', () => {
      cy.viewport(550, 750);
      cy.log(Cypress.config('baseUrl'));
      cy.visit('https://demoqa.com/books');
      cy.on('uncaught:exception', (err, runnable) => {
        if(err.message.includes("Script error")) {
          return false;
        }
      });
      cy.title().should('contain', 'DEMOQA');
    });
    
    it('Verify Homepage', () => {
      cy.get('#searchBox').as('searchinput');
      cy.get('@searchinput').should('be.visible');
      cy.get('.btn.btn-primary:nth-of-type(1)').should('have.text', 'Login');
      cy.get('#app > header a').should('have.attr', 'href').and('include', 'https://demoqa.com');
      cy.fixture('booksName').then((books : Record<string, Book>) => {
        const bookArr = Object.values(books);
        cy.wrap(bookArr).each((book:Book, index) => {
          cy.log(book.name);
          cy.log(`Name of book ${book.name}`);
          cy.log(`Link of page ${book.link}`);
        });
      });
      cy.fixture('booksName').then((books : Record<string, Book>) => {
        const bookArr = Object.values(books);
        cy.get('.rt-tr-group span').each(($ele, index) => {
          if (bookArr[index]) {
            expect($ele.text()).to.equal(bookArr[index].name);
          } else {
            // Handle the case where the element exists, but there is no corresponding book in the array.
            cy.log(`No corresponding book for element at index ${index}`);
          }      
        });
      });
      cy.get('.pagination-bottom').as('bottomPagination');
      cy.get('@searchinput').type('JavaScript{enter}');
    });
  });

  context('Run test in Iphone xr', () => {
    before('Open Url', () => {
      cy.viewport('iphone-xr');
      cy.log(Cypress.config('baseUrl'));
      cy.visit('https://demoqa.com/books');
      cy.on('uncaught:exception', (err, runnable) => {
        if(err.message.includes("Script error")) {
          return false;
        }
      });
      cy.title().should('contain', 'DEMOQA');
    });
    
    it('Verify Homepage', () => {
      cy.get('#searchBox').as('searchinput');
      cy.get('@searchinput').should('be.visible');
      cy.get('.btn.btn-primary:nth-of-type(1)').should('have.text', 'Login');
      cy.get('#app > header a').should('have.attr', 'href').and('include', 'https://demoqa.com');
      cy.fixture('booksName').then((books : Record<string, Book>) => {
        const bookArr = Object.values(books);
        cy.wrap(bookArr).each((book:Book, index) => {
          cy.log(book.name);
          cy.log(`Name of book ${book.name}`);
          cy.log(`Link of page ${book.link}`);
        });
      });
      cy.fixture('booksName').then((books : Record<string, Book>) => {
        const bookArr = Object.values(books);
        cy.get('.rt-tr-group span').each(($ele, index) => {
          if (bookArr[index]) {
            expect($ele.text()).to.equal(bookArr[index].name);
          } else {
            // Handle the case where the element exists, but there is no corresponding book in the array.
            cy.log(`No corresponding book for element at index ${index}`);
          }      
        });
      });
      cy.get('.pagination-bottom').as('bottomPagination');
      cy.get('@searchinput').type('JavaScript{enter}');
    }); 
  });
});