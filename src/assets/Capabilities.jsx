import React, { useEffect, useState } from 'react'
import CapabilitiesDiv from './CapabilitiesDiv';

function Capabilities({capabilities}) {
  const [caps, setCaps] = useState([]);

  useEffect(()=> {
      fetch("/capabilities.json")
      .then( response => response.json())
      .then( data => setCaps(data));
  }, [])
  return (
    <div ref={capabilities} className='capDiv'>
      <video className='capVideo'
           loop
            autoPlay
            muted
            playsInline
            controls={false}
          >
            <source src="./public/Category.mp4" type="video/mp4"></source>
            Video Could Not Load
          </video>
       <div className='allCaps'>
          {caps.map( (cap, id) => {
             return < CapabilitiesDiv cap = {cap} key = {id} />
          })}
       </div>
    </div>
  )
}

export default Capabilities