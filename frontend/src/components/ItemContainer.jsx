import ItemCard from "./ItemCard"

const ItemContainer = () => {
  return (
    <div className="row d-flex justify-content-center align-items-center g-3 my-5 bg-secondary p-3">
      <h1 className="text-center text-white">Kiemelt termékeink</h1>
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>
  )
}

export default ItemContainer