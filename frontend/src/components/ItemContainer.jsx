import ItemCard from "./ItemCard";
import { useState, useEffect, useContext } from "react";
import JarmuContext from "./context/JarmuContext";
import FilterFormContext from "./context/FilterFormContext";
import { MagnifyingGlass } from "react-loader-spinner";


const ItemContainer = ({ title, onlyDiscounts }) => {

  const {
    osszesJarmu,
    fetchJarmuvek,
    isLoading,
    update
  } = useContext(JarmuContext);

  const {
    formData
  } = useContext(FilterFormContext);

  const { marka, modell, jarmutipus, ferohely } = formData;

  useEffect(() => {
    fetchJarmuvek();
    update();
  }, [marka, modell, jarmutipus, ferohely])


  return (
    <div className="row d-flex justify-content-center align-items-center g-3 my-5 bg-secondary p-3">
      <h1 className="text-center text-white m-4">{title}</h1>
      {
        isLoading ?
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor='#c0efff'
            color='#e15b64'
          />
          :
          (onlyDiscounts ?
            (osszesJarmu && osszesJarmu
              .filter(x => x.kedvezmeny != null)
              .map((jarmu, index) => (<ItemCard jarmu={jarmu} key={index} />))
            )
            :
            (osszesJarmu && osszesJarmu
              .filter(x => x.marka == (marka == "" ? x.marka : marka))
              .filter(x => x.modell == (modell == "" ? x.modell : modell))
              .filter(x => x.aka_gepjarmu_tipus == (jarmutipus == "" ? x.aka_gepjarmu_tipus : jarmutipus))
              .filter(x => x.ferohely == (ferohely == 0 ? x.ferohely : ferohely))
              .map((jarmu, index) => (<ItemCard jarmu={jarmu} key={index} />))
            )
          )
      }


    </div>
  )
}

export default ItemContainer