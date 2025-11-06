import React from "react";
import useIsVisible from "../../hooks/useIsVisible";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function NavLinks({ heroSection, aboutUs, capabilities, technology }) {
  const scroll = (sec) => {
    sec.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="links">
    <FontAwesomeIcon className="navIcon" icon={faArrowRight}/>
      <div
        className="link"
        onClick={() => {
          scroll(heroSection);
        }}
        style={{ opacity: useIsVisible(heroSection) ? "1" : "0.5" }}
      >
        Hero Section
      </div>
      <div
        className="link"
        onClick={() => {
          scroll(aboutUs);
        }}
        style={{ opacity: useIsVisible(aboutUs) ? "1" : "0.5" }}
      >
        About Us
      </div>
      <div
        className="link"
        onClick={() => {
          scroll(capabilities);
        }}
        style={{ opacity: useIsVisible(capabilities) ? "1" : "0.5" }}
      >
        Capabilities
      </div>
      <div
        className="link"
        onClick={() => {
          scroll(technology);
        }}
        style={{ opacity: useIsVisible(technology) ? "1" : "0.5" }}
      >
        Technology
      </div>
    </div>
  );
}

export default NavLinks;
