import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function CapabilitiesDiv({cap}) {
  return (
    <Link to="/AIchat" style={{textDecoration: "none"}}>
    <div className='cap'>
        <div className='capTitle'>{cap.title}</div>
        <div className='capText'>{cap.text}</div>
        < FontAwesomeIcon icon={faArrowRight} className='goIcon'/>
    </div>
    </Link>

  )
}

export default CapabilitiesDiv