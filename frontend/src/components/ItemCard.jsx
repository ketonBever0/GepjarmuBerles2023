import { useContext } from "react"
import { Link } from "react-router-dom"
import KosarContext from "./context/KosarContext"
import DeleteBtn from "./DeleteBtn"
import UpdateBtn from "./UpdateBtn"

const ItemCard = ({ jarmu }) => {

    const token=sessionStorage.getItem('usertoken');
    
    const {
        addToBasket
    } = useContext(KosarContext);



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
                    {jarmu.kedvezmeny && <div className="d-block badge bg-success p-2"><h5>{jarmu.kedvezmeny}% kedvezmény</h5></div>}
                    <button className="btn btn-primary px-4 py-3 my-3" onClick={(e) => { e.preventDefault(); addToBasket(jarmu) }}><h5>{arazas()} ft/nap</h5></button>
                    {
                            token ? 
                            (
                            <>
                                <DeleteBtn gepj_id={jarmu.id}/>
                                <UpdateBtn gepj={jarmu}/>
                            </>
                            ):
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