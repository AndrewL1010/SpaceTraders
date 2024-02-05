/**
 * @vitest-environment jsdom
 */
import { it, expect } from 'vitest';
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Contracts from './Contracts';
import { GlobalPlayerInfoContextProvider } from '../../contexts/PlayerInfoContext';
import { server } from '../../mocks/node'
import { postContractAccepted } from '../../mocks/handlers';

it("Should load Contracts page", async () => {

    render(
        <MemoryRouter initialEntries={["/Contracts"]}>
            <Routes>
                <Route path="Contracts" element={<GlobalPlayerInfoContextProvider><Contracts /></GlobalPlayerInfoContextProvider>} />
            </Routes>
        </MemoryRouter>
    )


    await waitFor(() => {
        expect(screen.getByText("cls57wrj0jtr4s60chr67gbn9")).toBeInTheDocument();
        expect(screen.getByText("PROCUREMENT")).toBeInTheDocument();
        expect(screen.getByText("2043")).toBeInTheDocument();
        expect(screen.getByText("9536")).toBeInTheDocument();
        expect(screen.getByText("2024-02-09T22:29:28.263Z")).toBeInTheDocument();
        expect(screen.getByText("False")).toBeInTheDocument();

    });


})

it("Should Accept a contract", async () => {
    render(
        <MemoryRouter initialEntries={["/Contracts"]}>
            <Routes>
                <Route path="Contracts" element={<GlobalPlayerInfoContextProvider><Contracts /></GlobalPlayerInfoContextProvider>} />
            </Routes>
        </MemoryRouter>
    )
    await waitFor(() => {
        expect(screen.getByText("cls57wrj0jtr4s60chr67gbn9")).toBeInTheDocument();
        expect(screen.getByText("PROCUREMENT")).toBeInTheDocument();
        expect(screen.getByText("2043")).toBeInTheDocument();
        expect(screen.getByText("9536")).toBeInTheDocument();
        expect(screen.getByText("2024-02-09T22:29:28.263Z")).toBeInTheDocument();
        expect(screen.getByText("False")).toBeInTheDocument();

    });

    fireEvent.click(screen.getByTestId("contract-accept-button"));

    await waitFor(() => {
        expect(screen.getByText("True")).toBeInTheDocument();
        expect(screen.getByText("Deliver")).toBeInTheDocument();
        expect(screen.getByText("Fulfil")).toBeInTheDocument();
    });
})

it("Should deliver 49 Aluminum ore for contract", async () => {
    server.use(...postContractAccepted)
    render(
        <MemoryRouter initialEntries={["/Contracts"]}>
            <Routes>
                <Route path="Contracts" element={<GlobalPlayerInfoContextProvider><Contracts /></GlobalPlayerInfoContextProvider>} />
            </Routes>
        </MemoryRouter>
    )

    await waitFor(() => {
        expect(screen.getByText("True")).toBeInTheDocument();
        expect(screen.getByText("Deliver")).toBeInTheDocument();
        expect(screen.getByText("Fulfil")).toBeInTheDocument();
    });
    fireEvent.click(screen.getByTestId("contract-deliver-cls57wrj0jtr4s60chr67gbn9"));

    await waitFor(() => {
        expect(screen.getByTestId("deliver-ship-ALU2000-1")).toBeInTheDocument();
        fireEvent.click(screen.getByTestId("deliver-ship-ALU2000-1"));
        fireEvent.click(screen.getByTestId("choose-ship-button"));
    });

    await waitFor(() => {
        expect(screen.getByText("Contract Delivery")).toBeInTheDocument();
        expect(screen.getByText("Aluminum Ore")).toBeInTheDocument();
    });
    fireEvent.click(screen.getByText("Aluminum Ore"));
    fireEvent.change(screen.getByLabelText("Amount"), { target: { value: '49' } });

    fireEvent.click(screen.getByText("Deliver Now"));


    await waitFor(() => {
        expect(screen.getByText(`49 ALUMINUM_ORE delivered`)).toBeInTheDocument();
    });
})