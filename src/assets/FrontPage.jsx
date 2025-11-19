import React from "react";
import { useRef } from "react";

import NavLinks from "./NavLinks";
import MainPage from "./MainPage";
import AboutUs from "./AboutUs";
import Capabilities from "./Capabilities";
import Technology from "./Technology";
import { useNavigation } from "react-router-dom";
import Loader from "./Loader";

function FrontPage() {
  const heroSection = useRef(null);
  const aboutUs = useRef(null);
  const capabilities = useRef(null);
  const technology = useRef(null);

  const nav = useNavigation();

  return (
    <>
      {nav.state === "loading" ? <Loader /> : 
      <>
      <MainPage heroSection={heroSection} aboutUs={aboutUs} />
      <AboutUs aboutUs={aboutUs} />
      <Capabilities capabilities={capabilities} />
      <Technology technology={technology} />
      <NavLinks
        heroSection={heroSection}
        aboutUs={aboutUs}
        capabilities={capabilities}
        technology={technology}
      />
       </>
    }
    </>
      
  );
}

export default FrontPage;
