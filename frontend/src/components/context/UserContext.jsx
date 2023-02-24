import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    
    const logout = () => {
         let kerdes = window.confirm("Biztosan ki szeretne lépni?");
         if (kerdes) {
            sessionStorage.removeItem('usertoken');
            update();
         }

    }

    const [adatObj, setAdatObj] = useState({});     //adatObj lesz az adott gépjármű adat objektum

    const settingCurrentVehicle = (adat) => {      //beállítjuk a gépjármű adatokat itt, hogy az elérhető legyen az update felületnek (VehicleUpdateForm)
        setAdatObj(adat);
    }

    return <UserContext.Provider value={{
        logout, adatObj, settingCurrentVehicle

    }}>{children}</UserContext.Provider>

}

export default UserContext;