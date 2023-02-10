
const ItemCard = ({ jarmu }) => {



    return (
        <div className="col-md-4 d-flex justify-content-center h-">
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={jarmu.kep_url} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{jarmu.marka} {jarmu.modell}</h5>
                    <div className="badge bg-primary">{jarmu.rendszam}</div>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <ul className="list-group list-group-flush mb-4">
                        <li className="list-group-item"><b>Típus:</b> {jarmu.aka_gepjarmu_tipus}</li>
                        <li className="list-group-item"><b>Férőhely: </b>{jarmu.ferohely}</li>
                        <li className="list-group-item"><b>Üzemanyag kapacitás: </b>{jarmu.uzemanyag_kapacitas} liter</li>
                        {/* <li className="list-group-item">A third item</li> */}
                    </ul>
                    <a href="#" className="btn btn-primary">{jarmu.egyedi_ar ? jarmu.egyedi_ar : jarmu.kategoria_ar}</a>
                </div>
            </div>
        </div>
    )
}

export default ItemCard