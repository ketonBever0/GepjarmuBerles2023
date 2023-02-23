import '../css/register.css'
import { useState, useContext } from 'react';
import Notify from './allUse/Toast';
import JarmuContext from './context/JarmuContext';
import { useNavigate } from 'react-router-dom';
import VehicleUpdateForm from './VehicleUpdateForm';

const UpdateBtn = ({gepj}) => {

    const navigate = useNavigate();

    const { update, updateNavigate } = useContext(JarmuContext);

    const navToUpdateForm = async () => {
         await updateNavigate({gepj}); 
         navigate('/updatevehicle')
    }

    return (
        <div>
            <button onClick={() => navToUpdateForm()} className='btn btn-primary'>Módosítás</button>
        </div>
    )
}

export default UpdateBtn