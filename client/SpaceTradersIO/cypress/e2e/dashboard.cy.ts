
describe('Dashboard page', { testIsolation: false }, () => {
    before(() => {
        cy.login();
    })
    beforeEach(() => {
        cy.wait(5000);
    })
    // it("clicks all page links and loads all pages", () => {
    //     cy.contains("Dashboard").should("exist");
    //     cy.contains("Systems").should("exist");
    //     cy.contains("Contracts").should("exist");

    //     cy.contains("Dashboard").click();
    //     cy.contains("Your Ships").should("exist");
    //     cy.contains("Frigate").should("exist");
    //     cy.contains("Probe").should("exist");

    //     cy.contains("Systems").click();
    //     cy.get('[data-cy="system-item"]').eq(0).should("exist");
    //     cy.get('[data-cy="system-item"]').eq(1).should("exist");
    //     cy.get('[data-cy="system-item"]').eq(2).should("exist");



    //     cy.contains("Contracts").click();
    //     cy.contains("Objectives").should("exist")
    //     cy.contains("PROCUREMENT").should("exist")
    //     cy.contains("Deadline").should("exist")

    // })

    // it("clicks docked ships planets and displays information", () => {
    //     cy.contains("Dashboard").click();
    //     cy.get(`[data-cy="ship-status-${Cypress.env("TEST_USERNAME").toUpperCase()}-1"]`).should("exist");
    //     cy.get(`[data-cy="ship-status-${Cypress.env("TEST_USERNAME").toUpperCase()}-1"]`).click();
    //     cy.get('[data-cy="planet-description-modal"]').should("exist");
    //     cy.get('[data-cy="planet-description-modal"]').click("right");
    //     cy.get(`[data-cy="ship-status-${Cypress.env("TEST_USERNAME").toUpperCase()}-2"]`).should("exist");
    //     cy.get(`[data-cy="ship-status-${Cypress.env("TEST_USERNAME").toUpperCase()}-2"]`).click();
    //     cy.get('[data-cy="planet-description-modal"]').should("exist");
    //     cy.get('[data-cy="planet-description-modal"]').click("right");
    // })

    // it("undock the ship when clicking undock buttons", () => {
    //     cy.get(`[data-cy="undock-button-${Cypress.env("TEST_USERNAME").toUpperCase()}-1"]`).should("exist");
    //     cy.get(`[data-cy="undock-button-${Cypress.env("TEST_USERNAME").toUpperCase()}-1"]`).click();

    //     cy.get(`[data-cy="dock-button-${Cypress.env("TEST_USERNAME").toUpperCase()}-1"]`).should("exist");
    //     cy.get(`[data-cy="dock-button-${Cypress.env("TEST_USERNAME").toUpperCase()}-1"]`).click();

    //     cy.get(`[data-cy="undock-button-${Cypress.env("TEST_USERNAME").toUpperCase()}-1"]`).should("exist");

    // })


    // it("fails to refuel if capacity is already full", () => {
    //     cy.get(`[data-cy="refuel-button-${Cypress.env("TEST_USERNAME").toUpperCase()}-1"]`).should("exist").click();
    //     cy.contains("Error").should("exist");
    //     cy.contains("Your fuel tank is already full").should("exist");
    //     cy.get('[data-testid="dashboard-modal-message-container"]').click("right");

    // })


    // it("navigates to market from ship dashboard and load market items", () => {
    //     cy.get(`[data-cy="ship-status-${Cypress.env("TEST_USERNAME").toUpperCase()}-1"]`).should("exist");
    //     cy.get(`[data-cy="ship-status-${Cypress.env("TEST_USERNAME").toUpperCase()}-1"]`).click();
    //     cy.get('[data-cy="planet-description-modal"]').should("exist");
    //     cy.contains("Marketplace").should("exist");
    //     cy.contains("Marketplace").click();

    //     cy.contains("Imports Information").should("exist");
    //     cy.contains("Available Items In Shop").should("exist");
    //     cy.contains("FOOD").should("exist");
    // })

    // it("Travels to valid fuelstation and refuels", () => {
    //     cy.contains("Dashboard").should("exist");
    //     cy.contains("Dashboard").click();
    //     cy.get(`[data-cy="ship-current-system-${Cypress.env("TEST_USERNAME").toUpperCase()}-1"]`).should("exist");
    //     cy.get(`[data-cy="ship-current-system-${Cypress.env("TEST_USERNAME").toUpperCase()}-1"]`).invoke('text').then((currentSystemText) => {
    //         cy.get(`[data-cy="coordinates-${Cypress.env("TEST_USERNAME").toUpperCase()}-1"]`).invoke(`text`).then((ShipCoordinateText) => {

    //             cy.get(`[data-cy="undock-button-${Cypress.env("TEST_USERNAME").toUpperCase()}-1"]`).should("exist");
    //             cy.get(`[data-cy="undock-button-${Cypress.env("TEST_USERNAME").toUpperCase()}-1"]`).click();
    //             cy.visit(`${Cypress.env("FRONT_END_URL")}Waypoints/${currentSystemText}`);
    //             cy.contains(`Waypoints In System ${currentSystemText}`).should("exist");
    //             const coordinatesArray = ShipCoordinateText.split(',');
    //             const shipX = parseInt(coordinatesArray[0], 10);
    //             const shipY = parseInt(coordinatesArray[1], 10);

    //             const minDistanceRefuel = { x: 20000, y: 20000, distance: 40000, waypointSymbol: "nonexistent" };
    //             cy.get(`[data-cy="waypoint-container-FUEL_STATION"]`).each((waypoint) => {

    //                 const waypointSymbol = waypoint.find("#waypointSymbol").text();
    //                 const xString = waypoint.find("#waypointX").text();
    //                 const xValue = parseInt(xString);
    //                 const yString = waypoint.find("#waypointY").text();
    //                 const yValue = parseInt(yString);
    //                 const currentXDistance = Math.abs(shipX - xValue);
    //                 const currentYDistance = Math.abs(shipY - yValue);
    //                 const currentDistance = currentXDistance + currentYDistance;
    //                 if (currentDistance < minDistanceRefuel.distance) {
    //                     minDistanceRefuel.x = xValue;
    //                     minDistanceRefuel.y = yValue;
    //                     minDistanceRefuel.distance = currentDistance
    //                     minDistanceRefuel.waypointSymbol = waypointSymbol
    //                 }


    //             }).then(() => {

    //                 cy.get(`[data-testid="waypoint-container-FUEL_STATION-${minDistanceRefuel.waypointSymbol}"]`).should("exist").within(() => {
    //                     cy.get(`[data-cy="travel-button-FUEL_STATION"]`).should("exist")
    //                     cy.get(`[data-cy="travel-button-FUEL_STATION"]`).click();
    //                 });


    //                 cy.get('[data-cy="travel-mode"]').should("exist").click();
    //                 cy.contains(`${Cypress.env("TEST_USERNAME").toUpperCase()}-1`).should("exist").click();
    //                 cy.contains("Travel Now").should("exist").click();
    //                 cy.contains("Ship Currently In Transit").should("exist");
    //                 cy.get('[data-cy="modal-body"]').invoke("text").then((text) => {
    //                     const match = text.match(/(\d+) minutes (\d+) seconds/);
    //                     const minutes = parseInt(match[1], 10);
    //                     const seconds = parseInt(match[2], 10);
    //                     const totalTimeInMilliseconds = ((minutes * 60 + seconds) * 1000) + 3000;
    //                     cy.wait(totalTimeInMilliseconds).then(() => {
    //                         cy.get('[data-cy="travel-modal-container"]').should("exist").click("right");
    //                         cy.contains("Dashboard").should("exist");
    //                         cy.contains("Dashboard").click();
    //                         cy.get(`[data-cy="dock-button-${Cypress.env("TEST_USERNAME").toUpperCase()}-1"]`).should("exist");
    //                         cy.get(`[data-cy="dock-button-${Cypress.env("TEST_USERNAME").toUpperCase()}-1"]`).click();
    //                         cy.get(`[data-cy="undock-button-${Cypress.env("TEST_USERNAME").toUpperCase()}-1"]`).should("exist");
    //                         cy.get(`[data-cy="refuel-button-${Cypress.env("TEST_USERNAME").toUpperCase()}-1"]`).should("exist");
    //                         cy.get(`[data-cy="refuel-button-${Cypress.env("TEST_USERNAME").toUpperCase()}-1"]`).click();
    //                         cy.contains("Refuel Successful").should("exist");
    //                         cy.get('[data-testid="dashboard-modal-message-container"]').click("right");

    //                     })
    //                 });
    //             })

    //         })

    //     });
    // })


    it("Travels to an asteroid field and extracts minerals", () => {
        cy.contains("Dashboard").should("exist");
        cy.contains("Dashboard").click();
        cy.get(`[data-cy="ship-current-system-${Cypress.env("TEST_USERNAME").toUpperCase()}-1"]`).should("exist");
        cy.get(`[data-cy="ship-current-system-${Cypress.env("TEST_USERNAME").toUpperCase()}-1"]`).invoke('text').then((currentSystemText) => {
            cy.get(`[data-cy="coordinates-${Cypress.env("TEST_USERNAME").toUpperCase()}-1"]`).invoke(`text`).then((ShipCoordinateText) => {

                cy.get(`[data-cy="undock-button-${Cypress.env("TEST_USERNAME").toUpperCase()}-1"]`).should("exist");
                cy.get(`[data-cy="undock-button-${Cypress.env("TEST_USERNAME").toUpperCase()}-1"]`).click();
                cy.get(`[data-cy="dock-button-${Cypress.env("TEST_USERNAME").toUpperCase()}-1"]`).should("exist");
                cy.visit(`${Cypress.env("FRONT_END_URL")}Waypoints/${currentSystemText}`);
                cy.contains(`Waypoints In System ${currentSystemText}`).should("exist");

                const coordinatesArray = ShipCoordinateText.split(',');
                const shipX = parseInt(coordinatesArray[0], 10);
                const shipY = parseInt(coordinatesArray[1], 10);
                const minDistanceRefuel = { x: 20000, y: 20000, distance: 40000, waypointSymbol: "nonexistent", type: "nonexistent" };

                cy.get(`[data-cy="waypoint-container-ASTEROID"]`).each((waypoint) => {

                    const waypointSymbol = waypoint.find("#waypointSymbol").text();
                    const xString = waypoint.find("#waypointX").text();
                    const xValue = parseInt(xString);
                    const yString = waypoint.find("#waypointY").text();
                    const yValue = parseInt(yString);
                    const currentXDistance = Math.abs(shipX - xValue);
                    const currentYDistance = Math.abs(shipY - yValue);
                    const currentDistance = currentXDistance + currentYDistance;
                    if (currentDistance < minDistanceRefuel.distance) {
                        minDistanceRefuel.x = xValue;
                        minDistanceRefuel.y = yValue;
                        minDistanceRefuel.distance = currentDistance;
                        minDistanceRefuel.waypointSymbol = waypointSymbol;
                        minDistanceRefuel.type = "ASTEROID";
                    }
                }).then(() => {
                    cy.get(`[data-cy="waypoint-container-ENGINEERED_ASTEROID"]`).each((waypoint) => {

                        const waypointSymbol = waypoint.find("#waypointSymbol").text();
                        const xString = waypoint.find("#waypointX").text();
                        const xValue = parseInt(xString);
                        const yString = waypoint.find("#waypointY").text();
                        const yValue = parseInt(yString);
                        const currentXDistance = Math.abs(shipX - xValue);
                        const currentYDistance = Math.abs(shipY - yValue);
                        const currentDistance = currentXDistance + currentYDistance;
                        if (currentDistance < minDistanceRefuel.distance) {
                            minDistanceRefuel.x = xValue;
                            minDistanceRefuel.y = yValue;
                            minDistanceRefuel.distance = currentDistance;
                            minDistanceRefuel.waypointSymbol = waypointSymbol;
                            minDistanceRefuel.type = "ENGINEERED_ASTEROID";
                        }
                    }).then(() => {
                        cy.get(`[data-testid="waypoint-container-${minDistanceRefuel.type}-${minDistanceRefuel.waypointSymbol}"]`).should("exist").within(() => {
                            cy.get(`[data-cy="travel-button-${minDistanceRefuel.type}"]`).should("exist")
                            cy.get(`[data-cy="travel-button-${minDistanceRefuel.type}"]`).click();
                        });

                        cy.get('[data-cy="travel-mode"]').should("exist").click();
                        cy.contains(`${Cypress.env("TEST_USERNAME").toUpperCase()}-1`).should("exist").click();
                        cy.contains("Travel Now").should("exist").click();
                        cy.contains("Ship Currently In Transit").should("exist");
                        cy.get('[data-cy="modal-body"]').invoke("text").then((text) => {
                            const match = text.match(/(\d+) minutes (\d+) seconds/);
                            const minutes = parseInt(match[1], 10);
                            const seconds = parseInt(match[2], 10);
                            const totalTimeInMilliseconds = ((minutes * 60 + seconds) * 1000) + 3000;
                            cy.wait(totalTimeInMilliseconds).then(() => {
                                cy.get('[data-cy="travel-modal-container"]').should("exist").click("right");
                                cy.contains("Dashboard").click();
                                cy.get(`[data-cy="extract-button-${Cypress.env("TEST_USERNAME").toUpperCase()}-1"]`).should("exist").click();
                                cy.contains("Extraction").should("exist");
                                cy.get('[data-cy="dashboard-modal-message-body"]').should('include.text', 'You have extracted')
                                cy.get('[data-testid="dashboard-modal-message-container"]').click("right");
                            })
                        });
                    })





















                })


            })



        });
    })





})