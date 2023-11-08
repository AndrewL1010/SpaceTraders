import { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode } from 'react';
import { useEffect } from 'react'
import headers from './playerOptions';
import Cookies from 'js-cookie';

export interface PlayerData {
    accountId: string,
    symbol: string,
    headquarters: string,
    credits: number,
    startingFaction: string,
    shipCount: number,

}

interface ContextProps {
    playerInfo: PlayerData,
    setPlayerInfo: Dispatch<SetStateAction<PlayerData>>
}
const PlayerInfoContext = createContext<ContextProps>({
    playerInfo: {
        accountId: "",
        symbol: "",
        headquarters: "",
        credits: 0,
        startingFaction: "",
        shipCount: 0,
    },
    setPlayerInfo: () => { },
});

export const GlobalPlayerInfoContextProvider = ({ children }: { children: ReactNode }) => {
    
    useEffect(() => {
        const getPlayerInfo = async () => {
            const response = await fetch('https://api.spacetraders.io/v2/my/agent', headers);
            const result = await response.json();
            const playerData: PlayerData = result.data;
            if (playerData !== null) {
                setPlayerInfo(playerData);
            }
        };

        if(Cookies.get("access_token") !== undefined){
            getPlayerInfo();
        }
    }, []);

    const [playerInfo, setPlayerInfo] = useState<PlayerData>({
        accountId: "",
        symbol: "",
        headquarters: "",
        credits: 0,
        startingFaction: "",
        shipCount: 0,
    });

    return (
        <PlayerInfoContext.Provider value={{ playerInfo, setPlayerInfo }}>
            {children}
        </PlayerInfoContext.Provider>
    )
}



// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => useContext(PlayerInfoContext);

