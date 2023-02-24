import { useContext, useState } from 'react';
import FilterFormContext from './context/FilterFormContext';
import JarmuContext from './context/JarmuContext';
import UserContext from './context/UserContext';
import UpdateBtn from './Items/UpdateBtn';
import Notify from './allUse/Toast';

const VehicleUpdateForm = () => {

    const {adatObj} = useContext(UserContext);    //megkaptuk az adott gépjármű adatokat a Contextből, ennek a propjait (pl. rendszám) használhatjuk arra, hogy az input mezőkbe beletegyük value-ként a módosítandó gépj. adatait
    



    const {tipusok, telephelyek} = useContext(FilterFormContext);
    
    const addLeadingZero = (digit) => {
        var intDigit = parseInt(digit);
        if (intDigit < 10) {
            return ('0'+intDigit)
        }
    }

    const stringToDate = (toBeParsedString) => {
        const myDate = new Date(toBeParsedString);
        
        const myYear = myDate.getFullYear();
        const myMonth = myDate.getMonth();
        const myDay = myDate.getDay();
        return ( myYear + '-' + addLeadingZero(myMonth) + '-' + addLeadingZero(myDay) );
    }

    

    let formObj = {     //alaphelyzetben a formObj adatai a beérkezett gépjármű adatai.
        id: adatObj.gepj.id,
        rendszam: adatObj.gepj.rendszam,
        marka: adatObj.gepj.marka,
        modell: adatObj.gepj.modell,
        kmallas: adatObj.gepj.kilometerora_allas,
        muszakiErvenyesseg: stringToDate(adatObj.gepj.muszaki_ervenyesseg),
        uzemanyagkapacitas: adatObj.gepj.uzemanyag_kapacitas,
        ferohely: adatObj.gepj.ferohely,
        kedvezmeny: adatObj.gepj.kedvezmeny,
        egyediAr: adatObj.gepj.egyedi_ar,
        gepjarmuTipus: adatObj.gepj.aka_gepjarmu_tipus,
        thely: adatObj.gepj.thly_id,
        kepUrl: adatObj.gepj.kep_url
    };

    sessionStorage.setItem(
        formObj.id = adatObj.gepj.id,
        formObj.rendszam = adatObj.gepj.rendszam,
        formObj.marka = adatObj.gepj.marka,
        formObj.modell = adatObj.gepj.modell,
        formObj.kmallas = adatObj.gepj.kilometerora_allas,
        formObj.muszakiErvenyesseg = stringToDate(adatObj.gepj.muszaki_ervenyesseg),
        formObj.uzemanyagkapacitas = adatObj.gepj.uzemanyag_kapacitas,
        formObj.ferohely = adatObj.gepj.ferohely,
        formObj.kedvezmeny = adatObj.gepj.kedvezmeny,
        formObj.egyediAr = adatObj.gepj.egyedi_ar,
        formObj.gepjarmuTipus = adatObj.gepj.aka_gepjarmu_tipus,
        formObj.thely = adatObj.gepj.thly_id,
        formObj.kepUrl = adatObj.gepj.kep_url
    );
    const [formData, setFormData] = useState(formObj);

    const adatKuldes = (adat, method) => {
        fetch('http://localhost:8000/api/gepjarmuberles/gepjarmuvek/jarmuvek', {
            method: method,
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(adat)
        })
            .then(response => response.json())
            .then(response => Notify.tSuccess("response: ",JSON.stringify(response)))
            .then(console.log(adat))
            .catch(err => Notify.tError(err));

    }

    const onSubmit = (e) => {
        e.preventDefault();
        adatKuldes(formData, 'PATCH');
    }

    const writeData = (e) => {
        setFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
        //console.log(e.target.value, e.target.type);
        console.log(formData);
    }



    const logging = () => {
        console.log("adatObj adat: ", adatObj);
        // console.log(adatObj.gepj.muszaki_ervenyesseg, typeof(adatObj.gepj.muszaki_ervenyesseg));
        // const myDate = new Date(adatObj.gepj.muszaki_ervenyesseg);
        // console.log(myDate);
        // const myYear = myDate.getFullYear();
        // const myMonth = myDate.getMonth();
        // const myDay = myDate.getDay();
        // console.log(myYear+'-'+myMonth+'-'+myDay);
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
                                <input onChange={writeData} required type="number" className="form-control bg-secondary2 border-secondary minwidth-50" id="kmallas" value={adatObj.gepj.kilometerora_allas} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm bg-secondary2 rounded">
                            <div className="form-group my-4 width-10rem mx-auto ">
                                <label htmlFor="muszakiErvenyesseg"><span className="redStar">* </span>Műszaki érvényesség:</label>
                                <input onChange={writeData} required type="date" className="form-control bg-secondary2 border-secondary minwidth-50 pointer" id="muszakiErvenyesseg" value={stringToDate(adatObj.gepj.muszaki_ervenyesseg)} />
                            </div>
                        </div>

                        <div className="col-sm bg-primary3 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="uzemanyagkapacitas" className='overflow'><span className="redStar">* </span>Üzemanyag-kapacitás:</label>
                                <input onChange={writeData} required type="number" className="form-control bg-secondary2 border-secondary minwidth-50"
                                    id="uzemanyagkapacitas"  value={adatObj.gepj.uzemanyag_kapacitas} />
                            </div>
                        </div>

                        <div className="col-sm bg-secondary2 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="ferohely"><span className="redStar">* </span>Férőhely:</label>
                                <input onChange={writeData} required type="number" className="form-control bg-secondary2 border-secondary minwidth-50"
                                    id="ferohely"  value={adatObj.gepj.ferohely} />
                            </div>
                        </div>

                        <div className="col-sm bg-primary3 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="kedvezmeny">Kedvezmény (%):</label>
                                <input onChange={writeData} type="number" placeholder="(opcionális)"
                                    className="form-control bg-secondary2 border-secondary minwidth-50" id="kedvezmeny"  value={adatObj.gepj.kedvezmeny} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm bg-primary3 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="egyediAr">Egyedi ár:</label>
                                <input onChange={writeData} type='number' placeholder="(opcionális)"
                                    className="form-control bg-secondary2 border-secondary minwidth-50" id="egyediAr"  value={adatObj.gepj.egyedi_ar}/>
                            </div>
                        </div>

                        <div className="col-sm bg-secondary2 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="gepjarmuTipus"><span className="redStar">* </span>Gépjármű típus:</label>
                                <select defaultValue={adatObj.gepj.aka_gepjarmu_tipus} onChange={writeData} className="form-control bg-secondary2 border-secondary minwidth-50 pointer" required id="gepjarmuTipus">
                                    {
                                        tipusok && tipusok.map((tipus, index) => (<option key={index} value={tipus.gepjarmu_tipus}>{tipus.gepjarmu_tipus}</option>))
                                    }

                                </select>
                            </div>
                        </div>

                        <div className="col-sm bg-primary3 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="thely"><span className="redStar">* </span>Telephely:</label>

                                <select defaultValue={adatObj.gepj.thly_id} onChange={writeData} className="form-control bg-secondary2 border-secondary minwidth-50 pointer" required id="thely">
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