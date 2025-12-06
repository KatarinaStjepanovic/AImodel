import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import useSend from "../../hooks/useSend";

import { MessageContext } from "../MessageContext";
import { faArrowLeft, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useNavigation } from "react-router-dom";

import StarterQuestions from "./StarterQuestions";
import Message from "./Message.jsx";
import Loader from "./Loader";

function ChatUI() {
  const send = useSend();
  const nav = useNavigate();
  const navigation = useNavigation();
  const { input, start, messages, showed, setInput } =
    useContext(MessageContext);

  const div = useRef(null);

  useEffect(() => {
    if (!div.current) return;

 requestAnimationFrame(() => {
    div.current.scrollTo({
      top: div.current.scrollHeight,
      behavior: "smooth",
    });
  });
  }, [messages]);

  const handleClick = (event) => {
    const { value } = event.target;
    setInput(value);
  };

  const handleKey = (event) => {
    if (event.key === "Enter" && input.trim() != "") {
      send(input);
    }
  };

  return (
    <>
      {navigation.state === "loading" ? (
        <Loader />
      ) : (
        <div className="AImodel">
          {start && (
            <div className="startDiv">
              <div className="startText">Hello, I’m Kaya</div>
              <div className="startQs">
                {showed.map((s) => {
                  return <StarterQuestions key={s.id} text={s.text} />;
                })}
              </div>
            </div>
          )}
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="back"
            onClick={() => nav(-1)}
          />
          <img className="AIback" src="/AboutUs.png" alt="Background" />
          <div className="logo">MyAI</div>
          <div className="AIbubble">
            <div className="AImessages" ref={div}>
              {messages.map((m, id) => {
                return <Message text={m.text} classN={m.role} key={id} />;
              })}
            </div>
            <div className="AIchatTitle">Ask Questions</div>
            <input
              className="AIchat"
              value={input}
              onChange={handleClick}
              onKeyDown={() => handleKey(event)}
            />
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="send"
              style={{ opacity: input !== "" ? 1 : 0 }}
              onClick={() => {
                send(input);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ChatUI;
