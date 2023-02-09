import React from 'react'
import FormContainer from './FormContainer'
import ItemContainer from './ItemContainer'
import ReviewContainer from './ReviewContainer'

const Main = () => {
  return (
    <div>
        <FormContainer />
        {/* <ItemContainer title={"Kiemeltek"} /> */}
        <ReviewContainer />
    </div>
  )
}

export default Main