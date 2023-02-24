import { useEffect, useState } from "react";
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

    const token = sessionStorage.getItem('usertoken');


    // useEffect(() => {
    //     if (token) {
    //         if (token.message || token.token == null) {
    //             sessionStorage.removeItem('usertoken');
    //             update();
    //         }
    //     }
    // })

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (token) {
            fetch('http://localhost:8000/api/gepjarmuberles/users/data', {
                method: 'GET',
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (!data.message) {
                        setUserData(data)
                    } else {
                        localStorage.removeItem('usertoken');
                        setUserData(null);
                        // Notify.tError("Lejárt a munkamenet! Lépjen be újra");
                    }
                })
                .catch(err => console.log(err));
        } else {

        }
    }, []);


    return <UserContext.Provider value={{
        logout,
        adatObj,
        settingCurrentVehicle,
        userData

    }}>{children}</UserContext.Provider>

}

export default UserContext;