import React from "react";

function AboutUs({ aboutUs }) {
  return (
    <div ref={aboutUs} className="abtUsSec">
      <div className="abtH1">
        We build intelligent systems that think, learn, and adapt.
      </div>
      <div className="abtText">
        Our mission is to turn complex data into clear decisions through
        advanced artificial intelligence.
        <br />
        By combining deep learning, automation, and intuitive design, we create
        technology that extends human capability — not replaces it.
        <br /> Our AI models are built for reliability, transparency, and speed.
        From predictive analytics to natural language understanding,
        <br /> we design tools that help businesses and developers work smarter,
        faster, and with greater impact.
      </div>
      <div className="abtImgDiv">
        <img className="abtUsImg" src="./public/AboutUs.png" alt="No Image" />
      </div>
    </div>
  );
}

export default AboutUs;
