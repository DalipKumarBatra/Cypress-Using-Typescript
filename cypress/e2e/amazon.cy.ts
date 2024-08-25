describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io');
    cy.on("exec", (err, runnable) => {
      //
      
    });

    cy.request('POST', "URL", {name:'test'}).then((response) => {
      expect(response.body).to.have.property('name', 'jane');
    });

    cy.get('#id').each();
    // Exception to handle redirection
    cy.on("uncaught:exception", (err, runnable) => {
      console.log("error", err);
      if(err.message.includes("undefined"))
      {
        expect(err.message).to.include("undefined");
        return false;
      }
    });
  });

  it('Find length of li', () => {
    const arr_na: [string]=['ar'];
    const str: Array<string> = ["sad"];
    const gt: string[] = ["sdas"];
    const titleElement = cy.get('h1').first();
    const title: string = "Kitchen Sink";
    titleElement.should('include.text', title);
    cy.get('.home-list').find('li').should('have.length',114);
  });

  it('Use each to traverse li ', ()=> {
    cy.get('.home-list ul').find('li').each(($ele, index)=> {
      const value = $ele.text();
      if(value == 'root')
        cy.wrap($ele).click();
    });
  });
})