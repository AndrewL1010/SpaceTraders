/**
 * @vitest-environment jsdom
 */
import { it, expect } from 'vitest';
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Markets from './Markets';
import { GlobalPlayerInfoContextProvider } from '../../contexts/PlayerInfoContext';
import { server } from '../../mocks/node'
import { failHandlers, insufficientCreditsForFood} from '../../mocks/handlers';

it("Should load Markets page", async () => {

    render(
        <MemoryRouter initialEntries={["/markets/X1-HB61/X1-HB61-A1"]}>
            <Routes>
                <Route path="markets">
                    <Route path=":systemid">
                        <Route path=":waypointid" element={<GlobalPlayerInfoContextProvider><Markets /></GlobalPlayerInfoContextProvider>} />
                    </Route>
                </Route>
            </Routes>
        </MemoryRouter>
    )

    await waitFor(() => {
        expect(screen.getByText("X1-HB61-A1 Market")).toBeInTheDocument();
        expect(screen.getByText("Available Items In Shop")).toBeInTheDocument();
        expect(screen.getByText("FOOD")).toBeInTheDocument();
        expect(screen.getByText("MEDICINE")).toBeInTheDocument();
        expect(screen.getByText("CLOTHING")).toBeInTheDocument();
        expect(screen.getByText("LASER_RIFLES")).toBeInTheDocument();
        expect(screen.getByText("FUEL")).toBeInTheDocument();
        expect(screen.getByText("JEWELRY")).toBeInTheDocument();

    });

})

it("Should buy 5 units of food, and sell it back", async () => {

    render(
        <MemoryRouter initialEntries={["/markets/X1-HB61/X1-HB61-A1"]}>
            <Routes>
                <Route path="markets">
                    <Route path=":systemid">
                        <Route path=":waypointid" element={<GlobalPlayerInfoContextProvider><Markets /></GlobalPlayerInfoContextProvider>} />
                    </Route>
                </Route>
            </Routes>
        </MemoryRouter>
    )

    //buying
    await waitFor(() => {
        expect(screen.getByTestId("market-item-FOOD")).toBeInTheDocument();
    });
    fireEvent.click(screen.getByTestId("market-item-FOOD"));
    await waitFor(() => {
        expect(screen.getByText("Price: 4706")).toBeInTheDocument();
        expect(screen.getByText("Max Amount: 60")).toBeInTheDocument();
    });

    fireEvent.change(screen.getByLabelText("Amount"), { target: { value: '5' } });
    fireEvent.click(screen.getByTestId("market-ship-ALU2000-1"));
    fireEvent.click(screen.getByTestId("purchase-button"));
    await waitFor(() => {
        expect(screen.getByText("Purchased")).toBeInTheDocument();
        expect(screen.getByText("You have successfully purchased 5 FOOD")).toBeInTheDocument();
    });





    //selling

    expect(screen.getByTestId("ALU2000-1-FOOD")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("ALU2000-1-FOOD"));

    await waitFor(() => {
        expect(screen.getByTestId("sell-modal-title")).toBeInTheDocument();
        expect(screen.getByLabelText("Galactic Cuisine")).toBeInTheDocument();
        expect(screen.getByLabelText("Galactic Cuisine")).toHaveValue(5);
    })

    fireEvent.click(screen.getByText("Sell"));

    await waitFor(() => {
        expect(screen.getByText("Success")).toBeInTheDocument();
        expect(screen.getByText("You have successfully sold 5 Galactic Cuisine for 11685")).toBeInTheDocument();
    })

})


it("Should error when trying to buy over the cargo limit", async () => {
    server.use(...failHandlers);
    render(
        <MemoryRouter initialEntries={["/markets/X1-HB61/X1-HB61-A1"]}>
            <Routes>
                <Route path="markets">
                    <Route path=":systemid">
                        <Route path=":waypointid" element={<GlobalPlayerInfoContextProvider><Markets /></GlobalPlayerInfoContextProvider>} />
                    </Route>
                </Route>
            </Routes>
        </MemoryRouter>
    )

    //buying
    await waitFor(() => {
        expect(screen.getByTestId("market-item-FOOD")).toBeInTheDocument();
    });
    fireEvent.click(screen.getByTestId("market-item-FOOD"));
    await waitFor(() => {
        expect(screen.getByText("Price: 4706")).toBeInTheDocument();
        expect(screen.getByText("Max Amount: 60")).toBeInTheDocument();
    });

    fireEvent.change(screen.getByLabelText("Amount"), { target: { value: '5' } });
    fireEvent.click(screen.getByTestId("market-ship-ALU2000-1"));
    fireEvent.click(screen.getByTestId("purchase-button"));
    await waitFor(() => {
        expect(screen.getByText("Error")).toBeInTheDocument();
        expect(screen.getByText("Failed to update ship cargo. Cannot add 60 unit(s) to ship cargo. Exceeds max limit of 40.")).toBeInTheDocument();
    });

})

it("Should error when trying to buy food without enough credits", async () => {
    server.use(...insufficientCreditsForFood);
    render(
        <MemoryRouter initialEntries={["/markets/X1-HB61/X1-HB61-A1"]}>
            <Routes>
                <Route path="markets">
                    <Route path=":systemid">
                        <Route path=":waypointid" element={<GlobalPlayerInfoContextProvider><Markets /></GlobalPlayerInfoContextProvider>} />
                    </Route>
                </Route>
            </Routes>
        </MemoryRouter>
    )

    //buying
    await waitFor(() => {
        expect(screen.getByTestId("market-item-FOOD")).toBeInTheDocument();
    });
    fireEvent.click(screen.getByTestId("market-item-FOOD"));
    await waitFor(() => {
        expect(screen.getByText("Price: 4706")).toBeInTheDocument();
        expect(screen.getByText("Max Amount: 60")).toBeInTheDocument();
    });

    fireEvent.change(screen.getByLabelText("Amount"), { target: { value: '1' } });
    fireEvent.click(screen.getByTestId("market-ship-ALU2000-1"));
    fireEvent.click(screen.getByTestId("purchase-button"));
    await waitFor(() => {
        expect(screen.getByText("Error")).toBeInTheDocument();
        expect(screen.getByText("Market purchase failed. Agent does not have sufficient credits to purchase 1 unit(s) of FOOD")).toBeInTheDocument();
    });

})


