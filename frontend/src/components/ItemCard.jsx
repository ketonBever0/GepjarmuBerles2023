
const ItemCard = () => {
    return (
        <div className="col-md-4 d-flex justify-content-center h-">
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src="https://vezess2.p3k.hu/app/uploads/2022/11/dongfeng_forthing_t5_evo_35.jpg" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Volskwagen Transporter T6</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    <a href="#" className="btn btn-primary">12 000 ft/nap</a>
                </div>
            </div>
        </div>
    )
}

export default ItemCard