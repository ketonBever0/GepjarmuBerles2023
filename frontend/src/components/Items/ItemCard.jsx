import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import FilterFormContext from "../context/FilterFormContext"
import JarmuContext from "../context/JarmuContext"
import KosarContext from "../context/KosarContext"
import DeleteBtn from "./DeleteBtn"
import UpdateBtn from "./UpdateBtn"

const ItemCard = ({ jarmu }) => {

    // const [isAvailable, setIsAvailable] = useState(null);

    const token = sessionStorage.getItem('usertoken');

    const { addToBasket } = useContext(KosarContext);


    const { formData } = useContext(FilterFormContext);

    const navigate = useNavigate();


    // const getIsAvailable = async (id) => {
    //     await fetch(`http://localhost:8000/api/gepjarmuberles/gepjarmuvek/jarmuvek/isavailable/${id}`)
    //         .then(res => res.json())
    //         .then(data => setIsAvailable(data.isAvailable))
    //         .catch(err => console.log(err));
    //     // console.log(isAvailable);
    // }



    // useEffect(() => {
    //     if (isAvailable == null) getIsAvailable(jarmu.id);
    //     // console.log(isAvailable);
    // })


    const arazas = () => {
        if (jarmu.kedvezmeny) {
            return jarmu.egyedi_ar ? jarmu.egyedi_ar * (1 - jarmu.kedvezmeny / 100) : jarmu.kategoria_ar * (1 - jarmu.kedvezmeny / 100)
        } else {
            return jarmu.egyedi_ar ? jarmu.egyedi_ar : jarmu.kategoria_ar
        }
    }


    return (
        <div className="col-md-4 d-flex justify-content-center h-">
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={jarmu.kep_url ? jarmu.kep_url : "https://www.nicepng.com/png/detail/777-7772737_car-placeholder-image-lamborghini-gallardo.png"} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{jarmu.marka} {jarmu.modell}</h5>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <ul className="list-group list-group-flush mb-4">
                        <li className="list-group-item"><b>Típus:</b> {jarmu.aka_gepjarmu_tipus}</li>
                        <li className="list-group-item"><b>Férőhely: </b>{jarmu.ferohely}</li>
                        <li className="list-group-item"><b>Üzemanyag kapacitás: </b>{jarmu.uzemanyag_kapacitas} liter</li>
                        <li className="list-group-item"><b>Rendszám:</b> {jarmu.rendszam}</li>
                        {/* <li className="list-group-item">A third item</li> */}
                    </ul>
                    {jarmu.kedvezmeny != null && jarmu.kedvezmeny != 0 && <div className="d-block badge bg-success p-2"><h5>{jarmu.kedvezmeny}% kedvezmény</h5></div>}
                    <div>{(jarmu.elerheto ? "" : "Jelenleg nem elérhető")}</div>
                    <button className="btn btn-primary px-4 py-3 my-3" disabled={!jarmu.elerheto} onClick={
                        (e) => {
                            e.preventDefault();
                            if (token) addToBasket(jarmu);
                            else navigate('/login');
                        }
                    }><h5>{arazas()} ft/nap</h5></button>
                    {
                        token ?
                            (
                                <>
                                    <DeleteBtn gepj_id={jarmu.id} />
                                    <UpdateBtn gepj={jarmu} />       {/* csak bejelentkezéskor látható, átadjuk neki az adott gépjármű adatait, majd az UpdateBtn.jsx-ben használjuk tovább. */}
                                </>
                            )
                            :
                            (
                                <></>
                            )
                    }

                </div>
            </div>
        </div>
    )
}

export default ItemCard