import React from 'react'

function StarterQuestions({text}) {
  return (
    <div className='startQ'>
        <div style={{position:"absolute", left: "50%", top:"50%", transform: "translate(-50%, -50%)",}}>{text}</div>
    </div>
  )
}

export default StarterQuestions