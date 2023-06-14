import { useRef, useEffect, useContext, useState } from "react";
import "./admin.css";
import socketIOClient from "socket.io-client";
import axios from "axios";
import avatagu from "./profile.png"
const socketURL = process.env.SOCKET;

export default function DisplayChat({ getId }) {
  const [Idget, setIdget] = useState([]);
  const contentRef = useRef(null);
  const [mess, setMess] = useState([]);
  const [message, setMessage] = useState('');
  const [id, setId] = useState();


  const socketRe = useRef();

  const text = useRef();
  const scrollableRef = useRef(null);
  const Idadmin = sessionStorage.getItem('Id');
 


  

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
          sendMessage();
        }
    };

  const handleClick = async () => {
  
    try {
      const response = await axios.get("/api/get-all-chat", { params: {id: Idadmin}
      });
      const data = response.data;
      setMess(data.user)
    } catch (err) {
      console.log(err);
    }
  
  };


  useEffect(() => {
    socketRe.current = socketIOClient.connect(socketURL)
    socketRe.current.on('getId', data => {
      setId(data);
    });
  
    socketRe.current.on('sendDataServer', dataGot => {
      setMess(oldMsgs => [...oldMsgs, dataGot.data]);
    });
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
    handleClick()
    setIdget(getId);
  
  
    return () => {
      socketRe.current.disconnect();
    };
  }, [getId]);


   const sendMessage = () => {
      if(text.current.value !== "") {
          const msg = {
            incoming_msg_id: Idadmin,
            outcoming_msg_id: Idget[0],
            content: text.current.value,
          }
          socketRe.current.emit('sendDataClient', msg)
      }
      console.log("Tin nhắn đã được gửi:", text.current.value);
      text.current.value = "";
    };


  return (
    <>
        <div className="titleTop">
          <img className="avatachat" src={avatagu} alt="" /> <h6>{Idget[1]}</h6>
        </div>
        <div className="Contentchat">

          <div className="conttent">
            <div ref={scrollableRef} className="textmsg">
            {mess.map(item => {
              if (item.incoming_msg_id === Idget[0]) {
                return (
                  <p className="botText" key={item.id}>
                    <span>{item.content}</span>
                  </p>
                );
              } else if (item.outcoming_msg_id === Idget[0]) {
                return (
                  <p className="userText" key={item.id}>
                    <span>{item.content}</span>
                  </p>
                );
              } else {
                return null;
              }
            })}
            </div>

            <div className="inputchat">
              <input type="text" className="text_send" onKeyDown={handleKeyDown} placeholder="send a message" ref={text} /> <button onClick={sendMessage} className="btn_send" type="button">Gui</button>
            </div>
          </div>


        </div>
    </>
   
  );
}
