/**
 * @vitest-environment jsdom
 */
import { it, expect } from 'vitest';
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { MemoryRouter} from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
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



it("Should load Shipyards page", async () => {

    render(
        <MemoryRouter>
            {<GlobalPlayerInfoContextProvider><NotFoundPage /></GlobalPlayerInfoContextProvider>}
        </MemoryRouter>
    )


    await waitFor(() => {
        expect(screen.getByText("This Page Does Not Exist")).toBeInTheDocument();
        expect(screen.getByText("Back To DashBoard")).toBeInTheDocument();
     
    });
    fireEvent.click(screen.getByText("Back To DashBoard"));

    await waitFor(() => {
        expect(mocks.navigate).toBeCalledWith("/Dashboard");
    })


})