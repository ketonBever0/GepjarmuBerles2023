import '../css/contact.css'

const Contact = () => {
    return (

        <div className="h-100 bg-light p-5">
            <div>
                <h2 className="text-center text-dark p-5">Lépj velünk kapcsolatba!</h2>
            </div>
            <div className="d-flex align-items-center h-100">

                <div className="container">
                    <div className="row">
                        <div className="col text-center bg-light">
                            <h5 className="text-dark bg-secondary3 p-4">Elérhetőségeink:</h5>
                            <div className="rounded">
                                <table className="table table-striped  rounded border minwidth-60">

                                    <tbody>
                                        <tr className="table-primary">
                                            <th className="py-5 mw-20" scope="row">
                                                <h4 className="minwidth-100" ><i className="fa-solid fa-phone px-3"></i>Telefon:</h4>
                                            </th>
                                            <td className="py-5">
                                                <h5>+36 (66) 134-5724</h5>
                                            </td>
                                        </tr>
                                        <tr className="table-secondary">
                                            <th className="py-5" scope="row">
                                                <h4 className="minwidth-100" ><i className="fa-solid fa-at px-3"></i>E-mail:</h4>
                                            </th>
                                            <td className="py-5">
                                                <h5>berles@gmail.com</h5>
                                            </td>
                                        </tr>
                                        <tr className="table-primary">
                                            <th className="py-5" scope="row">
                                                <h4 className="minwidth-100" ><i className="fa-solid fa-house px-3"></i>Cím:</h4>
                                            </th>
                                            <td className="py-5">
                                                <h5>1007 Budapest, <br/> Széchenyi út 32.</h5>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>


                            </div>
                        </div>
                        <div className="col text-dark bg-primary2 rounded border minwidth-60">

                            <form>
                                <h5 className="text-dark p-4 text-center">Írj nekünk üzenetet:</h5>
                                <div className="form-group my-4 w-50 mx-auto">
                                    <label htmlFor="nevinput">Név:</label>
                                    <input type="email" className="form-control bg-secondary2 border-secondary minwidth-50" id="nevinput" placeholder="Hogy hívnak?"/>
                                </div>

                                <div className="form-group my-4 w-50 mx-auto">
                                    <label htmlFor="emailinput">E-mail cím:</label>
                                    <input type="email" className="form-control bg-secondary2 border-secondary minwidth-50" id="emailinput"
                                        placeholder="nev@pelda.com"/>
                                </div>
                                <div className="form-group my-4 w-50 mx-auto">
                                    <label htmlFor="uzenetinput">Üzenet tárgya:</label>
                                    <select className="form-control bg-secondary2 pointer border-secondary minwidth-50" id="uzenetinput">
                                        <option value="" defaultValue disabled hidden>Mi az üzenet típusa?</option>
                                        <option>Kérdés</option>
                                        <option>Visszajelzés</option>
                                        <option>Panasz</option>
                                    </select>
                                </div>


                                <div className="form-group w-50 mx-auto">
                                    <label htmlFor="exampleFormControlTextarea1">Üzenet:</label>
                                    <textarea className="form-control border-secondary" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                <div className="py-1 d-flex justify-content-center">
                                    <button type="button" className="btn btn-primary w-25 my-5">Küldés!</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact