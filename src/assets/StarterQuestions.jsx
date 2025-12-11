import React from "react";
import { useState } from "react";
import useSend from "../../hooks/useSend";

function StarterQuestions({ text }) {
  const send = useSend();
  const [debounce, setDeb] = useState(false);

  return (
    <div className="startQ" onClick={() => {
      if(!debounce){
            setDeb(true)
          setTimeout(() => {
            setDeb(false)

          },1500)
      }
      
      !debounce && send(text)


      
    }}>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default StarterQuestions;
