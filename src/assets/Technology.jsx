import React from "react";

function Technology({ technology }) {
  return <div className="techDiv" ref={technology}>
    <img src="/TechBack.png" className="techBack" alt="Background"/>
    <img src="/Tech.png" className="techImg" alt="Image" />
    <div className="techH1"> How It Works</div>
    <div className="techText">Our AI runs on a transformer-based language model designed for advanced text understanding and generation.<br/> Trained on large-scale datasets, it learns context, intent, and tone to deliver accurate, human-like responses.<br/> It operates purely through text — no agents, voice, or visual processing — ensuring speed, precision, and reliability</div>
       </div>
}

export default Technology;
