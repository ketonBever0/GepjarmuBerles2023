
const Form = () => {
    return (
        <form>
            <div className="row mt-3">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Márka" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Típus" />
                </div>
            </div>

            <div className="row mt-3">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Járműtípus" />
                </div>
                <div className="col">
                    <input type="number" min={1} max={40} className="form-control" placeholder="Férőhely" />
                </div>
            </div>

            <div className="row mt-3 d-flex justify-content-center align-items-center">
                <button type="submit" className="btn btn-primary">Keresés</button>
            </div>

        </form>
    )
}

export default Form