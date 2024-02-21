
describe('Dashboard page', { testIsolation: false }, () => {
    before(() => {
        cy.login();
    })

    it("navigates to contracts page and accepts contract", () => {
        cy.contains("Contracts").click();
        cy.get('[data-cy="contract-container"]').eq(0).should("exist")
        cy.get('[data-cy="contract-accept-button"]').eq(0).should("exist").click()
        cy.contains("True").should("exist")
       
    })

    


})