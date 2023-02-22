
const Faq = () => {
    return (
        <div>
            <div className="row my-3">
                <div className="col-md-12 d-flex justify-content-center">
                    <h1>GY.I.K</h1>
                </div>
            </div>
            <div className="row d-flex justify-content-center align-items-center g-3 my-5 w-75 m-auto">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Hogyan zajlik a bérlés?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <p>
                                Bérelni személyesen, az egyik bérlési ponton vagy az online weboldalunkon is van lehetőség.
                            </p>

                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Mire van szükségem gépjárműbérléshez?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body"><p>A bérléshez személyi igazolványra, lakcímkártyára, adóigazolványra és vezetői engedélyre van szükség.</p></div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Hány éves kortól bérelhetek?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body"><p>Bérelni 17 éves kortól lehetséges.</p></div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                Bérelhetek autót más számára?
                            </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body"><p>Igen, viszont a bérlésnyugta egyetlen fő adataival állítható ki.</p></div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                Hogyan tájékozódhatok az akciókról?
                            </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body"><p>Honlapunk katalógusában számos akcióval szolgálhatunk a bérlőink számára.</p></div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingSix">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                Mire figyeljek gépjármű kiválasztásakor?
                            </button>
                        </h2>
                        <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body"><p>Kiválasztáskor fontos a férőhely, az üzemanyag kapacitás és a tervezett táv figyelembevétele.</p></div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingSeven">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                Hogyan tudok fizetni?
                            </button>
                        </h2>
                        <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body"><p>Készpénzt és bankkártyát is elfogadunk.</p></div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingEight">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                                Hogyan működik az árazás?
                            </button>
                        </h2>
                        <div id="flush-collapseEight" className="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body"><p>A gépjárművekre napi díjat számolunk fel, ebbe beletartozik a visszavitel napja és a hiányzó üzemanyag díja is.</p></div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingNine">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                                Mi történik, ha később viszem vissza az autót?
                            </button>
                        </h2>
                        <div id="flush-collapseNine" className="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body"><p>Ezesetben a további napokat is felszámoljuk normál áron.</p></div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTen">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                                Lehet előre bérelni?
                            </button>
                        </h2>
                        <div id="flush-collapseTen" className="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body"><p>Igen, 6 hónappal.</p></div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingEleven">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEleven" aria-expanded="false" aria-controls="flush-collapseEleven">
                                Tele tankkal kell visszavinni az autót?
                            </button>
                        </h2>
                        <div id="flush-collapseEleven" className="accordion-collapse collapse" aria-labelledby="flush-headingEleven" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body"><p>Nem, de az üzemanyag hiányzó mennyiségét is beleszámoljuk a teljes fizetendő összegbe.</p></div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwelve">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwelve" aria-expanded="false" aria-controls="flush-collapseTwelve">Van lehetőség hamarabb visszavinni a gépjárművet?
                                
                            </button>
                        </h2>
                        <div id="flush-collapseTwelve" className="accordion-collapse collapse" aria-labelledby="flush-headingTwelve" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body"><p>Igen, ezesetben a fennmaradó napokat nem kell kifizetni.</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq