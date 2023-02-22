import React, { useContext } from 'react'
import { Cart4 } from 'react-bootstrap-icons';
import KosarContext from './context/KosarContext';
import Kosar from './Kosar';


function CartContainer() {


    const {
        kosar,
        isOpen, setIsOpen
    } = useContext(KosarContext);


    return (
        <div>
            {isOpen && <Kosar />}
            <div style={{ position: "fixed", bottom: "2rem", right: "1rem", float: "right" }}>
                <span className="badge badge-secondary rounded-circle p-1 bg-danger" style={{ position: "relative", bottom: "2rem", left: "4.4rem" }}>{kosar.length > 0 && <span className="badge badge-secondary">{kosar.length}</span>}</span>
                <button className='btn btn-light rounded-circle p-3' onClick={(e => { e.preventDefault(); setIsOpen(prev => !prev); })}><Cart4 color='blue' size={35} /></button>
            </div>
        </div>
    )
}

export default CartContainer