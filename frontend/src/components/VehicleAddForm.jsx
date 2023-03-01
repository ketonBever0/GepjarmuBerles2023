import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/vehicleform.css'
import FilterFormContext from './context/FilterFormContext';

const VehicleAddForm = () => {


    const { tipusok, telephelyek } = useContext(FilterFormContext);


    const [formData, setFormData] = useState({
        rendszam: "",
        marka: "",
        modell: "",
        kmallas: 0,
        muszakiErvenyesseg: "",
        uzemanyagkapacitas: 0,
        ferohely: 0,
        kedvezmeny: null,
        egyediAr: null,
        gepjarmuTipus: "",
        thely: "",
    });

    const [file, setFile] = useState(null);

    const adatKuldes = (adat, method) => {

        if (!file) return;

        var fd = new FormData();
        fd.append('form', JSON.stringify(adat));
        fd.append('filename', file.name);
        fd.append('file', file);


        fetch('http://localhost:8000/api/gepjarmuberles/gepjarmuvek/jarmuvek', {
            method: method,
            // headers: { 'Content-type': 'multipart/form-data' },  Öcséém agyam eldobom 😂😂
            body: fd
        })
            .then(response => response.json())
            .then(response => console.log(JSON.stringify(response)))
            .catch(err => console.log(err));


    }

    const onSubmit = (e) => {
        e.preventDefault();
        adatKuldes(formData, 'POST');
    }

    const writeData = (e) => {
        setFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
        // console.log(e.target.value, e.target.type);
    }

    const navigate = useNavigate();
    const token = sessionStorage.getItem('usertoken');

    useEffect(() => {
        if (!token) navigate('/login');
    }, [])


    return (
        <div>
            <form onSubmit={onSubmit} className="w-100 bg-cyan2">
                <h5 className="text-dark p-4 text-center">Új gépjármű felvétele:</h5>
                <div className="container d-grid gap-5 p-5">
                    <div className="row">

                        <div className="col-sm bg-primary3 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="rendszam"><span className="redStar">* </span>Rendszám:</label>
                                <input onChange={writeData} required type="text" className="form-control bg-secondary2 border-secondary minwidth-50"
                                    id="rendszam" />
                            </div>
                        </div>

                        <div className="col-sm bg-secondary2 rounded">
                            <div className="form-group my-4 width-10rem mx-auto col">
                                <label htmlFor="marka">Márka:<span className="redStar text-right">*</span></label>
                                <input onChange={writeData} required type="text" className="form-control bg-secondary2 border-secondary minwidth-50" id="marka" />
                            </div>
                        </div>

                        <div className="col-sm bg-primary3 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="modell"><span className="redStar">* </span>Modell:</label>
                                <input onChange={writeData} required type="text" className="form-control bg-secondary2 border-secondary minwidth-50" id="modell" />
                            </div>
                        </div>

                        <div className="col-sm bg-secondary2 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="kmallas"><span className="redStar">* </span>Kilométeróra-állás:</label>
                                <input onChange={writeData} required type="number" className="form-control bg-secondary2 border-secondary minwidth-50" id="kmallas" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm bg-secondary2 rounded">
                            <div className="form-group my-4 width-10rem mx-auto ">
                                <label htmlFor="muszakiErvenyesseg"><span className="redStar">* </span>Műszaki érvényesség:</label>
                                <input onChange={writeData} required type="date" className="form-control bg-secondary2 border-secondary minwidth-50 pointer"
                                    id="muszakiErvenyesseg" />
                            </div>
                        </div>

                        <div className="col-sm bg-primary3 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="uzemanyagkapacitas" className='overflow'><span className="redStar">* </span>Üzemanyag-kapacitás:</label>
                                <input onChange={writeData} required type="number" className="form-control bg-secondary2 border-secondary minwidth-50"
                                    id="uzemanyagkapacitas" />
                            </div>
                        </div>

                        <div className="col-sm bg-secondary2 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="ferohely"><span className="redStar">* </span>Férőhely:</label>
                                <input onChange={writeData} required type="number" className="form-control bg-secondary2 border-secondary minwidth-50"
                                    id="ferohely" />
                            </div>
                        </div>

                        <div className="col-sm bg-primary3 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="kedvezmeny">Kedvezmény (%):</label>
                                <input onChange={e => setFormData({
                                    ...formData,
                                    [e.target.id]: (e.target.value == 0 || e.target.value == "") ? null : e.target.value
                                })
                                } type="number" placeholder="(opcionális)"
                                    className="form-control bg-secondary2 border-secondary minwidth-50" id="kedvezmeny" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm bg-primary3 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="egyediAr">Egyedi ár:</label>
                                <input onChange={e => setFormData({
                                    ...formData,
                                    [e.target.id]: (e.target.value == 0 || e.target.value == "") ? null : e.target.value
                                })
                                } type='number' placeholder="(opcionális)"
                                    className="form-control bg-secondary2 border-secondary minwidth-50" id="egyediAr" />
                            </div>
                        </div>

                        <div className="col-sm bg-secondary2 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="gepjarmuTipus"><span className="redStar">* </span>Gépjármű típus:</label>
                                <select onChange={writeData} className="form-control bg-secondary2 border-secondary minwidth-50 pointer" defaultValue={""} required id="gepjarmuTipus">
                                    <option value={""} disabled>Válasszon...</option>
                                    {
                                        tipusok && tipusok.map((tipus, index) => (<option key={index} value={tipus.gepjarmu_tipus}>{tipus.gepjarmu_tipus}</option>))
                                    }

                                </select>
                            </div>
                        </div>

                        <div className="col-sm bg-primary3 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="thely"><span className="redStar">* </span>Telephely:</label>

                                <select onChange={writeData} className="form-control bg-secondary2 border-secondary minwidth-50 pointer" id="thely" defaultValue={""} required>
                                    <option value={""} disabled>Válasszon...</option>
                                    {
                                        telephelyek && telephelyek.map((telephely, index) => (<option key={index} value={telephely.id}>{telephely.telepules_neve}</option>))
                                    }

                                </select>
                            </div>
                        </div>

                    </div>
                    {/* <div className="col-sm bg-secondary2 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="kepUrl"><span className="redStar">* </span>Kép:</label>
                                <input onChange={writeData} type="file" className="custom-file-input bg-secondary2 border-secondary minwidth-50" required
                                    id="kepUrl" />
                            </div>
                        </div> */}

                    <div className="input-group mb-3 bg-primary3 rounded">
                        <div className="rounded my-4 width-10rem mx-auto">
                            <label className="custom-file-label" htmlFor="kepUrl"><span className="redStar">* </span>Kép:</label>
                            <input id="kepUrl" onChange={e => setFile(e.target.files[0])} type="file" className="custom-file-input" />
                        </div>
                    </div>

                    <input type="submit" value={"Küldés!"} className="btn btn-primary width-5rem border-secondary bg-secondary2" id="gepjarmuKuldesGomb"></input>
                    <span> <i className="fas fa-info-circle text-xl"></i> <span className="redStar">*</span> A csillaggal megjelöltek kitöltése kötelező!</span>
                </div>
            </form>
        </div>
    )
}

export default VehicleAddForm