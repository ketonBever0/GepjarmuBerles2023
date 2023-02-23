
const BackgroundImage = () => {
    return (
        <div className="text-center bg-image p-5" style={{
            backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
            minHeight: 450, backgroundRepeat: "no-repeat", backgroundSize: "cover"
        }}>
            <div className="mask p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white">
                        <h1 className="mb-4">Üdvözöljük a Portálunkon!</h1>
                        <h4 className="mb-4 mt-4">Újonnan alapult cégünk gépjármű bérbeadással foglalkozik.<br/>Nálunk lehetősége van gépjárműveket bérelni.</h4>
                    </div>
                </div>
                {/* <a className="btn btn-outline-light btn-lg m-3" role="button">Dobj egy random járművet!</a> */}
                <div className="m-4 text-white">
                    <div className="d-flex flex-column flex-lg-row justify-content-around gap-3" style={{ listStyle: "none" }}>
                        <div className="p-2 bd-highlight">KIEMELKEDŐ KEDVEZMÉNYEK</div>
                        <div className="p-2 bd-highlight">ÚJ JÁRMŰVEK ÉS RÉGISÉGEK</div>
                        <div className="p-2 bd-highlight">SZÉLES VÁLASZTÉK</div>
                        <div className="p-2 bd-highlight">RUGALMAS ÜGYINTÉZÉS</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackgroundImage