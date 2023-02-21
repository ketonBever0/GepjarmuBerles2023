import '../css/login.css'

const Login = () => {
    return (
        <div>
            <div class="bg-beige d-flex justify-content-center">
                <div class="container my-5 cont-shadow m-5">
                    <div class="row d-grid">
                        <div class="col-sm p-5 text-center d-flex justify-content-center bg-primary2  min-width container2">
                            <div class="w-100">
                                <h3 class="pt-4 header_login">Bejelentkezés</h3>
                                <form class="container w-100">
                                    <div class="form-group pt-4">
                                        <label><span class="redStar">* </span>E-mail cím:</label><br />
                                        <input required type="email" id="" class="inputStyleLogin" autocomplete="off" />
                                    </div>
                                    <div class="form-group pt-2 mx-auto">
                                        <label><span class="redStar">* </span>Jelszó:</label><br />
                                        <input required type="password" id="" class="inputStyleLogin"
                                            autocomplete="off" />
                                    </div>
                                    <input type="submit" class="btn btn-primary m-4 login_btn" />
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