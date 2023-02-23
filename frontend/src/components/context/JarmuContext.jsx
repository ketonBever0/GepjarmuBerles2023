import React, { useState, useEffect, createContext } from 'react';
import Notify from "../allUse/Toast";


const JarmuContext = createContext();

export const JarmuProvider = ({ children }) => {

    const [refresh, setRefresh] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const [jarmuvek, setJarmuvek] = useState(null);

    const update = prev => setRefresh(!prev);

    const [osszesJarmu, setOsszesJarmu] = useState(null);



    const fetchJarmuvek = async () => {
        setIsLoading(true);
        await fetch('http://localhost:8000/api/gepjarmuberles/gepjarmuvek/jarmuvek')
            .then(res => res.json())
            .then(data => setOsszesJarmu(data))
            .catch(err => console.log(err));
        setIsLoading(false);
        // console.log(osszesJarmu);
    }

    const logout = () => {
        // let kerdes = window.confirm("Biztosan ki szeretne lépni?");
        // if (kerdes) {
            sessionStorage.removeItem('usertoken');
            update();
        // }

    }

    const [adatObj, setAdatObj] = useState({});     //adatObj lesz az adott gépjármű adat objektum

    const settingCurrentVehicle = (adat) => {      //beállítjuk a gépjármű adatokat itt, hogy az elérhető legyen az update felületnek (VehicleUpdateForm)
        setAdatObj(adat);
    }

    return <JarmuContext.Provider value={{
        refresh, update,
        isLoading, setIsLoading,
        jarmuvek, setJarmuvek,
        fetchJarmuvek,
        osszesJarmu, setOsszesJarmu,
        logout, adatObj, settingCurrentVehicle

    }}>{children}</JarmuContext.Provider>

}

export default JarmuContext;