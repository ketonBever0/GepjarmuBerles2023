import '../css/form.css'
import { useContext, useEffect, useState } from 'react';
import JarmuContext from './context/jarmuContext';
import FilterFormContext from './context/FilterFormContext';

const Form = () => {


    const {
        isLoading,
        jarmuvek, setJarmuvek,
        fetchJarmuvek,
        update
    } = useContext(JarmuContext);


    const {
        markak, modellek, tipusok, ferohelyek,
        formData, setFormData
    } = useContext(FilterFormContext);



    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value,
        });
        update();
    };

    useEffect(() => {
        // if (formData.marka == "") {
        setFormData({
            ...formData,
            modell: ""
        })
        // }
    }, [formData.marka])


    // const onSubmit = async (e) => {
    //     e.preventDefault();
    //     setJarmuvek(null);
    //     const { marka, modell, jarmutious, ferohely } = formData;
    // }


    return (
        <form>

            <div className="row mt-3">
                <div className="col">
                    <label htmlFor="marka">Márka</label>
                    <select className="form-select" id='marka' onChange={handleChange} value={formData.marka}>
                        <option defaultValue value={""}>Összes</option>
                        {markak && markak.map((marka, index) => <option value={marka.marka} key={index}>{marka.marka}</option>)}
                    </select>
                </div>

                <div className="col">
                    <label htmlFor="modell">Modell</label>
                    <select className="form-select" id='modell' onChange={handleChange} value={formData.modell}>
                        <option defaultValue value={""}>Összes</option>
                        {modellek ? modellek.map((modell, index) => <option value={modell.modell} key={index}>{modell.modell}</option>) : <option disabled>Válasszon márkát...</option>}
                    </select>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col">
                    <label htmlFor="jarmutipus">Járműtípus</label>
                    <select className="form-select" id='jarmutipus' onChange={handleChange} value={formData.jarmutipus}>
                        <option defaultValue value={""}>Összes</option>
                        {tipusok && tipusok.map((tipus, index) => <option value={tipus.gepjarmu_tipus} key={index}>{tipus.gepjarmu_tipus}</option>)}
                    </select>
                </div>

                <div className="col">
                    <label htmlFor="ferohely">Férőhely</label>
                    <select className="form-select" id='ferohely' onChange={handleChange} value={formData.ferohely}>
                        <option defaultValue value={0}>Összes</option>
                        {ferohelyek && ferohelyek.map((ferohely, index) => <option value={ferohely.ferohely} key={index}>{ferohely.ferohely}</option>)}
                    </select>
                </div>
            </div>

            <div className="row mt-3 d-flex justify-content-center align-items-center">
                {/* <button type="submit" className="btn btn-primary">Keresés</button> */}
            </div>

        </form>
    )
}

export default Form