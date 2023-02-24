import { createContext, useEffect, useState } from "react";
import Notify from "../allUse/Toast";

const KosarContext = createContext();

export const KosarProvider = ({ children }) => {

    const [kosar, setKosar] = useState([]);
    const [kosarMennyiseg, setKosarMennyiseg] = useState(0);
    const [refresh, setRefresh] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [kosarBackup, setKosarBackup] = useState(null);

    const update = prev => setRefresh(!prev);

    const addToBasket = (jarmu) => {
        if (!kosar.includes(jarmu)) setKosar([...kosar, jarmu]); else Notify.tError("Ez az jármű már a kosárban van!");
        // console.log(kosar);
    }


    // useEffect(() => {
    //     localStorage.setItem("kosarBackup", kosar);
    // }, [kosar])

    const sendRentToApi = async (product) => {
        await fetch('http:/localhost:8000/api/gepjarmuberles/berlesnyugtak/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                berlesKezdete: "",
                berlesVege: null,
                idotartam: "",
                gepjarmu_allapot: null,
                uzemanyagszint: null,
                napiDij: "",
                kedvezmeny: "",
                bloId: "",
                gjuId: ""

            }
        })
    }


    const sendRent = async (products) => {
        // console.log(products);

        products != null && products.length != 0 &&
            products.map((product, index) => {
                console.log(product);
            });
    }

    return <KosarContext.Provider value={{
        kosar, setKosar,
        kosarMennyiseg, setKosarMennyiseg,
        update, refresh,
        isOpen, setIsOpen,
        addToBasket,
        kosarBackup, setKosarBackup,
        sendRent
    }}>{children}</KosarContext.Provider>

}


export default KosarContext;