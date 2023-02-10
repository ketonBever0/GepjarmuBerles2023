import { useContext } from 'react';
import '../css/vehicleform.css'
import FilterFormContext from './context/FilterFormContext';

const VehicleAddForm = () => {


    const { megyek } = useContext(FilterFormContext);

    let formObj = {
        rendszam: "",
        marka: "",
        modell: "",
        kmallas: 0,
        muszakiErvenyesseg: "",
        uzemanyagkapacitas: 0,
        ferohely: 0,
        kedvezmeny: 0,
        egyediAr: 0,
        gepjarmuTipus: "",
        thely: "",
        kepUrl: ""
    };

    const [formData, setFormData] = useState(formObj);

    const adatKuldes = (adat, method) => {
        const response = fetch('http://localhost:8000/api/gepjarmuberles/gepjarmuvek/jarmuvek', {
            method: method,
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(adat)
        });
        const valasz = response.json();
        if (valasz.message) {
            alert(valasz.message);
        }
        if (valasz.sqlMessage) {
            alert(valasz.sqlMessage);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        adatKuldes(formData, 'POST');
    }

    const writeData = (e) => {
        setFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
    }

    return (
        <div>
            <form class="w-100 bg-cyan2">
                <h5 class="text-dark p-4 text-center">Új gépjármű felvétele:</h5>
                <div class="container d-grid gap-5 p-5">
                    <div class="row">

                        <div class="col-sm bg-primary3 rounded">
                            <div class="form-group my-4 width-10rem mx-auto">
                                <label for="rendszam"><span class="redStar">* </span>Rendszám:</label>
                                <input onChange={writeData} required type="text" class="form-control bg-secondary2 border-secondary minwidth-50"
                                    id="rendszam" />
                            </div>
                        </div>

                        <div class="col-sm bg-secondary2 rounded">
                            <div class="form-group my-4 width-10rem mx-auto col">
                                <label for="marka">Márka:<span class="redStar text-right">*</span></label>
                                <input onChange={writeData} required type="text" class="form-control bg-secondary2 border-secondary minwidth-50" id="marka" />
                            </div>
                        </div>

                        <div class="col-sm bg-primary3 rounded">
                            <div class="form-group my-4 width-10rem mx-auto">
                                <label for="modell"><span class="redStar">* </span>Modell:</label>
                                <input onChange={writeData} required type="text" class="form-control bg-secondary2 border-secondary minwidth-50" id="modell" />
                            </div>
                        </div>

                        <div class="col-sm bg-secondary2 rounded">
                            <div class="form-group my-4 width-10rem mx-auto">
                                <label for="kmallas"><span class="redStar">* </span>Kilométeróra-állás:</label>
                                <input onChange={writeData} required type="text" class="form-control bg-secondary2 border-secondary minwidth-50" id="kmallas" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm bg-secondary2 rounded">
                            <div class="form-group my-4 width-10rem mx-auto ">
                                <label for="muszakiErvenyesseg"><span class="redStar">* </span>Műszaki érvényesség:</label>
                                <input onChange={writeData} required type="date" class="form-control bg-secondary2 border-secondary minwidth-50 pointer"
                                    id="muszakiErvenyesseg" />
                            </div>
                        </div>

                        <div class="col-sm bg-primary3 rounded">
                            <div class="form-group my-4 width-10rem mx-auto">
                                <label for="uzemanyagkapacitas" className='overflow'><span class="redStar">* </span>Üzemanyag-kapacitás:</label>
                                <input onChange={writeData} required type="number" class="form-control bg-secondary2 border-secondary minwidth-50"
                                    id="uzemanyagkapacitas" />
                            </div>
                        </div>

                        <div class="col-sm bg-secondary2 rounded">
                            <div class="form-group my-4 width-10rem mx-auto">
                                <label for="ferohely"><span class="redStar">* </span>Férőhely:</label>
                                <input onChange={writeData} required type="number" class="form-control bg-secondary2 border-secondary minwidth-50"
                                    id="ferohely" />
                            </div>
                        </div>

                        <div class="col-sm bg-primary3 rounded">
                            <div class="form-group my-4 width-10rem mx-auto">
                                <label for="kedvezmeny">Kedvezmény (%):</label>
                                <input onChange={writeData} type="number" placeholder="(opcionális)"
                                    class="form-control bg-secondary2 border-secondary minwidth-50" id="kedvezmeny" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm bg-primary3 rounded">
                            <div class="form-group my-4 width-10rem mx-auto">
                                <label for="egyediAr"><span class="redStar">* </span>Egyedi ár:</label>
                                <input onChange={writeData} type="number" placeholder="(opcionális)"
                                    class="form-control bg-secondary2 border-secondary minwidth-50" id="egyediAr" />
                            </div>
                        </div>

                        <div class="col-sm bg-primary3 rounded">
                            <div class="form-group my-4 width-10rem mx-auto">
                                <label for="gepjarmuTipus"><span class="redStar">* </span>Gépjármű típus:</label>
                                <select class="form-control bg-secondary2 border-secondary minwidth-50 pointer" required id="gepjarmuTipus">
                                    <option selected>Válassz...</option>
                                    <option value="személygépkocsi">Személygépkocsi</option>

                                </select>
                            </div>
                        </div>

                        <div class="col-sm bg-secondary2 rounded">
                            <div class="form-group my-4 width-10rem mx-auto">
                                <label for="thely"><span class="redStar">* </span>Telephely:</label>

                                <select onChange={writeData} class="form-control bg-secondary2 border-secondary minwidth-50 pointer" required id="thely">
                                    <option selected>Válassz...</option>
                                    {
                                        props.data.map((x, y) =>
                                            <option key={y}>{x}</option>)
                                    }
                                    <option>1</option>

                                </select>
                            </div>
                        </div>

                        <div class="col-sm bg-secondary2 rounded">
                            <div class="form-group my-4 width-10rem mx-auto">
                                <label for="kepUrl"><span class="redStar">* </span>Kép URL:</label>
                                <input onChange={writeData} type="text" class="form-control bg-secondary2 border-secondary minwidth-50"required
                                    id="kepUrl" />
                            </div>
                        </div>
                    </div>

                    <button onSubmit={onSubmit} type="button" class="btn btn-primary width-5rem m-auto" id="gepjarmuKuldesGomb">Küldés!</button>
                    <span> <i class="fas fa-info-circle text-xl"></i> <span className="redStar">*</span> A csillaggal megjelöltek kitöltése kötelező!</span>
                </div>
            </form>
        </div>
    )
}

export default VehicleAddForm