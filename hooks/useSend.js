import React from "react";
import { Cerebras } from "@cerebras/cerebras_cloud_sdk";

export default function useSend(){
    async function sendQuestion(message) {
        const client = new Cerebras({
      apiKey: "csk-m6ekxk4wvxpjmdxjjvmdemxxfkjh48rdk6yc32epfdd92v5t",
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
       console.log(answer.choices[0].message.content)
        return answer.choices[0].message.content;
    }

    return sendQuestion;

}