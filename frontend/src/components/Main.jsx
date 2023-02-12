import React, { useContext } from 'react'
import JarmuContext from './context/jarmuContext'
import FormContainer from './FormContainer'
import ItemContainer from './ItemContainer'
import ReviewContainer from './ReviewContainer'

const Main = () => {
  return (
    <div>
      <ItemContainer title={"Kiemeltek"} onlyDiscounts={true} />
      <ReviewContainer />
    </div>
  )
}

export default Main