import '../css/footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    const token=sessionStorage.getItem('usertoken');
    return (
        <div className="row">
            <footer>
                <div className="row d-flex justify-content-center align-items-center g-3 my-5">
                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="card footerDiv " style={{ width: "18rem" }}>
                            <div className="card-body text-center  d-flex flex-column">
                                <h5 className="py-3 card-title border-bottom border-secondary">Közösségi média</h5>
                                <div className="d-flex justify-content-center align-items-center flex-grow-1">
                                    <div>
                                        <i className="fa-brands fa-facebook"></i>
                                        <i className="fa-brands fa-twitter"></i><br />
                                        <i className="fa-brands fa-instagram"></i>
                                        <i className="fa-brands fa-viber"></i><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center footerCard">
                        <div className="card footerDiv" style={{ width: "18rem" }}>
                            <div className="card-body text-center footerDiv">
                                <h5 className="py-3 card-title border-bottom border-secondary">Kapcsolat</h5>
                                <div className="d-flex justify-content-center align-items-center flex-grow-1">
                                    <div>
                                        <p className="padding"> <i className="fa-solid fa-phone"></i> Telefon
                                        </p>
                                        <p>+36 (66) 134-5724"</p>


                                        <p className="padding"><i className="fa-solid fa-house"></i> Cím</p>
                                        <p className="padding">1007 Budapest, <br /> Széchenyi út 32.</p>
                                        <p><i className="fa-solid fa-at"></i> E-mail</p>
                                        <p className="padding">berles@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center footerCard">
                        <div className="card footerDiv" style={{ width: "18rem" }}>
                            <div className="card-body text-center footerDiv">
                                <h5 className="py-3 card-title border-bottom border-secondary">Navigáció</h5>

                                <Link to={"/"} className="list-group-item list-group-item-action footerNav">Főoldal</Link>
                                <Link to={"/katalogus"} className="list-group-item list-group-item-action footerNav">Katalógus</Link>
                                <Link to={"/gyik"} className="list-group-item list-group-item-action footerNav">GY.I.K.</Link>
                                <Link to={"/about"} className="list-group-item list-group-item-action footerNav">Rólunk</Link>
                                <Link to={"/register"} className="list-group-item list-group-item-action footerNav">Regisztráció</Link>
                                
                                {
                            !token ? 
                            (
                            <><Link to={"/login"} className="list-group-item list-group-item-action footerNav">Bejelentkezés</Link></>
                            ):
                            (<></>)
                        }

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer