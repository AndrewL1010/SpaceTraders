/**
 * @vitest-environment jsdom
 */
import { it, expect } from 'vitest';
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';

const mocks = vi.hoisted(() => {
    return {
        navigate: vi.fn(),
    }
})
vi.mock('react-router-dom', async (importOriginal) => {
    const mod = await importOriginal<typeof import('react-router-dom')>()
    return {
        ...mod,
        // replace some exports
        useNavigate: () => mocks.navigate,
    }
})

it("Should display login page", async () => {

    render(
        <MemoryRouter>
            <Login />
        </MemoryRouter>
    )

    expect(screen.getByText("SpaceTraders")).toBeDefined();
    expect(screen.getByLabelText("username")).toBeDefined();
    expect(screen.getByLabelText("token")).toBeDefined();
    expect(screen.getByText("Login")).toBeDefined();
    expect(screen.getByText("Register")).toBeDefined();

})


it("Should Login and navigate to Dashboard page", async () => {
    render(
        <MemoryRouter>
            <Login />
        </MemoryRouter>
    )

    const username = "alu1029";
    const token = await import.meta.env.TEST_TOKEN
    fireEvent.change(screen.getByLabelText("username"), { target: { value: username } });
    fireEvent.change(screen.getByLabelText("token"), { target: { value: token } });
    fireEvent.click(screen.getByText("Login"));

    await waitFor(() => {
        expect(mocks.navigate).toHaveBeenCalledWith("/Dashboard")
    });


})

