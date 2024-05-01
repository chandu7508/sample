describe('Sign Up Page', () => {
    beforeEach(() => {
        cy.visit('signup.html');
    });

    it('should display sign up form', () => {
        cy.get('h1').should('contain', 'Sign Up');
        cy.get('form#signup-form').should('exist');
        cy.get('input#username').should('exist');
        cy.get('input#password').should('exist');
        cy.get('button[type="submit"]').should('exist');
    });

    it('should sign up with valid credentials', () => {
        cy.get('input#username').type('testuser');
        cy.get('input#password').type('password123');
        cy.get('button[type="submit"]').click();
        cy.get('#signup-message').should('contain', 'Sign up successful');
    });

    it('should not sign up with invalid credentials', () => {
        cy.get('input#username').type('testuser');
        cy.get('button[type="submit"]').click();
        cy.get('#signup-message').should('contain', 'Please enter a password');
    });
});

describe('Sign In Page', () => {
    beforeEach(() => {
        cy.visit('signin.html');
    });

    it('should display sign in form', () => {
        cy.get('h1').should('contain', 'Sign In');
        cy.get('form#signin-form').should('exist');
        cy.get('input#username').should('exist');
        cy.get('input#password').should('exist');
        cy.get('button[type="submit"]').should('exist');
    });

    it('should sign in with valid credentials', () => {
        cy.get('input#username').type('testuser');
        cy.get('input#password').type('password123');
        cy.get('button[type="submit"]').click();
        cy.get('#signin-message').should('contain', 'Sign in successful');
    });

    it('should not sign in with invalid credentials', () => {
        cy.get('input#username').type('testuser');
        cy.get('button[type="submit"]').click();
        cy.get('#signin-message').should('contain', 'Invalid username or password');
    });
});
