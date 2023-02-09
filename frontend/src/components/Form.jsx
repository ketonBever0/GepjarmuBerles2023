import '../css/form.css'
import { useContext, useEffect, useState } from 'react';
import JarmuContext from './context/jarmuContext';

const Form = () => {

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
                    <label for="marka">Márka</label>
                    <select className="form-select" id='marka' onChange={handleChange} value={FormData.marka}>
                        <option selected value={""}>Összes</option>
                        {Markak && Markak.map((marka, index) => <option value={marka.marka} key={index}>{marka.marka}</option>)}
                    </select>
                </div>

                <div className="col">
                    {/* <input type="text" className="form-control" placeholder="Modell" /> */}
                    <label for="modell">Modell</label>
                    <select className="form-select" id='modell' onChange={handleChange} value={FormData.modell}>
                        <option selected value={null}>Összes</option>
                        {Modellek ? Modellek.map((modell, index) => <option value={modell.modell} key={index}>{modell.modell}</option>) : <option disabled>Válasszon márkát...</option>}
                    </select>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col">
                    {/* <input type="text" className="form-control" placeholder="Járműtípus" /> */}
                    <label for="jarmutipus">Járműtípus</label>
                    <select className="form-select" id='jarmutipus' onChange={handleChange} value={FormData.jarmutipus}>
                        <option selected value={null}>Összes</option>
                        {Tipusok && Tipusok.map((tipus, index) => <option value={tipus.gepjarmu_tipus} key={index}>{tipus.gepjarmu_tipus}</option>)}
                    </select>
                </div>

                <div className="col">
                    {/* <input type="number" min={1} max={40} className="form-control" placeholder="Férőhely" /> */}
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