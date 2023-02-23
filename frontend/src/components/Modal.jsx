import '../css/register.css'
import { useState, useContext } from 'react';
import Notify from './allUse/Toast';
import JarmuContext from '../components/context/JarmuContext';
//import JarmuContext from './context/JarmuContext';

const Modal = (uzenet, funkcio) => {

    

    const [isOpen,setIsOpen]=useState(false);

    const handleClose=()=>{setIsOpen(!isOpen)};

    const handleCancel=()=>{handleClose()}



    return (
        <div>
            <div class="modal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-center">{uzenet}</h5>
                            <button onClick={handleClose} type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-footer">
                            <button onClick={funkcio} type="button" class="btn btn-primary">Igen</button>
                            <button onClick={handleCancel} type="button" class="btn btn-secondary" data-dismiss="modal">Nem</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteBtn