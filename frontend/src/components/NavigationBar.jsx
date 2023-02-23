import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
//import { useNavigate } from 'react-router-dom';
import JarmuContext from '../components/context/JarmuContext';
import "../css/navigationbar.css"


const NavigationBar = () => {

    const navigate = useNavigate();
    const {logout} = useContext(JarmuContext);

    const token=sessionStorage.getItem('usertoken');

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
                        <Link to={'/register'} className="nav-link">Regisztráció</Link>
                        {
                            token ? 
                            (
                            <><a onClick={()=>{logout(); navigate('/')}} className="nav-link">Kijelentkezés</a></>
                            ):
                            (<><Link to={'/login'} className="nav-link">Bejelentkezés</Link></>)
                        }

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar