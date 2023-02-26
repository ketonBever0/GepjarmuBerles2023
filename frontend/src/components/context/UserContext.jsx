import { useState, useEffect } from "react";
import { createContext } from "react";
import { useContext } from "react";
import JarmuContext from "./JarmuContext";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    
    const logout = () => {
         let kerdes = window.confirm("Biztosan ki szeretne lépni?");
         if (kerdes) {
            sessionStorage.removeItem('usertoken');
            //update();
         }

    }

    const [adatObj, setAdatObj] = useState({});     //adatObj lesz az adott gépjármű adat objektum

    const {update} = useContext(JarmuContext);

    const settingCurrentVehicle = async (adat) => {      //beállítjuk a gépjármű adatokat itt, hogy az elérhető legyen az update felületnek (VehicleUpdateForm)
        await sessionStorage.removeItem("adatSSN");
        sessionStorage.setItem('adatSSN', JSON.stringify(adat));
        update();
    }

    return <UserContext.Provider value={{
        logout, adatObj, settingCurrentVehicle

    }}>{children}</UserContext.Provider>

}

export default UserContext;