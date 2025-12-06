import React, { useState, useEffect } from "react";
import { MessageContext } from "../MessageContext.jsx";
import ChatUI from "./ChatUI.jsx";

function AImodel() {
  const [input, setInput] = useState("");
  const [start, setStart] = useState(true);
  const [showed, setShowed] = useState([]);
  const [messages, setMessages] = useState([]);

  const value = {
    input,
    setInput,
    start,
    setStart,
    messages,
    setMessages,
    showed,
    setShowed,
  };

  useEffect(() => {
    try {
      fetch("/questions.json")
        .then((respone) => respone.json())
        .then((data) => {
          console.log(data);
          const random = data.sort(() => 0.5 - Math.random()).slice(0, 3);
          setShowed(random);
        });
    } catch (err) {
      console.error("Error while catching questions: ", err);
    }
  }, []);

  return (
    <MessageContext.Provider value={value}>
      <ChatUI />
    </MessageContext.Provider>
  );
}

export default AImodel;
