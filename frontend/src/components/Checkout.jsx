import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import KosarContext from './context/KosarContext'

function Checkout() {

    const {
        kosar, setKosar,
        kosarBackup, setKosarBackup,
        update, refresh
    } = useContext(KosarContext);

    const [totalPrice, setTotalPrice] = useState(0);

    const location = useLocation();

    // useEffect(() => {
    //     setKosar(JSON.parse(localStorage.getItem("kosarBackup")));
    // }, [])


    useEffect(() => {
        setKosarBackup(JSON.parse(localStorage.getItem("kosarBackup")));
        console.log(kosarBackup);
    }, [refresh]);

    useEffect(() => {
        kosarBackup && kosarBackup.map((elem, index) => {
            if (elem.kedvezmeny) {
                setTotalPrice(prevPrice => prevPrice + (elem.egyedi_ar ? elem.egyedi_ar * (1 - elem.kedvezmeny / 100) : elem.kategoria_ar * (1 - elem.kedvezmeny / 100)));
            } else {
                setTotalPrice(prevPrice => prevPrice + (elem.egyedi_ar ? elem.egyedi_ar : elem.kategoria_ar));
            }
        });
    }, [kosarBackup]);

    const arazas = (elem) => {
        if (elem.kedvezmeny) {
            // setTotalPrice(prevPrice => prevPrice + (elem.egyedi_ar ? elem.egyedi_ar * (1 - elem.kedvezmeny / 100) : elem.kategoria_ar * (1 - elem.kedvezmeny / 100)));
            return elem.egyedi_ar ? elem.egyedi_ar * (1 - elem.kedvezmeny / 100) : elem.kategoria_ar * (1 - elem.kedvezmeny / 100)
        } else {
            // setTotalPrice(prevPrice => prevPrice + (elem.egyedi_ar ? elem.egyedi_ar : elem.kategoria_ar));
            return elem.egyedi_ar ? elem.egyedi_ar : elem.kategoria_ar
        }
    }

    return (
        <div>
            <h1 className="text-center mt-4">Összesítés</h1>
            <div className="row d-flex justify-content-center align-items-center g-3 my-5 p-3">
                <h3 className="text-center mt-2">{totalPrice} ft/nap</h3>
                <button className='btn btn-primary mb-5' disabled={!kosarBackup} onClick={e => { e.preventDefault(); }}>Bérlés</button>
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
                                        {/* <li className="list-group-item">A third item</li> */}
                                    </ul>
                                    {elem.kedvezmeny && <div className="d-block badge bg-success p-2"><h5>{elem.kedvezmeny}% kedvezmény</h5></div>}
                                    <div>{arazas(elem)}</div>
                                    <button className="btn btn-danger px-4 py-3 my-3" onClick={
                                        async e => {
                                            e.preventDefault();
                                            await setKosarBackup(kosarBackup.filter(x => x.rendszam != elem.rendszam));
                                            () => localStorage.setItem("kosarBackup", JSON.stringify(kosarBackup));
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