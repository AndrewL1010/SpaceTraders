/**
 * @vitest-environment jsdom
 */
import { it, expect } from 'vitest';
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Shipyards from './Shipyards';
import { GlobalPlayerInfoContextProvider } from '../../contexts/PlayerInfoContext';
import { server } from '../../mocks/node'
import { failHandlers } from '../../mocks/handlers';

it("Should purchase a ship", async () => {

    render(
        <MemoryRouter initialEntries={["/shipyards/X1-HB61/X1-HB61-H55"]}>
            <Routes>
                <Route path="shipyards">
                    <Route path=":systemid">
                        <Route path=":waypointid" element={<GlobalPlayerInfoContextProvider><Shipyards /></GlobalPlayerInfoContextProvider>} />
                    </Route>
                </Route>
            </Routes>
        </MemoryRouter>
    )


    await waitFor(() => {
        expect(screen.getByText("Available Ships")).toBeInTheDocument();
        expect(screen.getByText("SHIP_MINING_DRONE")).toBeInTheDocument();
        expect(screen.getByText("SHIP_SURVEYOR")).toBeInTheDocument();
        expect(screen.getByTestId("ship-purchase-button-Mining Drone")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId("ship-purchase-button-Mining Drone"));

    await waitFor(() => {
        expect(screen.getByText("Success")).toBeInTheDocument();
        expect(screen.getByText("You have Successfully purchased SHIP_MINING_DRONE")).toBeInTheDocument();
    });


})



it("Should error when trying to buy a ship without enough credits", async () => {
    server.use(...failHandlers);
    render(
        <MemoryRouter initialEntries={["/shipyards/X1-HB61/X1-HB61-H55"]}>
            <Routes>
                <Route path="shipyards">
                    <Route path=":systemid">
                        <Route path=":waypointid" element={<GlobalPlayerInfoContextProvider><Shipyards /></GlobalPlayerInfoContextProvider>} />
                    </Route>
                </Route>
            </Routes>
        </MemoryRouter>
    )


    await waitFor(() => {
        expect(screen.getByText("Available Ships")).toBeInTheDocument();
        expect(screen.getByText("SHIP_MINING_DRONE")).toBeInTheDocument();
        expect(screen.getByText("SHIP_SURVEYOR")).toBeInTheDocument();
        expect(screen.getByTestId("ship-purchase-button-Mining Drone")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId("ship-purchase-button-Mining Drone"));

    await waitFor(() => {
        expect(screen.getByText("Error")).toBeInTheDocument();
        expect(screen.getByText("You have insufficient funds. You have 0 credits while 37987 credits are needed.")).toBeInTheDocument();
    });


})