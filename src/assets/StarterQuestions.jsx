import React from "react";
import useSend from "../../hooks/useSend";

function StarterQuestions({ text }) {
  const send = useSend();

  return (
    <div className="startQ" onClick={() => {
      send(text)
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
