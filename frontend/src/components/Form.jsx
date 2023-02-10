import '../css/form.css'
import { useContext, useEffect, useState } from 'react';
import JarmuContext from './context/jarmuContext';
import FilterFormContext from './context/FilterFormContext';

const Form = () => {


    const {
        IsLoading,
        Jarmuvek, setJarmuvek
    } = useContext(JarmuContext);


    const {
        Markak, Modellek, Tipusok, Ferohelyek,
        FormData, setFormData
    } = useContext(FilterFormContext);




    



    const handleChange = (event) => {
        setFormData({
            ...FormData,
            [event.target.id]: event.target.value,
        });
    };


    return (
        <form>

            <div className="row mt-3">
                <div className="col">
                    <label htmlFor="marka">Márka</label>
                    <select className="form-select" id='marka' onChange={handleChange} value={FormData.marka}>
                        <option selected value={""}>Összes</option>
                        {Markak && Markak.map((marka, index) => <option value={marka.marka} key={index}>{marka.marka}</option>)}
                    </select>
                </div>

                <div className="col">
                    <label for="modell">Modell</label>
                    <select className="form-select" id='modell' onChange={handleChange} value={FormData.modell}>
                        <option selected value={null}>Összes</option>
                        {Modellek ? Modellek.map((modell, index) => <option value={modell.modell} key={index}>{modell.modell}</option>) : <option disabled>Válasszon márkát...</option>}
                    </select>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col">
                    <label for="jarmutipus">Járműtípus</label>
                    <select className="form-select" id='jarmutipus' onChange={handleChange} value={FormData.jarmutipus}>
                        <option selected value={null}>Összes</option>
                        {Tipusok && Tipusok.map((tipus, index) => <option value={tipus.gepjarmu_tipus} key={index}>{tipus.gepjarmu_tipus}</option>)}
                    </select>
                </div>

                <div className="col">
                    <label for="ferohely">Férőhely</label>
                    <select className="form-select" id='ferohely' onChange={handleChange} value={FormData.ferohely}>
                        <option selected value={null}>Összes</option>
                        {Ferohelyek && Ferohelyek.map((ferohely, index) => <option value={ferohely.ferohely} key={index}>{ferohely.ferohely}</option>)}
                    </select>
                </div>
            </div>

            <div className="row mt-3 d-flex justify-content-center align-items-center">
                <button type="submit" className="btn btn-primary">Keresés</button>
            </div>

        </form>
    )
}

export default Form