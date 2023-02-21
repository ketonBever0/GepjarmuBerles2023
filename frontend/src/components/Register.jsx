import '../css/register.css'

const Login = () => {
    return (
        <div>
            <div class="bg-beige d-flex justify-content-center">
                <div class="container my-5 cont-shadow m-5 w-100">
                    <div class="row d-grid ">
                        <div
                            class="col-sm p-5 text-center d-flex justify-content-center bg-dark2 text-light min-width container2 w-100">
                            <div class=" w-100">
                                <h3 class="pt-4 header_signup">Regisztráció</h3>
                                <form class="container w-100 mt-5">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md">
                                                <div class="form-group pt-2 mx-auto">
                                                    <label><span class="redStar">* </span>Teljes név:</label><br />
                                                    <input required type="text" id="rendszam" class="inputStyleSignup"
                                                        autocomplete="off" />
                                                </div>
                                                <div class="form-group pt-2">
                                                    <label><span class="redStar">* </span>E-mail cím:</label><br />
                                                    <input required type="email" id="" class="inputStyleSignup"
                                                        autocomplete="off" />
                                                </div>
                                                <div class="form-group pt-2 mx-auto">
                                                    <label><span class="redStar">* </span>Jelszó:</label><br />
                                                    <input required type="password" id="" class="inputStyleSignup"
                                                        autocomplete="off" />
                                                </div>
                                                <div class="form-group pt-2 mx-auto">
                                                    <label><span class="redStar">* </span>Jelszó mégegyszer:</label><br />
                                                    <input required type="password" id="" class="inputStyleSignup"
                                                        autocomplete="off" />
                                                </div>
                                                <div class="form-group pt-2 mx-auto">
                                                    <label><span class="redStar">* </span>Teljes név:</label><br />
                                                    <input required type="text" id="" class="inputStyleSignup"
                                                        autocomplete="off" />
                                                </div>
                                                <div class="form-group pt-2 mx-auto">
                                                    <label><span class="redStar">* </span>Irányítószám:</label><br />
                                                    <input required type="number" id="" class="inputStyleSignup"
                                                        autocomplete="off" />
                                                </div>
                                            </div>
                                            <div class="col-md">
                                                <div class="form-group pt-2 mx-auto">
                                                    <label><span class="redStar">* </span>Település neve:</label><br />
                                                    <input required type="text" id="" class="inputStyleSignup"
                                                        autocomplete="off" />
                                                </div>
                                                <div class="form-group pt-2 mx-auto">
                                                    <label><span class="redStar">* </span>Közterület
                                                        jellege:</label><br />
                                                    <input required type="text" id="" class="inputStyleSignup"
                                                        autocomplete="off" />
                                                </div>
                                                <div class="form-group pt-2 mx-auto">
                                                    <label><span class="redStar">* </span>Közterület neve:</label><br />
                                                    <input required type="text" id="" class="inputStyleSignup"
                                                        autocomplete="off" />
                                                </div>
                                                <div class="form-group pt-2 mx-auto">
                                                    <label><span class="redStar">* </span>Házszám:</label><br />
                                                    <input required type="text" id="" class="inputStyleSignup"
                                                        autocomplete="off" />
                                                </div>
                                                <div class="form-group pt-2 mx-auto">
                                                    <label><span class="redStar">* </span>Telefonszám:</label><br />
                                                    <input required type="text" id="" class="inputStyleSignup"
                                                        autocomplete="off" />
                                                </div>

                                                <div class="form-group pt-2 mx-auto">
                                                    <label>Adószám (cég esetében):</label><br />
                                                    <input required type="text" id="" class="inputStyleSignup"
                                                        autocomplete="off" />
                                                </div>
                                            </div>
                                        </div>
                                    </div><input type="submit" class="btn btn-primary m-4 signup_btn" />
                                </form>
                                <p className=''>A piros csillaggal (<span className='redStar'>*</span>) jelölt mezők kitöltése kötelező!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login