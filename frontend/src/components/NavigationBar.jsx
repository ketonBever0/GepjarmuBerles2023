import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
//import { useNavigate } from 'react-router-dom';
import JarmuContext from '../components/context/JarmuContext';
import "../css/navigationbar.css"
import KosarContext from './context/KosarContext';
import { confirm } from "react-confirm-box";
import Notify from './allUse/Toast';
import UserContext from './context/UserContext';


const NavigationBar = () => {

    const navigate = useNavigate();
    const { logout } = useContext(UserContext);
    const { kosar, setKosar } = useContext(KosarContext);

    const token = sessionStorage.getItem('usertoken');

    const confirmBoxOptions = {
        closeOnOverlayClick: true,
        render: (message, onConfirm, onCancel) => {
            return (
                <div className='bg-info p-5 border rounded' style={{ position: "fixed", left: "40rem", top: "20rem", height: "fit-content" }}>
                    <h1 className='mb-5'>{message}</h1>
                    <div className="d-flex justify-content-around">
                        <button className='btn btn-danger p-3' onClick={onConfirm}>Igen</button>
                        <button className='btn btn-primary p-3' onClick={onCancel}>Nem</button>
                    </div>
                </div>
            )
        }
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top"> {/* position-sticky kiszedve */}
            <div className="container-fluid">
                <div className="navbar-brand" href="#">Gépjármű Bérlés</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to={'/'} className="nav-link" aria-current="page">Főoldal</Link>
                        <Link to={'/katalogus'} className="nav-link">Járműveink</Link>
                        <Link to={'/gyik'} className="nav-link">GYIK</Link>
                        <Link to={'/contact'} className="nav-link">Elérhetőségeink</Link>
                        <Link to={'/about'} className="nav-link">Rólunk</Link>
                        {
                            token ?
                                (
                                    <><a onClick={async () => {
                                        if (await confirm("Biztosan ki szeretne lépni?", confirmBoxOptions)) {
                                            setKosar([]);
                                            logout();
                                            localStorage.removeItem("kosarBackup");
                                            Notify.tSuccess("Sikeres kijelentkezés!");
                                            navigate('/');
                                        }
                                    }} className="nav-link">Kijelentkezés</a></>
                                ) :
                                (
                                    <>
                                        <Link to={'/register'} className="nav-link">Regisztráció</Link>
                                        <Link to={'/login'} className="nav-link">Bejelentkezés</Link>
                                    </>
                                )
                        }



                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar