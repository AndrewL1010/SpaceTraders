/**
 * @vitest-environment jsdom
 */
import { it, expect } from 'vitest';
import { render, screen } from "@testing-library/react"
import CountdownTimer from './CountdownTimer';



it("calculates the time left properly", async () => {
    const currentDate = new Date();
    // 30 mins in the future
    const futureDate = new Date(currentDate.getTime() + 30 * 60 * 1000);
    const futureDateString = futureDate.toISOString();
    render(
        <CountdownTimer arrivalDateString={futureDateString}></CountdownTimer>
    );

    expect(screen.getByText("00:00:30:00")).toBeInTheDocument();
})