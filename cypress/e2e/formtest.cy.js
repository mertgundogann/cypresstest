describe('Login Form Test', () => {
  it('should fill in the login form and submit', () => {

    cy.visit('http://localhost:3000/login'); 

 
    cy.get('input[type="email"]').type('test@example.com');
    cy.get('input[type="password"]').type('Password123');
    cy.get('input[type="checkbox"]').check();


    cy.get('button[type="submit"]').click();

    
    cy.url().should('include', '/success'); 
  });
});
