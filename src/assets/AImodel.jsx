import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useNavigation } from 'react-router-dom';
import useSend from "/hooks/useSend.js";

import StarterQuestions from './StarterQuestions';
import Message from "./Message.jsx"
import Loader from './Loader';

function AImodel() {
  const [input, setInput] = useState("");
  const [start, setStart] = useState(true);
  const [showed, setShowed] = useState([]);
  const [messages, setMessages] = useState([]);
  const send = useSend();
   
  const nav = useNavigate();
  const navigation = useNavigation();

  useEffect( () => {
    try{
    fetch("/questions.json")
     .then(respone => respone.json())
     .then( data => {
      console.log(data)
      const random = data.sort( () => .5 - Math.random()).slice(0,3);
      setShowed(random)
      }
     )
    }catch(err){
      console.error("Error while catching questions: ", err);
    }
    
  }, [])
   
  const handleClick = (event) => {
    const {value} = event.target;
    setInput(value);
  }
  return ( 
    <>
     {navigation.state === "loading" ? <Loader /> : 
    <div className='AImodel'>
      {start &&   <div className='startDiv'>
        <div className='startText'>Hello, I’m Kaya</div>
        <div className='startQs'>
          {showed.map( s => {
            return < StarterQuestions key = {s.id} text = {s.text}/>
          })}
        </div>
      </div>
    }
     < FontAwesomeIcon icon={faArrowLeft} className='back' onClick={() => nav(-1)}/>
      <img className='AIback' src='/AboutUs.png' alt='Background' />
      <div className='logo'>MyAI</div>
      <div className='AIbubble'>
        <div className = "AImessages">
          {messages.map((m, id) => {
            return < Message text = {m.text} classN = {m.role} key = {id} />
          })}

        </div>
        <div className='AIchatTitle'>Ask Questions</div>
        <input className='AIchat' value={input} onChange={handleClick}/>
     < FontAwesomeIcon icon={faPaperPlane} className='send' style={{opacity: input !== "" ? 1 : 0}} onClick = { () => {
      setInput("");
      const answer = send(input);
      setMessages((prev) => {
        const q = [...prev]
        q.push({text: input, role: "user"});
        q.push({text: answer, role: "bot"});
        return q;
      })
      if(start){
      setStart(false);
      }
     }}/>

      </div>
    </div>}
    </>
  )
}

export default AImodel