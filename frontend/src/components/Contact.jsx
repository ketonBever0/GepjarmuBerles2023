import '../css/contact.css'

const Contact = () => {
    return (

        <div class="h-100 bg-light p-5">
            <div>
                <h2 class="text-center text-dark p-5">Lépj velünk kapcsolatba!</h2>
            </div>
            <div class="d-flex align-items-center h-100">

                <div class="container">
                    <div class="row">
                        <div class="col text-center bg-light">
                            <h5 class="text-dark bg-secondary3 p-4">Elérhetőségeink:</h5>
                            <div class="rounded">
                                <table class="table table-striped  rounded border minwidth-60">

                                    <tbody>
                                        <tr class="table-primary">
                                            <th class="py-5 mw-20" scope="row">
                                                <h4 class="minwidth-100" ><i class="fa-solid fa-phone px-3"></i>Telefon:</h4>
                                            </th>
                                            <td class="py-5">
                                                <h5>+36 (66) 134-5724</h5>
                                            </td>
                                        </tr>
                                        <tr class="table-secondary">
                                            <th class="py-5" scope="row">
                                                <h4 class="minwidth-100" ><i class="fa-solid fa-at px-3"></i>E-mail:</h4>
                                            </th>
                                            <td class="py-5">
                                                <h5>berles@gmail.com</h5>
                                            </td>
                                        </tr>
                                        <tr class="table-primary">
                                            <th class="py-5" scope="row">
                                                <h4 class="minwidth-100" ><i class="fa-solid fa-house px-3"></i>Cím:</h4>
                                            </th>
                                            <td class="py-5">
                                                <h5>1007 Budapest, <br/> Széchenyi út 32.</h5>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>


                            </div>
                        </div>
                        <div class="col text-dark bg-primary2 rounded border minwidth-60">

                            <form>
                                <h5 class="text-dark p-4 text-center">Írj nekünk üzenetet:</h5>
                                <div class="form-group my-4 w-50 mx-auto">
                                    <label for="nevinput">Név:</label>
                                    <input type="email" class="form-control bg-secondary2 border-secondary minwidth-50" id="nevinput" placeholder="Hogy hívnak?"/>
                                </div>

                                <div class="form-group my-4 w-50 mx-auto">
                                    <label for="emailinput">E-mail cím:</label>
                                    <input type="email" class="form-control bg-secondary2 border-secondary minwidth-50" id="emailinput"
                                        placeholder="nev@pelda.com"/>
                                </div>
                                <div class="form-group my-4 w-50 mx-auto">
                                    <label for="uzenetinput">Üzenet tárgya:</label>
                                    <select class="form-control bg-secondary2 pointer border-secondary minwidth-50" id="uzenetinput">
                                        <option value="" selected disabled hidden>Mi az üzenet típusa?</option>
                                        <option>Kérdés</option>
                                        <option>Visszajelzés</option>
                                        <option>Panasz</option>
                                    </select>
                                </div>


                                <div class="form-group w-50 mx-auto">
                                    <label for="exampleFormControlTextarea1">Üzenet:</label>
                                    <textarea class="form-control border-secondary" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                <div class="py-1 d-flex justify-content-center">
                                    <button type="button" class="btn btn-primary w-25 my-5">Küldés!</button>
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