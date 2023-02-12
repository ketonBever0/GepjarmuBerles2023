import FormContainer from "./FormContainer"
import ItemContainer from "./ItemContainer"

const Catalog = () => {


  return (
    <div>
      <FormContainer />
      <ItemContainer title={"Járműveink"} onlyDiscounts={false} />
    </div>
  )
}

export default Catalog