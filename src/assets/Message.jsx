import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function Message({ text, classN }) {

  return (
    <>
     
      
        <div className={classN}>   
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      
    </>
  );
}

export default Message;
