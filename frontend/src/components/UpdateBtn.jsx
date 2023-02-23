import '../css/register.css'
import { useState, useContext } from 'react';
import Notify from './allUse/Toast';
import JarmuContext from './context/JarmuContext';
import { useNavigate } from 'react-router-dom';

const UpdateBtn = ({gepj_id}) => {

    const [gepj_id2, setGepj_id] = useState(null);

    const navigate = useNavigate();

    const { update } = useContext(JarmuContext)

    const updateItem = async (adat) => {

        setGepj_id(adat);
        navigate('/updatevehicle');
        console.log(adat);

    }


    return (
        <div>
            <button onClick={() => updateItem(gepj_id)} className='btn btn-primary'>Módosítás</button>
        </div>
    )
}

export default UpdateBtn