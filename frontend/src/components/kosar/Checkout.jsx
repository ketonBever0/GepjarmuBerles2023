import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import KosarContext from '../context/KosarContext'

function Checkout() {

    const {
        kosarBackup, setKosarBackup,
        update, refresh,
        rentalData, setRentalData,
        sendRent
    } = useContext(KosarContext);

    const [totalPrice, setTotalPrice] = useState(0);
    const [rentalTimes, setRentalTimes] = useState({
        berlesKezdete: null,
        idotartam: null
    });


    useEffect(() => {
        setTotalPrice(0);
        kosarBackup && kosarBackup.map((elem) => {
            if (elem.kedvezmeny) {
                setTotalPrice(prevPrice => prevPrice + (elem.egyedi_ar ? elem.egyedi_ar * (1 - elem.kedvezmeny / 100) : elem.kategoria_ar * (1 - elem.kedvezmeny / 100)));
            } else {
                setTotalPrice(prevPrice => prevPrice + (elem.egyedi_ar ? elem.egyedi_ar : elem.kategoria_ar));
            }
        });
    }, [refresh, kosarBackup]);


    useEffect(() => {
        kosarBackup && localStorage.setItem("kosarBackup", JSON.stringify(kosarBackup));
        setKosarBackup(JSON.parse(localStorage.getItem("kosarBackup")));
    }, [refresh]);


    const arazas = (elem) => {
        if (elem.kedvezmeny) {
            // setTotalPrice(prevPrice => prevPrice + (elem.egyedi_ar ? elem.egyedi_ar * (1 - elem.kedvezmeny / 100) : elem.kategoria_ar * (1 - elem.kedvezmeny / 100)));
            return elem.egyedi_ar ? elem.egyedi_ar * (1 - elem.kedvezmeny / 100) : elem.kategoria_ar * (1 - elem.kedvezmeny / 100)
        } else {
            // setTotalPrice(prevPrice => prevPrice + (elem.egyedi_ar ? elem.egyedi_ar : elem.kategoria_ar));
            return elem.egyedi_ar ? elem.egyedi_ar : elem.kategoria_ar
        }
    }

    // const addLeadingZero = (digit) => {
    //     const intDigit = intDigit(digit);
    //     if(intDigit<10){
            
    //     }
    // }

    const date = new Date();

    useEffect(() => {
        setRentalData({
            kosar: kosarBackup || null,
            rentalTimes: rentalTimes || null
        });
        console.log(`${date.JSON}`)
    }, [kosarBackup, rentalTimes])


    const handleChange = (e) => {
        setRentalTimes({
            ...rentalTimes,
            [e.target.id]: e.target.value
        })
    }


    return (
        <div>
            <h1 className="text-center mt-4">Összesítés</h1>

            <form className="w-100 bg-cyan2" onChange={handleChange}>
                <h3 className="text-dark p-4 text-center">Bérlési idő</h3>
                <div className="container d-grid gap-5 p-5">
                    <div className="row">

                        <div className="col-sm bg-primary3 rounded">
                            <div className="form-group my-4 width-10rem mx-auto">
                                <label htmlFor="berlesKezdete"><span className="redStar">* </span>Bérlés kezdete:</label>
                                <input required type="date" value={rentalTimes.berlesKezdete} defaultValue={`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`} className="form-control bg-secondary2 border-secondary minwidth-50" id="berlesKezdete" />
                            </div>
                        </div>

                        <div className="col-sm bg-secondary2 rounded">
                            <div className="form-group my-4 width-10rem mx-auto col">
                                <label htmlFor="idotartam"><span className="redStar">* </span>Várható időtartam:</label>
                                <input type="number" min={0} value={rentalTimes.idotartam} defaultValue={0} className="form-control bg-secondary2 border-secondary minwidth-50" id="idotartam" />
                                <h6 className='mt-1'>Ha előre nem ismert, hagyja üresen vagy adjon meg 0-t.</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <div className="row d-flex justify-content-center align-items-center g-3 my-5 p-3">
                <h3 className="text-center mb-5"><b>Végső ár:</b> {totalPrice} ft/nap</h3>
                <button className='btn btn-primary mb-5 w-75' style={{ height: "4rem", fontSize: "20pt" }} disabled={!kosarBackup || totalPrice == 0} onClick={e => {
                    e.preventDefault();
                    sendRent(kosarBackup);
                }}>Bérlés leadása</button>
                {kosarBackup ?
                    kosarBackup.map((elem, index) => (
                        <div className="col-md-4 d-flex justify-content-center h-">
                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={elem.kep_url ? elem.kep_url : "https://www.nicepng.com/png/detail/777-7772737_car-placeholder-image-lamborghini-gallardo.png"} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{elem.marka} {elem.modell}</h5>
                                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                    <ul className="list-group list-group-flush mb-4">
                                        <li className="list-group-item"><b>Típus:</b> {elem.aka_gepjarmu_tipus}</li>
                                        <li className="list-group-item"><b>Férőhely: </b>{elem.ferohely}</li>
                                        <li className="list-group-item"><b>Üzemanyag kapacitás: </b>{elem.uzemanyag_kapacitas} liter</li>
                                        <li className="list-group-item"><b>Rendszám:</b> {elem.rendszam}</li>
                                    </ul>
                                    {elem.kedvezmeny && <div className="d-block badge bg-success p-2"><h5>{elem.kedvezmeny}% kedvezmény</h5></div>}
                                    <ul className="list-group list-group-flush mb-4">
                                        <div className='list-group-item mt-4'><h3><b>Ár:</b> {arazas(elem)} ft/nap</h3></div>
                                    </ul>
                                    <button className="btn btn-danger px-4 py-3 my-3" onClick={
                                        async e => {
                                            e.preventDefault();
                                            // localStorage.removeItem("kosarBackup");
                                            await setKosarBackup(kosarBackup.filter(x => x.rendszam != elem.rendszam));
                                            // localStorage.setItem("kosarBackup", JSON.stringify(kosarBackup));
                                            update();
                                        }
                                    }><h5>Törlés</h5></button>

                                </div>
                            </div>
                        </div>
                    ))
                    :
                    <div>Nincs adat</div>
                }
            </div>
        </div>
    )
}

export default Checkout