import React from 'react'

function Message({text, classN}) {
  return (
    <>
   
     <div className = {classN}>{text}
     </div>
    </>
  )
}

export default Message