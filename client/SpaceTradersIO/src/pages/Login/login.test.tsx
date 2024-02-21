/**
 * @vitest-environment jsdom
 */
import { it, expect } from 'vitest';
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';
import Dashboard from '../Dashboard/Dashboard';
import { GlobalPlayerInfoContextProvider } from '../../contexts/PlayerInfoContext';
import { server } from '../../mocks/node'
import { failHandlers } from '../../mocks/handlers';
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
it("Should display login page", async () => {

    render(
        <MemoryRouter>
            <GlobalPlayerInfoContextProvider>
                <Login />
            </GlobalPlayerInfoContextProvider>
        </MemoryRouter>
    )

    expect(screen.getByText("SpaceTraders")).toBeInTheDocument();
    expect(screen.getByLabelText("username")).toBeInTheDocument();
    expect(screen.getByLabelText("password")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Register")).toBeInTheDocument();
    expect(screen.getByText("Register")).toBeInTheDocument()

})


it("Should Login and navigate to Dashboard page", async () => {
    render(
        <MemoryRouter>
            <GlobalPlayerInfoContextProvider>
                <Login />
                <Dashboard />
            </GlobalPlayerInfoContextProvider>
        </MemoryRouter>
    )

    const username = "alu1029";
    const password = "password"
    fireEvent.change(screen.getByLabelText("username"), { target: { value: username } });
    fireEvent.change(screen.getByLabelText("password"), { target: { value: password } });
    fireEvent.click(screen.getByTestId("login-button"));

    await waitFor(() => {
        expect(mocks.navigate).toHaveBeenCalledWith("/Dashboard")
    });
    expect(mocks.navigate).toHaveBeenCalledTimes(1);
})

it("Should register for a new account", async () => {
    render(
        <MemoryRouter>
            <GlobalPlayerInfoContextProvider>
                <Login />
                <Dashboard />
            </GlobalPlayerInfoContextProvider>
        </MemoryRouter>
    )

    const username = "alu1029";
    const password = "password";
    const email = "fakeEmail@gmail.com";
    fireEvent.click(screen.getByText("Register"));
    await waitFor(() => {
        expect(screen.getByTestId("test-username-field")).toBeInTheDocument();
        expect(screen.getByTestId("test-password-field")).toBeInTheDocument();
        expect(screen.getByTestId("test-email-field")).toBeInTheDocument();
    })
    fireEvent.change(screen.getByPlaceholderText("Enter Desired Username..."), { target: { value: username } });
    fireEvent.change(screen.getByPlaceholderText("Enter Password..."), { target: { value: password } });
    fireEvent.change(screen.getByPlaceholderText("Enter Email..."), { target: { value: email } });
    fireEvent.click(screen.getByText("Create Account"));

    await waitFor(async () => {
        expect(screen.getByText("Pending Verification")).toBeInTheDocument();
        expect(screen.getByText("Please check your email and verify your account")).toBeInTheDocument();
    });

})

it("Should display error message when registering a name that is taken", async () => {
    server.use(...failHandlers)
    render(
        <MemoryRouter>
            <GlobalPlayerInfoContextProvider>
                <Login />
                <Dashboard />
            </GlobalPlayerInfoContextProvider>
        </MemoryRouter>
    )

    const username = "alu4000";
    const email = "fakeEmail@gmail.com";
    fireEvent.click(screen.getByText("Register"));
    await waitFor(() => {
        expect(screen.getByTestId("test-username-field")).toBeInTheDocument();
        expect(screen.getByTestId("test-email-field")).toBeInTheDocument();
    })
    fireEvent.change(screen.getByPlaceholderText("Enter Desired Username..."), { target: { value: username } });
    fireEvent.change(screen.getByPlaceholderText("Enter Email..."), { target: { value: email } });
    fireEvent.click(screen.getByText("Create Account"));

    await waitFor(async () => {
        expect(screen.getByText("Username already taken")).toBeInTheDocument();
    });

})

