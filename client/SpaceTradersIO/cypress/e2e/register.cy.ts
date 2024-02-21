import "../support/index"


const generateUsername = () => {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';

  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}

describe('Register page', () => {
  it('logs in with test account and creates it if it does not exist', () => {
    cy.login()
  })


  it('visits page', () => {
    cy.visit('http://localhost:5001/')
    cy.contains("SpaceTraders").should("exist")
    cy.contains("username").should("exist")
    cy.contains("password").should("exist")
    cy.contains("Login").should("exist")
    cy.contains("Register").should("exist")
  })


  it('Registers for an account', () => {
    cy.visit('http://localhost:5001/');
    cy.contains("Register").should("exist");
    cy.contains("Register").click();
    cy.get('[data-testid="test-username-field"]').should("exist");
    cy.get('[data-testid="test-email-field"]').should("exist");
    const randomUsername = generateUsername();
    Cypress.env("USERNAME", randomUsername);
    cy.get('[data-testid="test-username-field"]').type(randomUsername);
    cy.get('[data-testid="test-email-field"]').type("omegawww123@gmail.com");
    cy.get('[data-testid="test-password-field"]').type("password");
    cy.get('[data-testid="register-submit"]').should("exist");
    cy.get('[data-testid="register-submit"]').click();

    cy.get(`[data-cy="register-modal-title"]`).should('include.text', 'Pending Verification');
    cy.get(`[data-cy="register-modal-body"]`).should('include.text', 'Please check your email and verify your account');
    cy.get('[data-cy="login-message-modal-container"]').click("right");

  })




  it('should fail when registering an account with a taken username', () => {
    cy.visit('http://localhost:5001/')
    cy.contains("Register").should("exist")
    cy.contains("Register").click()
    cy.get('[data-testid="test-username-field"]').should("exist")
    cy.get('[data-testid="test-email-field"]').should("exist")
    cy.get('[data-testid="test-username-field"]').type(Cypress.env("USERNAME"))
    cy.get('[data-testid="test-email-field"]').type("omegawww123@gmail.com")
    cy.get('[data-testid="register-submit"]').should("exist")
    cy.get('[data-testid="register-submit"]').click()
    cy.contains("Username already taken").should("exist")
  })


})