import React from 'react'
import Timer from './component/Timer'
import Timer1 from './component/Timer1'
import Timer2 from './component/Timer2'
// import FocusInput from './component/focusInput'

const App = () => {
  return (
    <div>
      { <Timer/>}
      <Timer1/>
      <Timer2/>
      {/* <FocusInput/> */}
    </div>
  )
}

export default App
