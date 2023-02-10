import React, { useState, useEffect, createContext } from 'react';
import Norify from "../allUse/Toast";


const JarmuContext = createContext();

export const JarmuProvider = ({ children }) => {

    const [Refresh, setRefresh] = useState(false);
    const [IsLoading, setIsLoading] = useState(false);

    const [Jarmuvek, setJarmuvek] = useState(null);


    const update = () => setRefresh(prev => !prev);


    const FetchJarmuvek = async () => {
        setIsLoading(true);
        await fetch('http://localhost:8000/api/gepjarmuberles/gepjarmuvek/jarmuvek')
            .then(res => res.json())
            .then(data => setJarmuvek(data))
            .catch(err => console.log(err));
        setIsLoading(false);
    }


    return <JarmuContext.Provider value={{
        Refresh, update,
        IsLoading, setIsLoading,
        Jarmuvek, setJarmuvek,


    }}>{children}</JarmuContext.Provider>




}

export default JarmuContext;