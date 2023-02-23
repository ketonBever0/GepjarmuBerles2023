import FormContainer from "./form/FormContainer"
import ItemContainer from "./Items/ItemContainer"

const Catalog = () => {


  return (
    <div>
      <FormContainer />
      <ItemContainer title={"Járműveink"} onlyDiscounts={false} />
    </div>
  )
}

export default Catalog