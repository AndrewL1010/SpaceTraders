import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import Cookies from 'js-cookie'
import { Button, createTheme, ThemeProvider, CircularProgress, Modal, Box, Typography, FormControl, RadioGroup, FormControlLabel, Radio, TextField } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from './Contracts.module.css'
import { useGlobalContext } from '../../contexts/PlayerInfoContext';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
interface ContractInfo {
    id: string;
    factionSymbol: string;
    type: string;
    terms: {
        deadline: string;
        payment: {
            onAccepted: number;
            onFulfilled: number;
        };
        deliver: {
            tradeSymbol: string;
            destinationSymbol: string;
            unitsRequired: number;
            unitsFulfilled: number;
        }[];
    };
    accepted: boolean;
    fulfilled: boolean;
    expiration: string;
    deadlineToAccept: string;
}
interface Inventory {
    symbol: string,
    name: string,
    description: string,
    units: number
}

interface Ship {
    symbol: string
    inventory: Inventory[]
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
function Contracts() {
    const [contracts, setContracts] = useState<ContractInfo[] | undefined>()
    const [loading, setLoading] = useState<boolean>(false);
    const [showShipOptions, setShowShipOptions] = useState<boolean>(false);
    const [showShipInventory, setShowShipInventory] = useState<boolean>(false);
    const { playerInfo, setPlayerInfo } = useGlobalContext();
    const [shipID, setShipID] = useState<string>("");
    const [availableShips, setAvailableShips] = useState<string[]>([])
    const [showMessage, setShowMessage] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");
    const [deliveryItem, setDeliveryItem] = useState<string>();
    const [chosenShip, setChosenShip] = useState<Ship>();
    const [amount, setAmount] = useState<number>(0);
    const [chosenContract, setChosenContract] = useState<ContractInfo>()

    const navigate = useNavigate();
    useEffect(() => {
        const auth = async () => {
            setLoading(true);
            const response = await fetch("http://52.53.247.156/api/auth",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    mode: "cors",
                    credentials: "include",
                }
            )
            if (response.status !== 201) {
                navigate("/");
            }
        }
        const getContract = async () => {
            const options = {
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': `Bearer ${Cookies.get("access_token")}`
                }
            }
            const response = await fetch("https://api.spacetraders.io/v2/my/contracts?limit=20", options);
            const result = await response.json();
            if (result.data !== undefined) {
                const contractList: ContractInfo[] = result.data;
                const filteredList: ContractInfo[] = contractList.filter((contract) => contract.fulfilled === false)
                setContracts(filteredList);
            }

        }
        auth();
        if (Cookies.get("access_token") !== undefined) {
            getContract();
        }

    }, [navigate])






    const theme = createTheme({
        palette: {
            primary: {
                main: "#FFA500"
            }
        }
    })

    const acceptContract = async (contractID: string) => {
        setLoading(true);
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get("access_token")}`
            },
        };

        const response = await fetch(`https://api.spacetraders.io/v2/my/contracts/${contractID}/accept`, options);
        const result = await response.json();
        if (result.data && contracts !== undefined) {

            const updatedContracts = contracts?.map((contract) =>
                contract.id === contractID ? { ...contract, accepted: true } : contract
            );
            setContracts(updatedContracts);
            const updatedPlayerInfo = { ...playerInfo, credits: playerInfo.credits + result.data.terms.payment.onAccepted }
            setPlayerInfo(updatedPlayerInfo);
        }
        setLoading(false);

    }
    const fulfilContract = async (contractID: string) => {
        const url = `https://api.spacetraders.io/v2/my/contracts/${contractID}/fulfill`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${Cookies.get("access_token")}`
            },
            body: undefined
        };
        const response = await fetch(url, options);
        const result = await response.json();

        if (result.error !== undefined) {
            setTitle("Error");
            setBody(result.error.message);
            setShowMessage(true);
        }
        else {
            const updatedPlayerInfo = { ...playerInfo, credits: playerInfo.credits + result.data.contract.terms.payment.onFulfilled }
            setPlayerInfo(updatedPlayerInfo);
            const updatedContracts = contracts?.map((contract) => {
                if (contract.id === result.data.contract.id) {
                    return { ...contract, fulfilled: true };
                }
                return contract;
            })
            setContracts(updatedContracts)
            setTitle(result.data.contracts.id);
            setBody("You have fulfilled the contract");
            setShowMessage(true);
        }
    }
    const deliverContract = async () => {
        const url = `https://api.spacetraders.io/v2/my/contracts/${chosenContract?.id}/deliver`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${Cookies.get("access_token")}`
            },
            body: `{"shipSymbol":"${shipID}","tradeSymbol":"${deliveryItem}","units":${amount}}`
        };
        const response = await fetch(url, options);
        const result = await response.json();
        if (result.error !== undefined) {
            setTitle("Error");
            setBody(result.error.message);
            setShowMessage(true);
        }
        else {
            const updatedChosenShip: Ship = { symbol: shipID, inventory: result.data.cargo.inventory };
            setChosenShip(updatedChosenShip)
            setChosenContract(result.data.contract);
            setTitle("Contract");
            setBody(`${amount} ${deliveryItem} delivered`);
            setShowMessage(true);
        }
    }
    const handleShipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShipID((event.target as HTMLInputElement).value);
    };
    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(parseInt((event.target as HTMLInputElement).value));
    };
    const handleShowShips = async (contract: ContractInfo) => {
        setChosenContract(contract);
        const url = 'https://api.spacetraders.io/v2/my/ships?limit=20';
        const options = {
            method: 'GET',
            headers: { Accept: 'application/json', Authorization: `Bearer ${Cookies.get("access_token")}` }
        };
        const response = await fetch(url, options);
        const result = await response.json();
        if (result.error !== undefined) {
            setTitle("Error");
            setBody(result.error.message);
            setShowMessage(true);
        }
        else {
            const shipList = result.data.map((ship: { symbol: string }) => {
                return ship.symbol
            })
            setAvailableShips(shipList);
        }
        setShowShipOptions(true);
    }
    const handleShipInventory = async (shipID: string) => {
        const url = `https://api.spacetraders.io/v2/my/ships/${shipID}`;
        const options = {
            method: 'GET',
            headers: { Accept: 'application/json', Authorization: `Bearer ${Cookies.get("access_token")}` }
        };
        const response = await fetch(url, options);
        const result = await response.json();
        if (result.error !== undefined) {
            setTitle("Error");
            setBody(result.error.message);
            setShowMessage(true);
        }
        else {
            const ship: Ship = { symbol: result.data.symbol, inventory: result.data.cargo.inventory }
            setChosenShip(ship);
            setShowShipOptions(false);
            setShowShipInventory(true);
        }
    }

    return (
        <>
            <Navbar />
            <ThemeProvider theme={theme}>
                {contracts !== undefined && contracts.length > 0 ? (
                    <>
                        <h2 className={styles.title}>Contracts</h2>
                        <div className={styles.contracts_container} >
                            {
                                contracts.map((contract) => {
                                    if (contract.fulfilled !== true) {
                                        return (
                                            <div className={styles.contracts} key={contract.id}>
                                                <Table
                                                    key={contract.id}
                                                    sx={{
                                                        minWidth: 300,
                                                        maxWidth: 500,
                                                        backgroundColor: "orange",
                                                        borderColor: "black",
                                                        marginLeft: "auto",
                                                        marginRight: "auto",
                                                    }}
                                                    size="small"
                                                    aria-label="a dense table"
                                                >
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell
                                                                sx={{
                                                                    textAlign: "center",
                                                                    borderTop: 1,
                                                                    borderColor: "black",
                                                                    fontWeight: "bold",
                                                                }}
                                                                colSpan={2}
                                                            >
                                                                {contract.id}
                                                            </TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        <TableRow key={`${contract.id}:type`}>
                                                            <TableCell
                                                                component="th"
                                                                scope="row"
                                                                sx={{ borderColor: "black", fontWeight: "bold" }}
                                                            >
                                                                Type
                                                            </TableCell>
                                                            <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                                                                {contract.type}
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow key={`${contract.id}:objective`}>
                                                            <TableCell
                                                                component="th"
                                                                scope="row"
                                                                sx={{ borderColor: "black", fontWeight: "bold" }}
                                                            >
                                                                Objectives
                                                            </TableCell>
                                                            <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                                                                {contract.terms.deliver.map((item) => (
                                                                    <div key={item.tradeSymbol}>
                                                                        <p>item: {item.tradeSymbol}</p>
                                                                        <p>Destination: {item.destinationSymbol}</p>
                                                                        <p>Units Required: {item.unitsRequired}</p>
                                                                        <p>Units Fulfilled: {item.unitsFulfilled}</p>
                                                                    </div>
                                                                ))}
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow key={`${contract.id}:initial-payment`}>
                                                            <TableCell
                                                                component="th"
                                                                scope="row"
                                                                sx={{ borderColor: "black", fontWeight: "bold" }}
                                                            >
                                                                Initial Payment
                                                            </TableCell>
                                                            <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                                                                {contract.terms.payment.onAccepted}
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow key={`${contract.id}:final-payment`}>
                                                            <TableCell
                                                                component="th"
                                                                scope="row"
                                                                sx={{ borderColor: "black", fontWeight: "bold" }}
                                                            >
                                                                Final Payment
                                                            </TableCell>
                                                            <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                                                                {contract.terms.payment.onFulfilled}
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow key={`${contract.id}:deadline`}>
                                                            <TableCell
                                                                component="th"
                                                                scope="row"
                                                                sx={{ borderColor: "black", fontWeight: "bold" }}
                                                            >
                                                                Deadline
                                                            </TableCell>
                                                            <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                                                                {contract.terms.deadline}
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow key={`${contract.id}:status`}>
                                                            <TableCell
                                                                component="th"
                                                                scope="row"
                                                                sx={{ borderColor: "black", fontWeight: "bold" }}
                                                            >
                                                                Contract Accepted
                                                            </TableCell>
                                                            <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold", color: contract.accepted ? "green" : "red" }}>
                                                                {contract.accepted ? "True" : "False"}
                                                            </TableCell>
                                                        </TableRow>

                                                    </TableBody>

                                                </Table>
                                                {contract.accepted ? (
                                                    <div className={styles.buttonContainer}>
                                                        <Button onClick={() => { handleShowShips(contract) }} >Deliver</Button>
                                                        <Button onClick={() => { fulfilContract(contract.id) }}>Fulfil</Button>
                                                    </div>
                                                )


                                                    : <Button onClick={() => { acceptContract(contract.id) }}>{loading ? <CircularProgress /> : "Accept"}</Button>}

                                            </div>
                                        )
                                    }
                                })

                            }
                        </div>
                        <Modal
                            open={showShipOptions}
                            onClose={() => { setShowShipOptions(false) }}

                        >
                            <Box sx={{ ...modalStyle }}>
                                <Typography id="modal-modal-title" variant="h5" component="h2">
                                    Pick a ship to deliver goods
                                </Typography>
                                <Box id="modal-modal-description" sx={{ mt: 2, color: "orange", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
                                    <FormControl>
                                        <div className={styles.radioContainer}>
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label1"
                                                defaultValue="ships"
                                                name="radio-buttons-group1"
                                                value={shipID}
                                                onChange={handleShipChange}
                                            >
                                                <h3>Your Ships</h3>
                                                {availableShips.length > 0 ? (
                                                    availableShips.map((ship) => (
                                                        <FormControlLabel key={ship} value={ship} control={<Radio sx={{ color: "orange" }} />} label={ship} />
                                                    ))
                                                )
                                                    :
                                                    (
                                                        <Typography id="modal-modal-description" sx={{ mt: 2, color: "orange", display: "flex", justifyContent: "center" }}>
                                                            No Available Ships
                                                        </Typography>
                                                    )
                                                }
                                            </RadioGroup>

                                        </div>
                                    </FormControl>
                                    <Button onClick={() => { handleShipInventory(shipID) }}> Choose Ship</Button>
                                </Box>
                            </Box>
                        </Modal>
                        <Modal
                            open={showShipInventory}
                            onClose={() => { setShowShipInventory(false) }}

                        >
                            <Box sx={{ ...modalStyle }}>
                                <Typography id="modal-modal-title" variant="h5" component="h2">
                                    Contract Delivery
                                </Typography>
                                {chosenContract !== undefined ? (
                                    <Table
                                        key={chosenContract.id}
                                        sx={{
                                            minWidth: 300,
                                            maxWidth: 500,
                                            backgroundColor: "orange",
                                            borderColor: "black",
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                        }}
                                        size="small"
                                        aria-label="a dense table"
                                    >
                                        <TableHead>
                                            <TableRow>
                                                <TableCell
                                                    sx={{
                                                        textAlign: "center",
                                                        borderTop: 1,
                                                        borderColor: "black",
                                                        fontWeight: "bold",
                                                    }}
                                                    colSpan={2}
                                                >
                                                    {chosenContract.id}
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow key={`${chosenContract.id}:type`}>
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                    sx={{ borderColor: "black", fontWeight: "bold" }}
                                                >
                                                    Type
                                                </TableCell>
                                                <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                                                    {chosenContract.type}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow key={`${chosenContract.id}:objective`}>
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                    sx={{ borderColor: "black", fontWeight: "bold" }}
                                                >
                                                    Objectives
                                                </TableCell>
                                                <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                                                    {chosenContract.terms.deliver.map((item) => (
                                                        <div key={item.tradeSymbol}>
                                                            <p>item: {item.tradeSymbol}</p>
                                                            <p>Destination: {item.destinationSymbol}</p>
                                                            <p>Units Required: {item.unitsRequired}</p>
                                                            <p>Units Fulfilled: {item.unitsFulfilled}</p>
                                                        </div>
                                                    ))}
                                                </TableCell>
                                            </TableRow>

                                            <TableRow key={`${chosenContract.id}:final-payment`}>
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                    sx={{ borderColor: "black", fontWeight: "bold" }}
                                                >
                                                    Final Payment
                                                </TableCell>
                                                <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                                                    {chosenContract.terms.payment.onFulfilled}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow key={`${chosenContract.id}:deadline`}>
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                    sx={{ borderColor: "black", fontWeight: "bold" }}
                                                >
                                                    Deadline
                                                </TableCell>
                                                <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                                                    {chosenContract.terms.deadline}
                                                </TableCell>
                                            </TableRow>


                                        </TableBody>

                                    </Table>
                                ) : <div>Contract does not exist</div>

                                }

                                {chosenShip !== undefined ? (
                                    <Table

                                        sx={{
                                            minWidth: 300,
                                            maxWidth: 500,
                                            backgroundColor: "orange",
                                            borderColor: "black",
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                        }}
                                        size="small"
                                        aria-label="a dense table"
                                    >
                                        <TableHead>
                                            <TableRow>
                                                <TableCell
                                                    sx={{
                                                        textAlign: "center",
                                                        borderTop: 1,
                                                        borderColor: "black",
                                                        fontWeight: "bold",
                                                    }}
                                                    colSpan={2}
                                                >
                                                    {chosenShip.symbol}
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {chosenShip.inventory.map((item) => (

                                                <TableRow key={item.symbol} className={styles.shipcargo} onClick={() => { setDeliveryItem(item.symbol) }}>
                                                    <TableCell
                                                        component="th"
                                                        scope="row"
                                                        sx={{ borderColor: "black", fontWeight: "bold" }}
                                                    >
                                                        {item.name}
                                                    </TableCell>
                                                    <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                                                        {item.units}
                                                    </TableCell>
                                                </TableRow>

                                            ))


                                            }

                                        </TableBody>
                                    </Table>
                                ) : <div> Ship does not exist</div>

                                }
                                <h3 style={{ color: "orange", textAlign: "center", margin: "0" }}>{deliveryItem !== undefined ? `How many ${deliveryItem} do you want to deliver?` : "Choose an Item to deliver"}</h3>
                                {deliveryItem !== undefined ? (
                                    <TextField onChange={handleAmountChange} inputProps={{ style: { color: "orange" } }} InputLabelProps={{ style: { color: "orange" } }} className={styles.inputs} type='number' label={"Amount"} variant="outlined" size='small' value={amount} />
                                ) : null

                                }
                                <Button onClick={deliverContract}> Deliver Now</Button>
                            </Box>
                        </Modal>
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
                ) : (
                    <h2 style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "200px", color: "orange" }}> No Available Contracts</h2>
                )

                }
            </ThemeProvider ></>

    )
}

export default Contracts