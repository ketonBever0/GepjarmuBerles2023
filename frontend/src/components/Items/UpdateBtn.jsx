import '../../css/register.css'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

const UpdateBtn = ({gepj}) => {     //megkapja az adott gépjármű adatait

    const navigate = useNavigate();

    const { settingCurrentVehicle } = useContext(UserContext);

    const navToUpdateForm = async () => {   //először a gépjárműadatok állítódnak be, majd navigálunk
         await sessionStorage.removeItem('adatSSN');
         await settingCurrentVehicle({gepj}); //a gépjármű adatokat átadjuk a contextben lévő függvénynek (settingCurrentVehicle) => a függvény seteli a sessionStorage-t a jelenlegi gépj. adatokra => ez kelleni fog az update felületen (VehicleUpdateForm)
         navigate('/updatevehicle')
    }

    return (
        <div>
            <button onClick={() => navToUpdateForm()} className='btn btn-primary'>Módosítás</button> {/* kattintásra lefut a fenti navToUpdateForm függvény */}
        </div>
    )
}

export default UpdateBtn