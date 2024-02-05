/**
 * @vitest-environment jsdom
 */
import { it, expect } from 'vitest';
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Waypoints from './Waypoints';
import { GlobalPlayerInfoContextProvider } from '../../contexts/PlayerInfoContext';



it("Should load Waypoints page", async () => {


    render(
        <MemoryRouter initialEntries={["/Waypoints/X1-HB61"]}>
            <Routes>
                <Route path="Waypoints">
                <Route path=":id" element={<GlobalPlayerInfoContextProvider><Waypoints /></GlobalPlayerInfoContextProvider>} />
                </Route>
            </Routes>
        </MemoryRouter>
    )

    await waitFor(() => {
        expect(screen.getByText("Waypoints In System X1-HB61")).toBeInTheDocument();

    });

})

it("Should click a system and navigate to that waypoint", async () => {

    render(
        <MemoryRouter initialEntries={["/Waypoints/X1-HB61"]}>
            <Routes>
                <Route path="Waypoints">
                    <Route path=":id" element={<GlobalPlayerInfoContextProvider><Waypoints /></GlobalPlayerInfoContextProvider>} />
                </Route>
            </Routes>
        </MemoryRouter>
    )

    await waitFor(() => {
        expect(screen.getByTestId("test-travel-X1-HB61-B9")).toBeInTheDocument();

    });
    fireEvent.click(screen.getByTestId("test-travel-X1-HB61-B9"));

    await waitFor(() => {
        expect(screen.getByText("Pick a ship to travel to X1-HB61-B9")).toBeInTheDocument();
        expect(screen.getByText("ALU2000-1")).toBeInTheDocument();
        expect(screen.getByText("ALU2000-2")).toBeInTheDocument();
        expect(screen.getByTestId("test-waypoint-travel")).toBeInTheDocument();

    });
    fireEvent.click(screen.getByText("ALU2000-1"));
    fireEvent.click(screen.getByTestId("test-waypoint-travel"));
    fireEvent.click(screen.getByTestId("test-waypoint-travel-button"));

    await waitFor(() => {
        expect(screen.getByTestId("test-title")).toBeInTheDocument();
        expect(screen.getByText(/You will arrive at X1-HB61-B9/i)).toBeInTheDocument();


    });

})

it("Should fail to navigate when choosing a waypoint in the wrong system", async () => {

    render(
        <MemoryRouter initialEntries={["/Waypoints/X1-MM93"]}>
            <Routes>
                <Route path="Waypoints">
                    <Route path=":id" element={<GlobalPlayerInfoContextProvider><Waypoints /></GlobalPlayerInfoContextProvider>} />
                </Route>
            </Routes>
        </MemoryRouter>
    )

    await waitFor(() => {
        expect(screen.getByTestId("test-travel-X1-MM93-EF3Z")).toBeInTheDocument();

    });
    fireEvent.click(screen.getByTestId("test-travel-X1-MM93-EF3Z"));

    await waitFor(() => {
        expect(screen.getByText("Pick a ship to travel to X1-MM93-EF3Z")).toBeInTheDocument();
        expect(screen.getByText("ALU2000-1")).toBeInTheDocument();
        expect(screen.getByText("ALU2000-2")).toBeInTheDocument();
        expect(screen.getByTestId("test-waypoint-travel")).toBeInTheDocument();

    });
    fireEvent.click(screen.getByText("ALU2000-1"));
    fireEvent.click(screen.getByTestId("test-waypoint-travel"));
    fireEvent.click(screen.getByTestId("test-waypoint-travel-button"));
    await waitFor(() => {
        expect(screen.getByText(/Navigate request failed. Destination X1-MM93-EF3Z is outside the X1-ZV83 system./i)).toBeInTheDocument();



    });

})
