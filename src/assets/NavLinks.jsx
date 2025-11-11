import React, { use, useEffect, useMemo } from "react";
import useIsVisible from "../../hooks/useIsVisible";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function NavLinks({ heroSection, aboutUs, capabilities, technology }) {
  const hero = useIsVisible(heroSection);
  const about = useIsVisible(aboutUs);
  const cap = useIsVisible(capabilities);
  const tech = useIsVisible(technology);

   const activeIndex = useMemo(() => {
    if(hero){
      return 5;
    }else if(about){
      return 30;
    }else if(cap){
      return 55;
    }else if(tech){
      return 80;
    }else{
      return -1;
    }
  }, [hero,about, cap, tech]);
  
  const scroll = (sec) => {
    sec.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  
 
  return (
    <div className="links">
    <FontAwesomeIcon className="navIcon" icon={faArrowRight} style={{ top: `${activeIndex}%`}}/>
      <div
        className="link"
        onClick={() => {
          scroll(heroSection);
        }}
        style={{ opacity: hero ? "1" : "0.5" }}
      >
        Hero Section
      </div>
      <div
        className="link"
        onClick={() => {
          scroll(aboutUs);
        }}
        style={{ opacity: about? "1" : "0.5" }}
      >
        About Us
      </div>
      <div
        className="link"
        onClick={() => {
          scroll(capabilities);
        }}
        style={{ opacity: cap ? "1" : "0.5" }}
      >
        Capabilities
      </div>
      <div
        className="link"
        onClick={() => {
          scroll(technology);
        }}
        style={{ opacity: tech ? "1" : "0.5" }}
      >
        Technology
      </div>
    </div>
  );
}

export default NavLinks;
