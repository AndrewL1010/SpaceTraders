/**
 * @vitest-environment jsdom
 */
import { it, expect } from 'vitest';
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { MemoryRouter } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import { GlobalPlayerInfoContextProvider } from '../../contexts/PlayerInfoContext';

const mocks = vi.hoisted(() => {
    return {
        navigate: vi.fn(),
    }
})

vi.mock('react-router-dom', async (importOriginal) => {
    const mod = await importOriginal<typeof import('react-router-dom')>()
    return {
        ...mod,
        useNavigate: () => mocks.navigate,
    }
})
it("Should load Dashboard page", async () => {

    render(
        <MemoryRouter>
            <GlobalPlayerInfoContextProvider>
                <Dashboard />
            </GlobalPlayerInfoContextProvider>
        </MemoryRouter>
    )

    expect(screen.getByText("Your Ships")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Dashboard" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Systems" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Contracts" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Contracts" })).toBeInTheDocument();
})

it("Should click and navigate to all pages", async () => {

    render(
        <MemoryRouter>
            <GlobalPlayerInfoContextProvider>
                <Dashboard />
            </GlobalPlayerInfoContextProvider>
        </MemoryRouter>
    )

    fireEvent.click(screen.getByRole("button", { name: "Dashboard" }));
    await waitFor(() => {
        expect(mocks.navigate).toHaveBeenCalledWith("/Dashboard")
    });

    fireEvent.click(screen.getByRole("button", { name: "Systems" }));
    await waitFor(() => {
        expect(mocks.navigate).toHaveBeenCalledWith("/Systems")
    });

    fireEvent.click(screen.getByRole("button", { name: "Contracts" }));
    await waitFor(() => {
        expect(mocks.navigate).toHaveBeenCalledWith("/Contracts")
    });



})
it("Should click ship current system and navigate to that systems page", async () => {
    render(
        <MemoryRouter>
            <GlobalPlayerInfoContextProvider>
                <Dashboard />
            </GlobalPlayerInfoContextProvider>
        </MemoryRouter>
    )

    await waitFor(() => {
        expect(screen.getByTestId("ship-current-system-id ALU2000-2")).toBeInTheDocument();
        fireEvent.click(screen.getByTestId("ship-current-system-id ALU2000-2"));
        expect(mocks.navigate).toHaveBeenCalledWith("/Waypoints/X1-HB61");
    });





})
it("Should click settings,logout and redirect to login page", async () => {

    render(
        <MemoryRouter>
            <GlobalPlayerInfoContextProvider>
                <Dashboard />
            </GlobalPlayerInfoContextProvider>
        </MemoryRouter>
    )

    fireEvent.click(screen.getByRole("button", { name: "Open settings" }));
    fireEvent.click(screen.getByText("Logout"));
    await waitFor(() => {
        expect(mocks.navigate).toHaveBeenCalledWith("/")
    });

})

it("Should click on planet and display planet description table", async () => {

    render(
        <MemoryRouter>
            <GlobalPlayerInfoContextProvider>
                <Dashboard />
            </GlobalPlayerInfoContextProvider>
        </MemoryRouter>
    )
    await waitFor(() => {
        expect(screen.getByTestId("test-status-X1-HB61-A1")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId("test-status-X1-HB61-A1"));

    await waitFor(() => {
        expect(screen.getByText("Temperate")).toBeInTheDocument();
        expect(screen.getByText("Sprawling Cities")).toBeInTheDocument();
        expect(screen.getByText("Breathable Atmosphere")).toBeInTheDocument();
        expect(screen.getByText("Dry Seabeds")).toBeInTheDocument();
        expect(screen.getByText("Perpetual Daylight")).toBeInTheDocument();
        expect(screen.getByText("Marketplace")).toBeInTheDocument();
    });

})

it("Should display error when trying to refuel on a full tank", async () => {

    render(
        <MemoryRouter>
            <GlobalPlayerInfoContextProvider>
                <Dashboard />
            </GlobalPlayerInfoContextProvider>
        </MemoryRouter>
    )
    await waitFor(() => {
        expect(screen.getByTestId("test-status-X1-HB61-A1")).toBeInTheDocument();
        expect(screen.getByText("400/400")).toBeInTheDocument();
        expect(screen.getByTestId("test-refuel-ALU2000-1")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId("test-refuel-ALU2000-1"));

    await waitFor(() => {
        expect(screen.getByText(/Your fuel tank is already full/i)).toBeInTheDocument()
    });

})


it("Should extract ore", async () => {

    render(
        <MemoryRouter>
            <GlobalPlayerInfoContextProvider>
                <Dashboard />
            </GlobalPlayerInfoContextProvider>
        </MemoryRouter>
    )
    await waitFor(() => {
        expect(screen.getByTestId("test-status-X1-HB61-A1")).toBeInTheDocument();
        expect(screen.getByText("400/400")).toBeInTheDocument();
        expect(screen.getByTestId("test-undock-ALU2000-1")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId("test-undock-ALU2000-1"));

    await waitFor(() => {
        expect(screen.getByTestId("test-extract-ALU2000-1")).toBeInTheDocument();

    });
    fireEvent.click(screen.getByTestId("test-extract-ALU2000-1"));


    await waitFor(() => {
        expect(screen.getByText("Extraction")).toBeInTheDocument();
        expect(screen.getByText("You have extracted 7 IRON_ORE")).toBeInTheDocument();
    });

})





