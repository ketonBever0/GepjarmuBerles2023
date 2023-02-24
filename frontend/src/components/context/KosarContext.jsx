import { createContext, useEffect, useState } from "react";
import Notify from "../allUse/Toast";

const KosarContext = createContext();

export const KosarProvider = ({ children }) => {

    const [kosar, setKosar] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [kosarBackup, setKosarBackup] = useState(null);
    const [rentalData, setRentalData] = useState(null);

    const update = prev => setRefresh(!prev);

    const addToBasket = (jarmu) => {
        if (!kosar.includes(jarmu)) setKosar([...kosar, jarmu]); else Notify.tError("Ez az jármű már a kosárban van!");
        // console.log(kosar);
    }


    // useEffect(() => {
    //     localStorage.setItem("kosarBackup", kosar);
    // }, [kosar])

    const sendRentToApi = async (product) => {
        console.log(product);
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
                napiDij: product.egyedi_ar || kategoria_ar,
                kedvezmeny: product.kedvezmeny || null,
                bloId: "",
                gjuId: product.id

            }
        })
    }


    const sendRent = async (products) => {
        // console.log(products);

        products != null && products.length != 0 &&
            products.map((product, index) => {
                sendRentToApi(product);
            });
    }

    return <KosarContext.Provider value={{
        kosar, setKosar,
        update, refresh,
        isOpen, setIsOpen,
        addToBasket,
        kosarBackup, setKosarBackup,
        rentalData, setRentalData,
        sendRent
    }}>{children}</KosarContext.Provider>

}


export default KosarContext;