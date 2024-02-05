/**
 * @vitest-environment jsdom
 */
import { it, expect } from 'vitest';
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { MemoryRouter } from 'react-router-dom';
import Systems from './Systems';
import { GlobalPlayerInfoContextProvider } from '../../contexts/PlayerInfoContext';

const mocks = vi.hoisted(() => {
    return {
        navigate: vi.fn(),
        Cookies: vi.fn(),
    }
})

vi.mock('react-router-dom', async (importOriginal) => {
    const mod = await importOriginal<typeof import('react-router-dom')>()
    return {
        ...mod,
        useNavigate: () => mocks.navigate,
    }
})

it("Should load Systems page", async () => {

    render(
        <GlobalPlayerInfoContextProvider>
            <Systems />
        </GlobalPlayerInfoContextProvider>
    )

    await waitFor(() => {
        expect(screen.getAllByText("Systems")).toBeDefined();
        expect(screen.getByText("4")).toBeInTheDocument();
    });



})

it("Should click a system and navigate to that waypoint page", async () => {

    render(
        <MemoryRouter>
            <GlobalPlayerInfoContextProvider>
                <Systems />
            </GlobalPlayerInfoContextProvider>
        </MemoryRouter>
    )

    await waitFor(() => {
        expect(screen.getByTestId("redirect test X1-RR27")).toBeInTheDocument();
        fireEvent.click(screen.getByTestId("redirect test X1-RR27"));
        expect(mocks.navigate).toHaveBeenCalledWith("/Waypoints/X1-RR27");
    });


})

it("Should click page 4 and display page 4 contents", async () => {

    render(
        <MemoryRouter>
            <GlobalPlayerInfoContextProvider>
                <Systems />
            </GlobalPlayerInfoContextProvider>
        </MemoryRouter>
    )

    await waitFor(async () => {
        expect(screen.getByText("4")).toBeInTheDocument();

    });
    fireEvent.click(screen.getByText("4"));
    await waitFor(() => {
        expect(screen.getByTestId("redirect test X1-QX15")).toBeInTheDocument();
    })


})

