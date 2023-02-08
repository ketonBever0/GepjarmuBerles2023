import { Link } from "react-router-dom"

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary position-sticky">
            <div className="container-fluid">
                <div className="navbar-brand">Gépjármű bérlés</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to={'/'} className="nav-link" aria-current="page">Főoldal</Link>
                        <Link to={'/jarmuveink'} className="nav-link">Járműveink</Link>
                        <Link to={'/arazas'} className="nav-link">Árazás</Link>
                        <Link to={'/gyik'} className="nav-link">GYIK</Link>
                        <Link to={'/contact'} className="nav-link">Elérhetőségeink</Link>
                        <Link to={'/about'} className="nav-link">Rólunk</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar