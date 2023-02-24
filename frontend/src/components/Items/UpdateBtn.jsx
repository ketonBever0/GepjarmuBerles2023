import '../../css/register.css'
import { useState, useContext } from 'react';
import Notify from '../allUse/Toast';
import JarmuContext from '../context/JarmuContext';
import { useNavigate } from 'react-router-dom';
import VehicleUpdateForm from '../VehicleUpdateForm';
import UserContext from '../context/UserContext';

const UpdateBtn = ({gepj}) => {     //megkapja az adott gépjármű adatait

    const navigate = useNavigate();

    const { update } = useContext(JarmuContext);

    const { settingCurrentVehicle } = useContext(UserContext);

    const navToUpdateForm = async () => {   //először a gépjárműadatok állítódnak be, majd navigálunk

         await settingCurrentVehicle({gepj}); //a gépjármű adatokat átadjuk a contextben lévő függvénynek (settingCurrentVehicle) => a függvény seteli a state-et a jelenlegi gépj. adatokra => az a state kelleni fog az update felületen (VehicleUpdateForm)
         navigate('/updatevehicle');
    }

    return (
        <div>
            <button onClick={() => navToUpdateForm()} className='btn btn-primary'>Módosítás</button> {/* kattintásra lefut a fenti navToUpdateForm függvény */}
        </div>
    )
}

export default UpdateBtn