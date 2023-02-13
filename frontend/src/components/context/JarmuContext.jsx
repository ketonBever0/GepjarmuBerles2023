import React, { useState, useEffect, createContext } from 'react';
import Norify from "../allUse/Toast";


const JarmuContext = createContext();

export const JarmuProvider = ({ children }) => {

    const [refresh, setRefresh] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [jarmuvek, setJarmuvek] = useState(null);


    const update = () => setRefresh(prev => !prev);

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


    return <JarmuContext.Provider value={{
        refresh, update,
        isLoading, setIsLoading,
        jarmuvek, setJarmuvek,
        fetchJarmuvek,
        osszesJarmu, setOsszesJarmu

    }}>{children}</JarmuContext.Provider>




}

export default JarmuContext;