import '../css/vehicleform.css'

const VehicleAddForm = () => {
    return (
        <div>
            <form class="w-100 bg-cyan2">
                <h5 class="text-dark p-4 text-center">Új gépjármű felvétele:</h5>
                <div class="container d-grid gap-5 p-5">
                    <div class="row">

                    <div class="col-sm bg-primary3 rounded">
                            <div class="form-group my-4 width-10rem mx-auto">
                                <label for="rendszamInput"><span class="redStar">* </span>Rendszám:</label>
                                <input type="text" class="form-control bg-secondary2 border-secondary minwidth-50"
                                    id="rendszamInput"/>
                            </div>
                        </div>

                        <div class="col-sm bg-secondary2 rounded">
                            <div class="form-group my-4 width-10rem mx-auto col">
                                <label for="markaInput">Márka:<span class="redStar text-right">*</span></label>
                                <input type="text" class="form-control bg-secondary2 border-secondary minwidth-50" id="markaInput"/>
                            </div>
                        </div>

                        <div class="col-sm bg-primary3 rounded">
                            <div class="form-group my-4 width-10rem mx-auto">
                                <label for="modellInput"><span class="redStar">* </span>Modell:</label>
                                <input type="text" class="form-control bg-secondary2 border-secondary minwidth-50" id="modellInput"/>
                            </div>
                        </div>

                        <div class="col-sm bg-secondary2 rounded">
                            <div class="form-group my-4 width-10rem mx-auto">
                                <label for="kilometerInput"><span class="redStar">* </span>Kilométeróra-állás:</label>
                                <input type="text" class="form-control bg-secondary2 border-secondary minwidth-50" id="kilometerInput"/>
                            </div>
                        </div>
                    </div>

                    <div class="row">

                        <div class="col-sm bg-secondary2 rounded">
                            <div class="form-group my-4 width-10rem mx-auto ">
                                <label for="muszakiInput"><span class="redStar">* </span>Műszaki érvényesség:</label>
                                <input type="date" class="form-control bg-secondary2 border-secondary minwidth-50 pointer"
                                    id="muszakiInput"/>
                            </div>
                        </div>

                        <div class="col-sm bg-primary3 rounded">
                            <div class="form-group my-4 width-10rem mx-auto">
                                <label for="uzemanyagInput"><span class="redStar">* </span>Üzemanyag-kapacitás:</label>
                                <input type="number" class="form-control bg-secondary2 border-secondary minwidth-50"
                                    id="uzemanyagInput"/>
                            </div>
                        </div>

                        <div class="col-sm bg-secondary2 rounded">
                            <div class="form-group my-4 width-10rem mx-auto">
                                <label for="ferohelyInput"><span class="redStar">* </span>Férőhely:</label>
                                <input type="number" class="form-control bg-secondary2 border-secondary minwidth-50"
                                    id="ferohelyInput"/>
                            </div>
                        </div>

                        <div class="col-sm bg-primary3 rounded">
                            <div class="form-group my-4 width-10rem mx-auto">
                                <label for="kedvezmenyInput">Kedvezmény (%):</label>
                                <input type="number" placeholder="(opcionális)"
                                    class="form-control bg-secondary2 border-secondary minwidth-50" id="kedvezmenyInput"/>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm bg-primary3 rounded">
                            <div class="form-group my-4 width-10rem mx-auto">
                                <label for="egyediArInput"><span class="redStar">* </span>Egyedi ár:</label>
                                <input type="number" placeholder="(opcionális)"
                                    class="form-control bg-secondary2 border-secondary minwidth-50" id="egyediArInput"/>
                            </div>
                        </div>

                        <div class="col-sm bg-secondary2 rounded">
                            <div class="form-group my-4 width-10rem mx-auto">
                                <label for="telephelyInput"><span class="redStar">* </span>Telephely:</label>

                                <select class="form-control bg-secondary2 border-secondary minwidth-50 pointer" id="telephelyInput">
                                    <option selected>Válassz...</option>
                                    <option value="1">One</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-sm bg-primary3 rounded">
                            <div class="form-group my-4 width-10rem mx-auto">
                                <label for="tipusInput"><span class="redStar">* </span>Gépjármű típus:</label>
                                <select class="form-control bg-secondary2 border-secondary minwidth-50 pointer" id="tipusInput">
                                    <option selected>Válassz...</option>
                                    <option value="1">One</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-sm bg-secondary2 rounded">
                            <div class="form-group my-4 width-10rem mx-auto">
                                <label for="kepurlInput"><span class="redStar">* </span>Kép URL:</label>
                                <input type="text" class="form-control bg-secondary2 border-secondary minwidth-50"
                                    id="kepurlInput"/>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary width-5rem m-auto" id="gepjarmuKuldesGomb">Küldés!</button>
                    <span> <i class="fas fa-info-circle text-xl"></i> <span className="redStar">*</span> A csillaggal megjelöltek kitöltése kötelező!</span>
                </div>
            </form>
        </div>
    )
}

export default VehicleAddForm