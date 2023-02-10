import React, { useState, useEffect, createContext } from 'react';
import Notify from '../allUse/Toast';


const FilterFormContext = createContext();

export const FilterFormProvider = ({ children }) => {


    const [Markak, setMarkak] = useState(null);
    const [Modellek, setModellek] = useState(null);
    const [Tipusok, setTipusok] = useState(null);
    const [Ferohelyek, setFerohelyek] = useState(null);

    const [FormData, setFormData] = useState({
        marka: "",
        modell: "",
        ferohely: 0,
        jarmutipus: ""
    });

    


    useEffect(() => {
        fetch('http://localhost:8000/api/gepjarmuberles/gepjarmuvek/markak')
            .then(res => res.json())
            .then(data => setMarkak(data))
            .catch(err => console.log(err));
    })


    useEffect(() => {
        setModellek(null);
        if (FormData.marka != "" || FormData.marka != null || FormData.marka != undefined) {
            fetch(`http://localhost:8000/api/gepjarmuberles/gepjarmuvek/modellek/marka/${FormData.marka}`)
                .then(res => res.json())
                .then(data => setModellek(data))
                .catch(err => console.log(err));
        }

    }, [FormData.marka])


    useEffect(() => {
        fetch('http://localhost:8000/api/gepjarmuberles/gepjarmutipusok')
            .then(res => res.json())
            .then(data => setTipusok(data))
            .catch(err => console.log(err));
    })


    useEffect(() => {
        fetch('http://localhost:8000/api/gepjarmuberles/gepjarmuvek/ferohelyek')
            .then(res => res.json())
            .then(data => setFerohelyek(data))
            .catch(err => console.log(err));
    })


    return <FilterFormContext.Provider value={{
        Markak, Modellek, Tipusok, Ferohelyek,
        FormData, setFormData
    }}>{children}</FilterFormContext.Provider>

}


export default FilterFormContext;