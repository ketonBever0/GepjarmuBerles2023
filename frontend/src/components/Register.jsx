import '../css/register.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {

    const navigate = useNavigate();

    let formObj = {
        nev: "",
        adoszam: "",
        iranyitoszam: "",
        telepules_nev: "",
        kozterulet_nev: "",
        kozterulet_jelleg: "",
        hazszam: "",
        telefonszam: "",
        email: "",
        jelszo: "",
        jelszo2: "",
        kedvezmeny: 0
    }
    const [formData, setFormData] = useState(formObj);

    const sendData = (formData, method) => {
        fetch('http://localhost:8000/api/gepjarmuberles/', {
            method: method,
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(token => {
                if (!token.message) {
                    sessionStorage.setItem('usertoken', token);
                    toast.success("A regisztráció sikeres!", { position: toast.POSITION.TOP_RIGHT })
                    navigate('/');
                } else {
                    toast.error(token.message, { position: toast.POSITION.TOP_RIGHT });
                }

            })
            .catch(err => toast.error(err), { position: toast.POSITION.TOP_RIGHT });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        sendData(formData, 'POST');

    }

    const writeData = (e) => {
        setFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
    }

    return (
        <div>
            <div class="bg-beige d-flex justify-content-center">
                <div class="container my-5 cont-shadow m-5 w-100">
                    <div class="row d-grid ">
                        <div
                            class="col-sm p-5 text-center d-flex justify-content-center bg-dark2 text-light min-width container2 w-100">
                            <div class=" w-100">
                                <h3 class="pt-4 header_signup">Regisztráció</h3>
                                <form onSubmit={onSubmit} class="container w-100 mt-5">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md">
                                                <div class="form-group pt-2 mx-auto">
                                                    <label><span class="redStar">* </span>Teljes név:</label><br />
                                                    <input onChange={writeData} value={formData.nev} required type="text" id="nev" class="inputStyleSignup"
                                                        autocomplete="off" />
                                                </div>
                                                <div class="form-group pt-2">
                                                    <label><span class="redStar">* </span>E-mail cím:</label><br />
                                                    <input onChange={writeData} value={formData.email} required type="email" id="email" class="inputStyleSignup"
                                                        autocomplete="off" />
                                                </div>
                                                <div class="form-group pt-2 mx-auto">
                                                    <label><span class="redStar">* </span>Jelszó:</label><br />
                                                    <input onChange={writeData} value={formData.jelszo} required type="password" id="jelszo" class="inputStyleSignup"
                                                        autocomplete="off" />
                                                </div>
                                                <div class="form-group pt-2 mx-auto">
                                                    <label><span class="redStar">* </span>Jelszó mégegyszer:</label><br />
                                                    <input onChange={writeData} value={formData.jelszo2} required type="password" id="jelszo2" class="inputStyleSignup"
                                                        autocomplete="off" />
                                                </div>
                                                <div class="form-group pt-2 mx-auto">
                                                    <label><span class="redStar">* </span>Irányítószám:</label><br />
                                                    <input onChange={writeData} value={formData.iranyitoszam} required type="text" id="iranyitoszam" class="inputStyleSignup"
                                                        autocomplete="off" />
                                                </div>
                                            </div>
                                            <div class="col-md">
                                                <div class="form-group pt-2 mx-auto">
                                                    <label><span class="redStar">* </span>Település neve:</label><br />
                                                    <input onChange={writeData} value={formData.telepules_nev} required type="text" id="telepules_nev" class="inputStyleSignup"
                                                        autocomplete="off" />
                                                </div>
                                                <div class="form-group pt-2 mx-auto">
                                                    <label><span class="redStar">* </span>Közterület
                                                        jellege:</label><br />
                                                    <input onChange={writeData} value={formData.kozterulet_jelleg} required type="text" id="kozterulet_jelleg" class="inputStyleSignup"
                                                        autocomplete="off" />
                                                </div>
                                                <div class="form-group pt-2 mx-auto">
                                                    <label><span class="redStar">* </span>Közterület neve:</label><br />
                                                    <input onChange={writeData} value={formData.kozterulet_nev} required type="text" id="kozterulet_nev" class="inputStyleSignup"
                                                        autocomplete="off" />
                                                </div>
                                                <div class="form-group pt-2 mx-auto">
                                                    <label><span class="redStar">* </span>Házszám:</label><br />
                                                    <input onChange={writeData} value={formData.hazszam} required type="text" id="hazszam" class="inputStyleSignup"
                                                        autocomplete="off" />
                                                </div>
                                                <div class="form-group pt-2 mx-auto">
                                                    <label><span class="redStar">* </span>Telefonszám:</label><br />
                                                    <input onChange={writeData} value={formData.telefonszam} required type="text" id="telefonszam" class="inputStyleSignup"
                                                        autocomplete="off" />
                                                </div>

                                                <div class="form-group pt-2 mx-auto">
                                                    <label>Adószám (cég esetében):</label><br />
                                                    <input onChange={writeData} value={formData.adoszam} type="text" id="adoszam" class="inputStyleSignup"
                                                        autocomplete="off" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="submit" class="btn btn-primary m-4 signup_btn" />
                                </form>
                                <p className=''>A piros csillaggal (<span className='redStar'>*</span>) jelölt mezők kitöltése kötelező!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register