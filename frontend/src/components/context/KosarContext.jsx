import { createContext, useEffect, useState } from "react";
import Notify from "../allUse/Toast";

const KosarContext = createContext();

export const KosarProvider = ({ children }) => {

    const [kosar, setKosar] = useState([]);
    const [kosarMennyiseg, setKosarMennyiseg] = useState(0);
    const [refresh, setRefresh] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const update = prev => setRefresh(!prev);

    const addToBasket = (jarmu) => {
        if (!kosar.includes(jarmu)) setKosar([...kosar, jarmu]); else Notify.tError("Ez az elem már a kosárban van!");
        // console.log(kosar);
    }



    return <KosarContext.Provider value={{
        kosar, setKosar,
        kosarMennyiseg, setKosarMennyiseg,
        update, refresh,
        isOpen, setIsOpen,
        addToBasket
    }}>{children}</KosarContext.Provider>

}


export default KosarContext;