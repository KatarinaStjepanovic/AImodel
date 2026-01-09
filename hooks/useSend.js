import React from "react";
import { Cerebras } from "@cerebras/cerebras_cloud_sdk";

import { useContext } from "react";
import { MessageContext } from "../src/MessageContext";

async function sendQuestion(message) {
  const key = import.meta.env.VITE_API_KEY;
  const client = new Cerebras({
    apiKey: key,
  });

  const answer = await client.chat.completions.create({
    model: "llama-3.3-70b",
    messages: [
      {
        role: "user",
        content: message,
      },
    ],
  });
  return answer.choices[0].message.content;
}



export default function useSend() {
  const { setMessages, setStart, setInput } = useContext(MessageContext);
  async function send(mes) {
    const userText = mes;
    const ans = await sendQuestion(mes)
    
      setMessages(prev => {
        setInput("");
        const newM = [...prev];
        newM.push({ text: userText, role: "user" });
        return newM;
      })
      
     setTimeout( () => {
       setMessages( prev => {
        const newM = [...prev]
         newM.push({text:ans, role: "bot"});
        return newM;
      })
     },1500)
     


    setStart(false);

  }


  return send;

}