import '../css/register.css'
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Notify from './allUse/Toast';
import JarmuContext from './context/JarmuContext';


const Register = () => {

    const navigate = useNavigate();

    const verifyPassword = () => {
        var pw = document.getElementById("jelszo").value;
        var pw2 = document.getElementById("jelszo2").value;
        var verify = document.getElementById("pwVerify");
        if (pw != pw2) {
            verify.classList.add("errorAlert");
            verify.innerHTML = " A két jelszó nem egyezik!";
            verify.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center"
            });
            return false;
        } else {
            return true;
        }
    }

    // function passwordVisibility() {
    //     var pw = document.getElementById("myInput");
    //     if (pw.type === "password") {
    //         pw.type = "text";
    //     } else {
    //         pw.type = "password";
    //     }
    // }


    let formObj = {
        nev: "",
        adoszam: null,
        iranyitoszam: "",
        telepulesNev: "",
        kozteruletNev: "",
        kozteruletJelleg: "",
        hazszam: "",
        telefonszam: "",
        email: "",
        jelszo: ""
    }
    const [formData, setFormData] = useState(formObj);

    const sendData = (formData, method) => {
        fetch('http://localhost:8000/api/gepjarmuberles/users/register', {
            method: method,
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(token => {
                if (!token.message) {
                    sessionStorage.setItem('usertoken', token);
                    Notify.tSuccess("A regisztráció sikeres!")
                    //navigate('/');
                } else {
                    Notify.tError(token.message);
                }
            })
            .catch(err => Notify.tError(err));
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (verifyPassword()) {
            sendData(formData, 'POST');
        }
    }

    const writeData = (e) => {
        setFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
        console.log(formData);
        if (e.target.value != "") {
            e.target.classList.add("inputStyleSignupContent");
        }

    }

    return (
        <div>
            <div className="bg-beige d-flex justify-content-center">
                <div className="container my-5 cont-shadow m-5 w-100">
                    <div className="row d-grid ">
                        <div
                            className="col-sm p-5 text-center d-flex justify-content-center bg-dark2 text-light min-width container2 w-100">
                            <div className=" w-100">
                                <h3 className="pt-4 header_signup">Regisztráció</h3>
                                <form onSubmit={onSubmit} className="container w-100 mt-5">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md">
                                                <div className="form-group pt-2 mx-auto">
                                                    <label><span className="redStar">* </span>Teljes név:</label><br />
                                                    <input onChange={writeData} value={formData.nev} required type="text" id="nev" className="inputStyleSignup"
                                                    />
                                                </div>
                                                <div className="form-group pt-2">
                                                    <label><span className="redStar">* </span>E-mail cím:</label><br />
                                                    <input onChange={writeData} value={formData.email} required type="email" id="email" className="inputStyleSignup"
                                                    />
                                                </div>
                                                <div className="form-group pt-2 mx-auto">
                                                    <label><span className="redStar">* </span>Jelszó:</label><br />
                                                    <input onChange={writeData} value={formData.jelszo} required type="password" id="jelszo" className="inputStyleSignup"
                                                    ></input>
                                                </div>
                                                <div className="form-group pt-2 mx-auto">
                                                    <label><span className="redStar">* </span>Jelszó mégegyszer:</label><br />
                                                    <input required type="password" id="jelszo2" className="inputStyleSignup"
                                                    />
                                                </div>
                                                <p id='pwVerify' className='errorMsg'></p>
                                                <div className="form-group pt-2 mx-auto">
                                                    <label><span className="redStar">* </span>Irányítószám:</label><br />
                                                    <input onChange={writeData} value={formData.iranyitoszam} required type="text" id="iranyitoszam" className="inputStyleSignup"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md">
                                                <div className="form-group pt-2 mx-auto">
                                                    <label><span className="redStar">* </span>Település neve:</label><br />
                                                    <input onChange={writeData} value={formData.telepules_nev} required type="text" id="telepulesNev" className="inputStyleSignup"
                                                    />
                                                </div>
                                                <div className="form-group pt-2 mx-auto">
                                                    <label><span className="redStar">* </span>Közterület
                                                        jellege:</label><br />
                                                    <input onChange={writeData} value={formData.kozterulet_jelleg} required type="text" id="kozteruletJelleg" className="inputStyleSignup"
                                                    />
                                                </div>
                                                <div className="form-group pt-2 mx-auto">
                                                    <label><span className="redStar">* </span>Közterület neve:</label><br />
                                                    <input onChange={writeData} value={formData.kozterulet_nev} required type="text" id="kozteruletNev" className="inputStyleSignup"
                                                    />
                                                </div>
                                                <div className="form-group pt-2 mx-auto">
                                                    <label><span className="redStar">* </span>Házszám:</label><br />
                                                    <input onChange={writeData} value={formData.hazszam} required type="text" id="hazszam" className="inputStyleSignup"
                                                    />
                                                </div>
                                                <div className="form-group pt-2 mx-auto">
                                                    <label><span className="redStar">* </span>Telefonszám:</label><br />
                                                    <input onChange={writeData} value={formData.telefonszam} required type="text" id="telefonszam" className="inputStyleSignup"
                                                    />
                                                </div>

                                                <div className="form-group pt-2 mx-auto">
                                                    <label>Adószám (cég esetében):</label><br />
                                                    <input onChange={writeData} value={formData.adoszam} type="text" id="adoszam" className="inputStyleSignup"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="submit" className="btn btn-primary m-4 signup_btn" />
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