import { Box, Button, CircularProgress, Modal, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Ship } from './Shipyards';
import { useGlobalContext } from '../../contexts/PlayerInfoContext';
import Cookies from 'js-cookie';
interface Props {
    ship: Ship,
}
const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: '#2a2a2a',
    border: '2px solid #FFA500',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    display: "flex",
    flexDirection: "column",
    gap: 5,
};

function PurchaseButton(props: Props) {
    const { playerInfo, setPlayerInfo } = useGlobalContext();
    const [loading, setLoading] = useState<boolean>(false);
    const [showMessage, setShowMessage] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");
    const { ship } = props;


    const buyShip = async (ship: Ship) => {
        setLoading(true);
        if (playerInfo.credits < ship.purchasePrice) {
            setTitle("Error");
            setBody(`You have insufficient funds. You have ${playerInfo.credits} credits while ${ship.purchasePrice} credits are needed.`);
            setShowMessage(true);
        }
        else {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Cookies.get("access_token")}`
                },
                body: JSON.stringify({
                    shipType: ship.type,
                    waypointSymbol: ship.waypointSymbol,
                }),
            };
            const response = await fetch('https://api.spacetraders.io/v2/my/ships', options);
            const result = await response.json();
            if (result.error === undefined) {
                setTitle("Success");
                setBody(`You have Successfully purchased ${ship.type}`);
                setShowMessage(true);
                const updatedPlayerInfo = {...playerInfo, credits: playerInfo.credits - ship.purchasePrice, shipCount: playerInfo.shipCount + 1};
                setPlayerInfo(updatedPlayerInfo);
            }
        }
        setLoading(false);

    }
    return (
        <>
            <Button key={ship.type} onClick={() => { buyShip(ship) }}>{loading ? <CircularProgress /> : "Purchase"}</Button>
            <Modal
                open={showMessage}
                onClose={() => { setShowMessage(false) }}

            >
                <Box sx={{ ...modalStyle }}>
                    <Typography id="modal-modal-title" variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, color: "orange", display: "flex", justifyContent: "center" }}>
                        {body}
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}

export default PurchaseButton