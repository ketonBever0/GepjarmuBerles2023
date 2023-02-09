import '../css/form.css'
import { useContext, useEffect, useState } from 'react';
import JarmuContext from './context/jarmuContext';

const Form = () => {

    const [Markak, setMarkak] = useState(null);
    const [Modellek, setModellek] = useState(null);

    const [FormData, setFormData] = useState({
        marka: "",
        modell: "",
        ferohely: 0,
        jarmutipus: ""
    });


    const {
        IsLoading,
        Jarmuvek, setJarmuvek
    } = useContext(JarmuContext);


    useEffect(() => {
        fetch('http://localhost:8000/api/gepjarmuberles/gepjarmuvek/markak')
            .then(res => res.json())
            .then(data => setMarkak(data))
            .catch(err => console.log(err));
    })


    useEffect(() => {
        fetch('http://localhost:8000/api/gepjarmuberles/gepjarmuvek/')
            .then(res => res.json())
            .then(data => setMarkak(data))
            .catch(err => console.log(err));
    }, [FormData.marka])


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
                    {/* <input type="text" className="form-control" placeholder="Márka" /> */}
                    <select className="form-select" id='marka' onChange={handleChange} value={FormData.marka}>
                        <option selected value={null}>Márka</option>
                        {Markak && Markak.map((marka, index) => <option value={marka.marka} key={index}>{marka.marka}</option>)}
                    </select>
                </div>

                <div className="col">
                    {/* <input type="text" className="form-control" placeholder="Modell" /> */}
                    <select className="form-select" id='modell' onChange={handleChange} value={FormData.modell}>
                        <option selected value={null}>Modell</option>
                    </select>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col">
                    {/* <input type="text" className="form-control" placeholder="Járműtípus" /> */}
                    <select className="form-select" id='jarmutipus' onChange={handleChange} value={FormData.jarmutipus}>
                        <option selected value={null}>Járműtípus</option>
                    </select>
                </div>

                <div className="col">
                    {/* <input type="number" min={1} max={40} className="form-control" placeholder="Férőhely" /> */}
                    <select className="form-select" id='ferohely' onChange={handleChange} value={FormData.ferohely}>
                        <option selected value={null}>Férőhely</option>
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