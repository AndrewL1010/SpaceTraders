describe('Dashboard page', { testIsolation: false }, () => {
    before(() => {
        cy.login();
    })
    beforeEach(() => {
        cy.wait(1500);
    })

    it("navigates to market from ship dashboard waypoints and buys/sells 1 food", async () => {
        cy.get(`[data-cy="ship-status-${Cypress.env("TEST_USERNAME").toUpperCase()}-1"]`).should("exist").click();
        cy.get('[data-testid="planet-description-modal"]').should("exist");
        cy.contains("Marketplace").should("exist");
        cy.contains("Marketplace").click();


        cy.get('[data-cy="player-id"]').should("exist").invoke("text").then((symbol) => {
            const firstShip = `${symbol}-1`;
            cy.contains("Imports Information").should("exist");
            cy.contains("Available Items In Shop").should("exist");
            cy.contains("FOOD").should("exist");
            cy.contains("FOOD").click();

            
            cy.get(`[data-cy="item-amount-input"]`).should("exist");
            cy.get(`[data-cy="market-ship-${firstShip}"]`).should("exist");
            cy.get(`[data-cy="confirm-purchase-button"]`).should("exist");
            cy.get(`[data-cy="item-amount-input"]`).type("1");
            cy.get(`[data-cy="market-ship-${firstShip}"]`).click();
            cy.get(`[data-cy="confirm-purchase-button"]`).click();
            cy.contains("You have successfully purchased 1 FOOD")




            cy.get('[data-cy="market-modal-message"]').click("right");
            const shipInventoryItemId = `${firstShip}-FOOD`;
            cy.get(`[data-cy="${shipInventoryItemId}"]`).should("exist");
            cy.get(`[data-cy="${shipInventoryItemId}"]`).click();

            cy.get(`[data-cy="sell-modal-title"]`).should("exist");
            cy.get(`[data-cy="sell-modal-input"]`).should("exist");
            cy.contains("Galactic Cuisine").should("exist");
            cy.get(`[data-cy="sell-modal-input"]`).clear().type("1");
            cy.get(`[data-cy="sell-modal-confirm-button"]`).click();

            cy.get(`[data-cy="message-modal-title"]`).should('include.text','Success')
            cy.get(`[data-cy="message-modal-body"]`).should('include.text','You have successfully sold 1 Galactic Cuisine')



        });


    })





})