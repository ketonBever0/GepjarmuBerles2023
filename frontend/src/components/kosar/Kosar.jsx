import React, { useContext, useEffect } from 'react'
import { XCircle, XCircleFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import Notify from '../allUse/Toast';
import KosarContext from '../context/KosarContext';

function Kosar() {

    const {
        kosar, setKosar,
        update, refresh,
        isOpen, setIsOpen,
        setKosarBackup
    } = useContext(KosarContext);

    const navigate = useNavigate();

    const token = sessionStorage.getItem("usertoken");


    return (
        <div className='bg-white absolute rounded p-3 mb-3' style={{ height: "30rem", width: "20rem", position: "fixed", bottom: "6rem", right: "1rem", float: "right" }}>
            <h1>Kosár</h1>

            <div className='list-group list-group-flush mb-4' style={{ height: "20rem", overflow: "auto" }}>
                {
                    kosar.length > 0 ?
                        kosar.map((jarmu, index) => (
                            <div className='list-group-item'>
                                <div key={index} className="row row-cols-3 my-2">
                                    <div className="col text-center">{jarmu.rendszam}</div>
                                    <div className="col text-start">{jarmu.marka} {jarmu.modell}</div>
                                    <div className="col text-end w-25"><button className='btn rounded-circle p-0 m-0' onClick={(e => { e.preventDefault(); setKosar(kosar.filter(x => x.rendszam != jarmu.rendszam)) })}><XCircleFill color='red' size={25} /></button></div>
                                </div>
                            </div>
                        ))
                        :
                        <h3 className='mt-5 text-center'>Üres</h3>
                }
            </div>
            <div className='d-flex justify-content-between'>
                <button className='btn btn-danger' disabled={kosar.length == 0} onClick={e => { e.preventDefault(); setKosar([]); }}>Ürítés</button>
                {/* {kosar != null && kosar.length != 0 && <p>Elemek száma: {kosar.length}</p>} */}
                <button className='btn btn-primary' disabled={kosar.length == 0} onClick={
                    e => {
                        e.preventDefault();
                        localStorage.setItem("kosarBackup", JSON.stringify(kosar));
                        setKosarBackup(kosar);
                        setIsOpen(false);
                        // console.log(JSON.parse(localStorage.getItem("kosarBackup")));
                        setKosar([]);

                        if (token) {
                            navigate('/checkout');
                        } else {
                            // Notify.tError("Ehhez be kell jelentkezni!");
                            navigate('/login');
                        }
                    }
                }>Tovább</button>
            </div>

        </div>
    )
}

export default Kosar