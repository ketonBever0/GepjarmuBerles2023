import '../css/login.css'
import { useState, useContext } from "react";
import {useNavigate} from "react-router-dom";
import Notify from './allUse/Toast';
import JarmuContext from './context/JarmuContext';



const Login = () => {

    //const {update} = useContext(JarmuContext)
    //const navigate=useNavigate();

    let formObj = {
        email: "",
        jelszo: ""
    }

    const [formData, setFormData] = useState(formObj);

    const sendData=(formData,method)=>{
        fetch('http://localhost:8000/api/gepjarmuberles/users/login',{
          method:method,
          headers:{'Content-type':'application/json'},
          body:JSON.stringify(formData)
        })
        .then(res=>res.json())
        .then(token=>{
          if(!token.message){
            sessionStorage.setItem('usertoken',token);
            Notify.tSuccess("Sikeres bejelentkezés!")

            //update();

            //navigate('/');
          } else {
            Notify.tError(token.message);
          }
        })
        .catch(err=>Notify.tError(err));
      }
        
    
      const onSubmit = (e) => {
            e.preventDefault();   
            sendData(formData,'POST');
      }

    const writeData = (e) => {
        setFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
        if (e.target.value != "") {
            e.target.classList.add("inputStyleLoginContent");
        }
    }


    return (
        <div>
            <div className="bg-beige d-flex justify-content-center">
                <div className="container my-5 cont-shadow m-5">
                    <div className="row d-grid">
                        <div className="col-sm p-5 text-center d-flex justify-content-center bg-primary2 text-light  min-width container2">
                            <div className="w-100">
                                <h3 className="pt-4 header_login">Bejelentkezés</h3>
                                <form onSubmit={onSubmit} className="container w-100">
                                    <div className="form-group pt-4">
                                        <label><span className="redStar">* </span>E-mail cím:</label><br />
                                        <input onChange={writeData} value={formData.email} required type="email" id="email" className="inputStyleLogin" autoComplete="off" />
                                    </div>
                                    <div className="form-group pt-2 mx-auto">
                                        <label><span className="redStar">* </span>Jelszó:</label><br />
                                        <input onChange={writeData} value={formData.jelszo} required type="password" id="jelszo" className="inputStyleLogin"
                                            autoComplete="off" />
                                    </div>
                                    <input type="submit" className="btn btn-primary m-4 login_btn" />
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

export default Login