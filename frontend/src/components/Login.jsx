import '../css/login.css'
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import Notify from './allUse/Toast';

const Login = () => {

    const [refresh,setRefresh]=useState(false);

    const update=()=>{
        setRefresh(prev=>!prev);
    }

    const navigate=useNavigate();

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

            update();

            navigate('/');
          } else {
            Notify.tError(token.message);
          }
        })
        .catch(err=>toast.error(err));
      }
        
    
      const onSubmit = (e) => {
            e.preventDefault();   
            sendData(formData,'POST');
      }

    const writeData = (e) => {
        setFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
    }

    return (
        <div>
            <div class="bg-beige d-flex justify-content-center">
                <div class="container my-5 cont-shadow m-5">
                    <div class="row d-grid">
                        <div class="col-sm p-5 text-center d-flex justify-content-center bg-primary2  min-width container2">
                            <div class="w-100">
                                <h3 class="pt-4 header_login">Bejelentkezés</h3>
                                <form onSubmit={onSubmit} class="container w-100">
                                    <div class="form-group pt-4">
                                        <label><span class="redStar">* </span>E-mail cím:</label><br />
                                        <input onChange={writeData} value={formData.email} required type="email" id="email" class="inputStyleLogin" autocomplete="off" />
                                    </div>
                                    <div class="form-group pt-2 mx-auto">
                                        <label><span class="redStar">* </span>Jelszó:</label><br />
                                        <input onChange={writeData} value={formData.jelszo} required type="password" id="jelszo" class="inputStyleLogin"
                                            autocomplete="off" />
                                    </div>
                                    <input type="submit" class="btn btn-primary m-4 login_btn" />
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