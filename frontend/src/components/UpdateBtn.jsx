import '../css/register.css'
import { useState, useContext } from 'react';
import Notify from './allUse/Toast';
import JarmuContext from './context/JarmuContext';
import { useNavigate } from 'react-router-dom';
import VehicleUpdateForm from './VehicleUpdateForm';

const UpdateBtn = ({gepj}) => {

    const navigate = useNavigate();

    const { update } = useContext(JarmuContext)

    const updateItem = async (adat) => {
        console.log(adat);
        navigate('/updatevehicle',(adat));
    }

    return (
        <div>
            <button onClick={() => updateItem(gepj)} className='btn btn-primary'>Módosítás</button>
        </div>
    )
}

export default UpdateBtn