import React, { useContext, useEffect } from 'react'
import { XCircle, XCircleFill } from 'react-bootstrap-icons';
import KosarContext from './context/KosarContext';

function Kosar() {

    const {
        kosar, setKosar,
        update, refresh,
        isOpen, setIsOpen
    } = useContext(KosarContext);




    return (
        <div className='bg-white absolute rounded p-3 mb-3' style={{ height: "30rem", width: "20rem", position: "fixed", bottom: "6rem", right: "1rem", float: "right" }}>
            <h1>Kosár</h1>

            {
                kosar.length > 0 ?
                    kosar.map((jarmu, index) => (
                            <div key={index} className="row row-cols-4 my-2 mx-auto">
                                <div className="col">{jarmu.rendszam}</div>
                                <div className="col">{jarmu.marka}</div>
                                <div className="col">{jarmu.modell}</div>
                                <div className="col"><button className='btn rounded-circle p-0' onClick={(e => { e.preventDefault(); setKosar(kosar.filter(x => x.rendszam != jarmu.rendszam)) })}><XCircleFill color='red' size={20} /></button></div>
                            </div>
                    ))
                    :
                    <div>Üres</div>
            }

        </div>
    )
}

export default Kosar