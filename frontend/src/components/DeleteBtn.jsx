import '../css/register.css'
import { useState, useContext } from 'react';
import Notify from './allUse/Toast';
import JarmuContext from '../components/context/JarmuContext';
//import JarmuContext from './context/JarmuContext';

const DeleteBtn = (gepj_id) => {

    //const {update} = useContext(JarmuContext)
    const deleteItem=async (id)=>{
        let kerdes=window.confirm("Biztosan törli?");
        
        if(kerdes){

            const response=await fetch('http://localhost:8000/api/gepjarmuberles/gepjarmuvek/jarmuvek',{
                method:"DELETE",
                headers:{'Content-type':'application/json'},
                body:JSON.stringify({gepj_id})
            });

            const valasz=await response.json();
            if(valasz.message){
                Notify.tSuccess(valasz.message);
            }
            if(valasz.sqlMessage){
                Notify.tError(valasz.sqlMessage);
            }
            //update();
        }
    } 
    

    return (
        <div>
             <button onClick={()=>deleteItem(gepj_id)} className='btn btn-primary'>Törlés</button>
        </div>
    )
}

export default DeleteBtn