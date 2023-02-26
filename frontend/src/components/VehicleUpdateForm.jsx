import { useContext, useState, useEffect } from 'react';
import FilterFormContext from './context/FilterFormContext';
import JarmuContext from './context/JarmuContext';
import UserContext from './context/UserContext';
import UpdateBtn from './Items/UpdateBtn';
import Notify from './allUse/Toast';
import { useNavigate } from 'react-router-dom';

const VehicleUpdateForm = () => {

    const navigate = useNavigate();

    const { update } = useContext(JarmuContext);

    //megkaptuk az adott gépjármű adatokat a Contextből, ennek a propjait (pl. rendszám) használhatjuk arra, hogy az input mezőkbe beletegyük value-ként a módosítandó gépj. adatait

    let adatSSN = sessionStorage.getItem('adatSSN');

    var adatSSNObj = JSON.parse(adatSSN);

    const { tipusok, telephelyek } = useContext(FilterFormContext);

    const addLeadingZero = (digit) => {
        var intDigit = parseInt(digit);
        if (intDigit < 10) {
            return ('0' + intDigit)
        } else {
            return (digit)
        }
    }

    const stringToDate = (toBeParsedString) => {
        const myDate = new Date(toBeParsedString);
        const myYear = myDate.getFullYear();
        const myMonth = myDate.getMonth() + 1;
        const myDay = myDate.getDate();
        return (myYear + '-' + addLeadingZero(myMonth) + '-' + addLeadingZero(myDay));
    }

    let formObj = {     //alaphelyzetben a formObj adatai a beérkezett gépjármű adatai.
        id: adatSSNObj.gepj.id,
        rendszam: adatSSNObj.gepj.rendszam,
        marka: adatSSNObj.gepj.marka,
        modell: adatSSNObj.gepj.modell,
        kmallas: adatSSNObj.gepj.kilometerora_allas,
        muszakiErvenyesseg: stringToDate(adatSSNObj.gepj.muszaki_ervenyesseg),
        uzemanyagkapacitas: adatSSNObj.gepj.uzemanyag_kapacitas,
        ferohely: adatSSNObj.gepj.ferohely,
        kedvezmeny: adatSSNObj.gepj.kedvezmeny,
        egyediAr: adatSSNObj.gepj.egyedi_ar,
        gepjarmuTipus: adatSSNObj.gepj.aka_gepjarmu_tipus,
        thely: adatSSNObj.gepj.thly_id,
        kepUrl: adatSSNObj.gepj.kep_url
    };

    const [formData, setFormData] = useState(formObj);

    const adatKuldes = (adat, method) => {
        fetch('http://localhost:8000/api/gepjarmuberles/gepjarmuvek/jarmuvek', {
            method: method,
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(adat)
        })
            .then(response => console.log(JSON.stringify(response)))  
            .then(Notify.tSuccess('Sikeres módosítás!'))
            .then(navigate('/katalogus'))
            .then(update())
            .catch(err => Notify.tError(err));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        adatKuldes(formData, 'PATCH');
    }

    const writeData = (e) => {
        setFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
    }



    const logging = () => {
        console.log(adatSSNObj, formData);
    }

    return (
        <div>
            <button onClick={logging} className='btn btn-info'>Mutasd az adatObj state-jét</button>

            <form onSubmit={onSubmit} className="w-100 bg-cyan2">
                <h5 className="text-dark p-4 text-center">Gépjármű módosítása:</h5>
                <div className="container d-grid gap-5 p-5">
                    <div className="row">

                        <div className="col-sm bg-primary3 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="rendszam"><span className="redStar">* </span>Rendszám:</label>
                                <input onChange={writeData} required type="text" className="form-control bg-secondary2 border-secondary minwidth-50"
                                    id="rendszam"
                                    defaultValue={adatSSNObj.gepj.rendszam}
                                />
                            </div>
                        </div>

                        <div className="col-sm bg-secondary2 rounded">
                            <div className="form-group my-4 width-10rem mx-auto col">
                                <label htmlFor="marka">Márka:<span className="redStar text-right">*</span></label>
                                <input onChange={writeData} required type="text" className="form-control bg-secondary2 border-secondary minwidth-50" id="marka"
                                    defaultValue={adatSSNObj.gepj.marka}
                                />
                            </div>
                        </div>

                        <div className="col-sm bg-primary3 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="modell"><span className="redStar">* </span>Modell:</label>
                                <input onChange={writeData} required type="text" className="form-control bg-secondary2 border-secondary minwidth-50" id="modell"
                                    defaultValue={adatSSNObj.gepj.modell}
                                />
                            </div>
                        </div>

                        <div className="col-sm bg-secondary2 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="kmallas"><span className="redStar">* </span>Kilométeróra-állás:</label>
                                <input onChange={writeData} required type="number" className="form-control bg-secondary2 border-secondary minwidth-50" id="kmallas"
                                    defaultValue={adatSSNObj.gepj.kilometerora_allas}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm bg-secondary2 rounded">
                            <div className="form-group my-4 width-10rem mx-auto ">
                                <label htmlFor="muszakiErvenyesseg"><span className="redStar">* </span>Műszaki érvényesség:</label>
                                <input onChange={writeData} required type="date" className="form-control bg-secondary2 border-secondary minwidth-50 pointer" id="muszakiErvenyesseg"
                                    defaultValue={stringToDate(adatSSNObj.gepj.muszaki_ervenyesseg)}
                                />
                            </div>
                        </div>

                        <div className="col-sm bg-primary3 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="uzemanyagkapacitas" className='overflow'><span className="redStar">* </span>Üzemanyag-kapacitás:</label>
                                <input onChange={writeData} required type="number" className="form-control bg-secondary2 border-secondary minwidth-50"
                                    id="uzemanyagkapacitas"
                                    defaultValue={adatSSNObj.gepj.uzemanyag_kapacitas}
                                />
                            </div>
                        </div>

                        <div className="col-sm bg-secondary2 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="ferohely"><span className="redStar">* </span>Férőhely:</label>
                                <input onChange={writeData} required type="number" className="form-control bg-secondary2 border-secondary minwidth-50"
                                    id="ferohely"
                                    defaultValue={adatSSNObj.gepj.ferohely}
                                />
                            </div>
                        </div>

                        <div className="col-sm bg-primary3 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="kedvezmeny">Kedvezmény (%):</label>
                                <input onChange={writeData} type="number" placholder="(opcionális)"
                                    className="form-control bg-secondary2 border-secondary minwidth-50" id="kedvezmeny"
                                    defaultValue={adatSSNObj.gepj.kedvezmeny}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm bg-primary3 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="egyediAr">Egyedi ár:</label>
                                <input onChange={writeData} type='number'
                                    className="form-control bg-secondary2 border-secondary minwidth-50" id="egyediAr"
                                    placeholder={`(opcionális)`}
                                    defaultValue={adatSSNObj.gepj.egyedi_ar}
                                />
                            </div>
                        </div>

                        <div className="col-sm bg-secondary2 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="gepjarmuTipus"><span className="redStar">* </span>Gépjármű típus:</label>
                                <select
                                    defaultValue={adatSSNObj.gepj.aka_gepjarmu_tipus}
                                    onChange={writeData} className="form-control bg-secondary2 border-secondary minwidth-50 pointer" required id="gepjarmuTipus">
                                    {
                                        tipusok && tipusok.map((tipus, index) => (<option key={index} value={tipus.gepjarmu_tipus}>{tipus.gepjarmu_tipus}</option>))
                                    }

                                </select>
                            </div>
                        </div>

                        <div className="col-sm bg-primary3 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="thely"><span className="redStar">* </span>Telephely:</label>

                                <select
                                    defaultValue={adatSSNObj.gepj.thly_id}
                                    onChange={writeData} className="form-control bg-secondary2 border-secondary minwidth-50 pointer" required id="thely">
                                    {
                                        telephelyek && telephelyek.map((telephely, index) => (<option key={index} value={telephely.id}>{telephely.telepules_neve}</option>))
                                    }

                                </select>
                            </div>
                        </div>

                        <div className="col-sm bg-secondary2 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="kepUrl"><span className="redStar">* </span>Kép URL:</label>
                                <input onChange={writeData} type="text" className="form-control bg-secondary2 border-secondary minwidth-50" required
                                    id="kepUrl"
                                    defaultValue={adatSSNObj.gepj.kep_url}
                                />
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