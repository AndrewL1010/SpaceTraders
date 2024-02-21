/// <reference types="cypress" />
/// <reference types="cypress-mailslurp" />

Cypress.Commands.add("register", () => {
  cy.visit('http://localhost:5001/')
  cy.contains("SpaceTraders").should("exist")
  cy.contains("username").should("exist")
  cy.contains("password").should("exist")
  cy.contains("Login").should("exist")
  cy.contains("Register").should("exist")
  cy.contains("Register").click();

  cy.get('[data-testid="test-username-field"]').should("exist");
  cy.get('[data-testid="test-password-field"]').should("exist");
  cy.get('[data-testid="test-email-field"]').should("exist");
  cy.get('[data-testid="test-username-field"]').type(Cypress.env("TEST_USERNAME"));
  cy.get('[data-testid="test-password-field"]').type(Cypress.env("TEST_PASSWORD"));
  cy.get('[data-testid="test-email-field"]').type(Cypress.env("MAIL_SLURP_EMAIL_ADDRESS"));
  cy.get('[data-testid="register-submit"]').should("exist");
  cy.get('[data-testid="register-submit"]').click();
  cy.get(`[data-cy="register-modal-title"]`).should('include.text', 'Pending Verification');
  cy.get(`[data-cy="register-modal-body"]`).should('include.text', 'Please check your email and verify your account');
  cy.get('[data-cy="login-message-modal-container"]').click("right");

  let url = "";

  cy.mailslurp().then((mail) => {
    mail.waitForLatestEmail(Cypress.env("MAIL_SLURP_INBOX_ID"), 120_000, true).then((email) => {
      mail.emailController.getEmailLinks({ emailId: email.id }).then((result) => {
        url = result.links[0];
      })
    })
  })


  cy.wait(3000).then(() => {
    cy.visit(url)
    cy.get(`[data-cy="register-modal-title"]`).should('include.text', 'Verification');
    cy.get(`[data-cy="register-modal-body"]`).should('include.text', 'Your account has been verified. You may now login');
    cy.get('[data-cy="login-message-modal-container"]').click("right");
  })

})

Cypress.Commands.add("login", () => {
  cy.visit('http://localhost:5001/')
  cy.contains("SpaceTraders").should("exist")
  cy.contains("username").should("exist")
  cy.contains("password").should("exist")
  cy.contains("Login").should("exist")
  cy.get('[data-testid="test-login-username"]').type(Cypress.env("TEST_USERNAME"));
  cy.get('[data-testid="test-login-password"]').type(Cypress.env("TEST_PASSWORD"));
  cy.contains("Login").click();
  cy.wait(2000).then(() => {
    cy.get("body").then(($body) => {
      if ($body.find('#dashboard-ship-title').length) {
        cy.contains("Your Ships").should("exist");
        cy.contains(Cypress.env("TEST_USERNAME").toUpperCase()).should("exist");
      }
      else {

        cy.register();
        cy.get('[data-testid="test-login-username"]').type(Cypress.env("TEST_USERNAME"));
        cy.get('[data-testid="test-login-password"]').type(Cypress.env("TEST_PASSWORD"));
        cy.contains("Login").click();
        cy.contains("Your Ships").should("exist");
        cy.contains(Cypress.env("TEST_USERNAME").toUpperCase()).should("exist");


      }

    })
  })




})

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      login(): Chainable<void>
      register(): Chainable<void>
    }
  }
}
export { }