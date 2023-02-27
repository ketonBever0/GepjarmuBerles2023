import React, { useState, useEffect, createContext } from 'react';
import Notify from '../allUse/Toast';


const FilterFormContext = createContext();

export const FilterFormProvider = ({ children }) => {


    const [markak, setMarkak] = useState(null);
    const [modellek, setModellek] = useState(null);
    const [tipusok, setTipusok] = useState(null);
    const [ferohelyek, setFerohelyek] = useState(null);
    const [telephelyek, setTelephelyek] = useState([]);

    const [formData, setFormData] = useState({
        marka: "",
        modell: "",
        ferohely: 0,
        jarmutipus: "",
        onlyAvailable: true
    });




    useEffect(() => {
        fetch('http://localhost:8000/api/gepjarmuberles/gepjarmuvek/markak')
            .then(res => res.json())
            .then(data => setMarkak(data))
            .catch(err => console.log(err));
    })


    useEffect(() => {
        setModellek(null);
        if (formData.marka == "" || formData.marka == null || formData.marka == undefined) {
            return
        }
        fetch(`http://localhost:8000/api/gepjarmuberles/gepjarmuvek/modellek/marka/${formData.marka}`)
            .then(res => res.json())
            .then(data => setModellek(data))
            .catch(err => console.log(err));
        // console.log(formData.marka);

    }, [formData.marka])


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

    useEffect(() => {
        fetch('http://localhost:8000/api/gepjarmuberles/gepjarmuvek/telephelyek')
            .then(res => res.json())
            .then(data => setTelephelyek(data))
            .catch(err => console.log(err));
    })


    return <FilterFormContext.Provider value={{
        markak, modellek, tipusok, ferohelyek,
        formData, setFormData, telephelyek, setTelephelyek
    }}>{children}</FilterFormContext.Provider>

}


export default FilterFormContext;