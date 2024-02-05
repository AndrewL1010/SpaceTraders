import Countdown from 'react-countdown';
interface ArrivalCountDownProps {
    arrivalDateString: string
}
function CountdownTimer(props: ArrivalCountDownProps) {
    const { arrivalDateString } = props
    const arrivalDate = new Date(arrivalDateString);
    const currentDate = new Date();
    const countdowntime = arrivalDate.getTime() - currentDate.getTime();
    if (countdowntime > 0) {
        return (
            <Countdown  date={Date.now() + countdowntime}>
                <span data-testid="countdown-test">N/A</span>
            </Countdown>
        )
    }

    return (
        <span>N/A</span>
    )
}

export default CountdownTimer