import FormCim from "./form/FormCim"

const AboutUs = () => {
  return (
    <div>
      <h1 className="text-center my-3">Rólunk</h1>
      <div className="row d-flex justify-content-center">
        <div className="col-10 d-flex flex-column justify-content-center my-5">
          <p className="text-justify w-50 m-auto" style={{ textAlign: "justify" }}>
            A "cég neve" dolgozóiként szüntelenül azon vagyunk,hogy minél több érdeklődőt tegyünk elégedett ügyféllé, állandó partnerré.
            Célunk, hogy a bérlés folyamatát dinamikussá és egyszerűvé téve biztosítsuk klienseink gépjárműhöz jutását.
            Számos telephelyünknek köszönhetően több városban lehetséges bérelni nagy választékú, jó minőségű járműveink közül.
            Teljes körű szolgáltatást nyújtunk a gépkocsi kiválasztásától az ügyintézésen keresztül egészen a nyugtázásig.
            A vásárlói igényeknek megfelelően kedvező fizetési megoldásokat is kínálunk.
            Folyamatos kedvezményes lehetőségeinkről szinte lehetetlen lemaradni, hiszen a weboldalunk főoldalán máris tájékozódhat az akciós ajánlatainkról, illetve asszisztenseink is szívesen informálják Önt róluk.
            Szervizünkben felkészültek vagyunk a nálunk kapható márkák karbantartására és rendszeres ellenőrzésére. Bízunk benne, hogy megtalálja az Önnek leginkább megfelelő autót, amelynek kiválasztásához minden tőlünk telhető szakmai segítséget megadunk.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs