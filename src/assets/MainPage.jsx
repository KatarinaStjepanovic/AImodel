import React from "react";
import { Link, useNavigate } from "react-router-dom";

function MainPage({heroSection}) {
  const nav = useNavigate();
  
  return (
    <div className="mainPage" ref={heroSection} >
      <div className="mainBubble" >
        <div className="mainHeader">Explore the Power of Thought in Code</div>
        <div className="mainText">
          Discover how our AI solutions transform data into decisions that move
          the world forward.
        </div>
           <Link to="/AIchat">
        <button className="mainBtn">Try Now</button>
        </Link>
        <div className="mainMore">Learn More</div>
        <div className="mainVideo">
          <video
            width="1000"
            height="800"
           loop
            autoPlay
            muted
            playsInline
            controls={false}
          >
            <source src="./public/Header.mp4" type="video/mp4"></source>
            Video Could Not Load
          </video>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
