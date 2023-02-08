import React from 'react'
import Notify from './allUse/Toast'

function Test({text}) {
  return (
    <div>
      <div>{text}</div>
      <button onClick={() => Notify.tSuccess("Siker")}>Siker toast</button>
      <button onClick={() => Notify.tError("Fail")}>Fail toast</button>
    </div>
  )
}

export default Test