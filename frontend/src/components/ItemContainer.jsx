import ItemCard from "./ItemCard";
import { useState, useContext, useEffect } from "react";
import JarmuContext from "./context/jarmuContext";


const ItemContainer = ({ title }) => {

  const [OsszesJarmu, setOsszesJarmu] = useState(null);




  useEffect(() => {
    fetch('http://localhost:8000/api/gepjarmuberles/gepjarmuvek/jarmuvek')
      .then(res => res.json())
      .then(data => setOsszesJarmu(data))
      .catch(err => console.log(err));
    // console.log(OsszesJarmu)
  })


  return (
    <div className="row d-flex justify-content-center align-items-center g-3 my-5 bg-secondary p-3">
      <h1 className="text-center text-white">{title}</h1>
      {OsszesJarmu && OsszesJarmu.map((jarmu, index) => (<ItemCard jarmu={jarmu} key={index} />))}


    </div>
  )
}

export default ItemContainer