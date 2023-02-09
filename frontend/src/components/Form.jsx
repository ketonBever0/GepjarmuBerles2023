import '../css/form.css'

const Form = () => {
    return (
        <form>
            <div className="row mt-3">
                <div className="col">
                    {/* <input type="text" className="form-control" placeholder="Márka" /> */}
                    <select className="form-select">
                        <option selected value={null}>Típus</option>
                    </select>
                </div>
                <div className="col">
                    {/* <input type="text" className="form-control" placeholder="Modell" /> */}
                    <select className="form-select">
                        <option selected value={null}>Modell</option>
                    </select>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col">
                    {/* <input type="text" className="form-control" placeholder="Járműtípus" /> */}
                    <select className="form-select">
                        <option selected value={null}>Járműtípus</option>
                    </select>
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