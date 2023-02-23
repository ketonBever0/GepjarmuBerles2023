import React, { useContext } from 'react'
import { Cart4 } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';
import KosarContext from '../context/KosarContext';
import Kosar from './Kosar';


function CartContainer() {

    const {
        kosar,
        isOpen, setIsOpen
    } = useContext(KosarContext);

    const location = useLocation();

    const token = sessionStorage.getItem("usertoken");


    return (
        <div>
            {token &&
                (location.pathname == '/' || location.pathname == '/katalogus') && <div>
                    {isOpen && <div><div onClick={e => { isOpen == true && setIsOpen(false); e.stopPropagation(); }} style={{ position: "fixed", left: "0rem", top: "0rem", width: window.innerWidth, height: window.innerHeight }}></div><Kosar /></div>}
                    <div style={{ position: "fixed", bottom: "2rem", right: "1rem", float: "right" }}>
                        <span className="badge badge-secondary rounded-circle p-1 bg-danger" style={{ position: "relative", bottom: "2rem", left: "4.4rem" }}>{kosar.length > 0 && <span className="badge badge-secondary">{kosar.length}</span>}</span>
                        <button className='btn btn-light rounded-circle p-3' onClick={(e => { e.preventDefault(); setIsOpen(prev => !prev); })}><Cart4 color='blue' size={35} /></button>
                    </div>
                </div>
            }
        </div>
    )
}

export default CartContainer