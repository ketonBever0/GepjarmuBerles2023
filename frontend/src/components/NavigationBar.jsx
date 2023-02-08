
const NavigationBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary position-sticky">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Bérlés</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" href="#" aria-current="page">Főoldal</a>
                        <a className="nav-link" href="#">Járműveink</a>
                        <a className="nav-link" href="#">GYIK</a>
                        <a className="nav-link" href="#">Elérhetőségeink</a>
                        <a className="nav-link" href="#">Rólunk</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar