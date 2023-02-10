import ItemCard from "./ItemCard";
import { useState, useEffect, useContext } from "react";
import JarmuContext from "./context/jarmuContext";


const ItemContainer = ({ title }) => {


  const {
    OsszesJarmu
  } = useContext(JarmuContext);



  return (
    <div className="row d-flex justify-content-center align-items-center g-3 my-5 bg-secondary p-3">
      <h1 className="text-center text-white">{title}</h1>
      {OsszesJarmu && OsszesJarmu.map((jarmu, index) => (<ItemCard jarmu={jarmu} key={index} />))}


    </div>
  )
}

export default ItemContainer