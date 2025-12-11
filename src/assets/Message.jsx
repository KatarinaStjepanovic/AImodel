import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function Message({ text, classN }) {
  const [dots, setDots] = useState(false);
 
  useEffect(() => {
    if (classN === "bot") {
      setDots(true);
      setTimeout(() => {
        setDots(false);
      }, 2000);
    }
  }, [classN]);
  return (
    <>
     
      
        <div className={classN}>
           {
             dots ? 
             <div className="msgLoader"> </div>
          :  
          <ReactMarkdown>{text}</ReactMarkdown>
          }
        </div>
      
    </>
  );
}

export default Message;
