import React, { useRef } from 'react'

const FocusInput = () => {

  const inpRef = useRef(null)
  const hanldleCLick = ()=>{
  inpRef.current.focus()
  }
  return (
    <div>
      <input ref={inpRef} type="text" placeholder='some'/>
      <button onClick={hanldleCLick}>Focus The Input</button>
    </div>
  )
}

export default FocusInput

