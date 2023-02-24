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


    const sendRent = async (data) => {
        // console.log(products);

        data != null && data.length != 0 &&
            data.kosar.map(async (item, index) => {
                // sendRentToApi(product);
                await fetch('http://localhost:8000/api/gepjarmuberles/berlesnyugtak/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: {
                        berlesKezdete: data.rentalTimes.berlesKezdete,
                        berlesVege: null,
                        idotartam: data.rentalTimes.idotartam == null || data.rentalTimes.idotartam == 0 ? null : data.rentalTimes.idotartam,
                        gepjarmu_allapot: null,
                        uzemanyagszint: null,
                        napiDij: item.egyedi_ar || item.kategoria_ar,
                        kedvezmeny: item.kedvezmeny || null,
                        bloId: data.userData.id,
                        gjuId: item.id

                    }
                })
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