import React from "react";
import { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AImodel from "./AImodel";
import NavLinks from "./NavLinks";
import MainPage from "./MainPage";
import AboutUs from "./AboutUs";
import Capabilities from "./Capabilities";
import Technology from "./Technology";

function App() {
  const heroSection = useRef(null);
  const aboutUs = useRef(null);
  const capabilities = useRef(null);
  const technology = useRef(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
            
              <MainPage heroSection = {heroSection} aboutUs={aboutUs} />
              < AboutUs aboutUs = {aboutUs} />
              < Capabilities capabilities={capabilities}/>
              < Technology  technology={technology}/>
                <NavLinks
                heroSection={heroSection}
                aboutUs={aboutUs}
                capabilities={capabilities}
                technology={technology}
              />
            </>
          }
        />
        <Route path="/AIchat" element={<AImodel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
