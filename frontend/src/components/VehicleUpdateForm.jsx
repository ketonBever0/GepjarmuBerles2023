import { useContext, useState } from 'react';
import FilterFormContext from './context/FilterFormContext';
import JarmuContext from './context/JarmuContext';

const VehicleUpdateForm = () => {

    const {adatObj, tipusok} = useContext(JarmuContext);    //megkaptuk az adott gépjármű adatokat a Contextből, ennek a propjait (pl. rendszám) használhatjuk arra, hogy az input mezőkbe beletegyük value-ként a módosítandó gépj. adatait

    let formObj = {
        id: 0,
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
        fetch('http://localhost:8000/api/gepjarmuberles/gepjarmuvek/jarmuvek', {
            method: method,
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(adat)
        })
            .then(response => response.json())
            .then(response => console.log(JSON.stringify(response)))
            .then(console.log(adat))
            .catch(err => console.log(err));

    }

    const onSubmit = (e) => {
        e.preventDefault();
        adatKuldes(formData, 'PATCH');
    }

    const writeData = (e) => {
        setFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
        console.log(e.target.value, e.target.type);
    }

    // const logging = () => {
    //     console.log("adatObj adat: ", adatObj);
    // }

    return (
        <div>
            {/* <button onClick={logging} className='btn btn-info'>Mutasd az adatObj state-jét</button> */}

            <form onSubmit={onSubmit} className="w-100 bg-cyan2">
                <h5 className="text-dark p-4 text-center">Gépjármű módosítása:</h5>
                <div className="container d-grid gap-5 p-5">
                    <div className="row">

                        <div className="col-sm bg-primary3 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="rendszam"><span className="redStar">* </span>Rendszám:</label>
                                <input onChange={writeData} required type="text" className="form-control bg-secondary2 border-secondary minwidth-50"
                                    id="rendszam" value={adatObj.gepj.rendszam} />
                            </div>
                        </div>

                        <div className="col-sm bg-secondary2 rounded">
                            <div className="form-group my-4 width-10rem mx-auto col">
                                <label htmlFor="marka">Márka:<span className="redStar text-right">*</span></label>
                                <input onChange={writeData} required type="text" className="form-control bg-secondary2 border-secondary minwidth-50" id="marka" value={adatObj.gepj.marka} />
                            </div>
                        </div>

                        <div className="col-sm bg-primary3 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="modell"><span className="redStar">* </span>Modell:</label>
                                <input onChange={writeData} required type="text" className="form-control bg-secondary2 border-secondary minwidth-50" id="modell" value={adatObj.gepj.modell} />
                            </div>
                        </div>

                        <div className="col-sm bg-secondary2 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="kmallas"><span className="redStar">* </span>Kilométeróra-állás:</label>
                                <input onChange={writeData} required type="number" className="form-control bg-secondary2 border-secondary minwidth-50" id="kmallas" value={adatObj.gepj.kmallas} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm bg-secondary2 rounded">
                            <div className="form-group my-4 width-10rem mx-auto ">
                                <label htmlFor="muszakiErvenyesseg"><span className="redStar">* </span>Műszaki érvényesség:</label>
                                <input onChange={writeData} required type="date" className="form-control bg-secondary2 border-secondary minwidth-50 pointer" id="muszakiErvenyesseg" value={adatObj.gepj.muszakiErvenyesseg} />
                            </div>
                        </div>

                        <div className="col-sm bg-primary3 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="uzemanyagkapacitas" className='overflow'><span className="redStar">* </span>Üzemanyag-kapacitás:</label>
                                <input onChange={writeData} required type="number" className="form-control bg-secondary2 border-secondary minwidth-50"
                                    id="uzemanyagkapacitas" value={adatObj.gepj.uzemanyagkapacitas} />
                            </div>
                        </div>

                        <div className="col-sm bg-secondary2 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="ferohely"><span className="redStar">* </span>Férőhely:</label>
                                <input onChange={writeData} required type="number" className="form-control bg-secondary2 border-secondary minwidth-50"
                                    id="ferohely"  value={adatObj.gepj.ferohely}/>
                            </div>
                        </div>

                        <div className="col-sm bg-primary3 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="kedvezmeny">Kedvezmény (%):</label>
                                <input onChange={writeData} type="number" placeholder="(opcionális)"
                                    className="form-control bg-secondary2 border-secondary minwidth-50" id="kedvezmeny"  value={adatObj.gepj.kedvezmeny}/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm bg-primary3 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="egyediAr"><span className="redStar">* </span>Egyedi ár:</label>
                                <input onChange={writeData} type='number' placeholder="(opcionális)"
                                    className="form-control bg-secondary2 border-secondary minwidth-50" id="egyediAr"  value={adatObj.gepj.egyediAr}/>
                            </div>
                        </div>

                        <div className="col-sm bg-secondary2 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="gepjarmuTipus"><span className="redStar">* </span>Gépjármű típus:</label>
                                <select defaultValue={adatObj.gepj.gepjarmu_tipus} onChange={writeData} className="form-control bg-secondary2 border-secondary minwidth-50 pointer" required id="gepjarmuTipus">
                                    {
                                        tipusok && tipusok.map((tipus, index) => (<option key={index} value={tipus.gepjarmu_tipus}>{tipus.gepjarmu_tipus}</option>))
                                    }

                                </select>
                            </div>
                        </div>

                        <div className="col-sm bg-primary3 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="thely"><span className="redStar">* </span>Telephely:</label>

                                <select onChange={writeData} className="form-control bg-secondary2 border-secondary minwidth-50 pointer" required id="thely">
                                    {/* { select-ben defaultvalue={adatObj.gepj.}
                                        telephelyek && telephelyek.map((telephely, index) => (<option key={index} value={telephely.id}>{telephely.telepules_neve}</option>))
                                    } */}

                                </select>
                            </div>
                        </div>

                        <div className="col-sm bg-secondary2 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="kepUrl"><span className="redStar">* </span>Kép URL:</label>
                                <input onChange={writeData} type="text" className="form-control bg-secondary2 border-secondary minwidth-50" required
                                    id="kepUrl" />
                            </div>
                        </div>
                    </div>

                    <input type="submit" value={"Küldés!"} className="btn btn-primary width-5rem m-auto" id="gepjarmuKuldesGomb"></input>
                    <span> <i className="fas fa-info-circle text-xl"></i> <span className="redStar">*</span> A csillaggal megjelöltek kitöltése kötelező!</span>
                </div>
            </form>
        </div>
    )
}

export default VehicleUpdateForm