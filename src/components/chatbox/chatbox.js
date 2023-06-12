import React, { useState, useEffect, useRef } from 'react';
import './chatbox.css'
import axios from 'axios';
import socketIOClient from "socket.io-client";
const socketURL = process.env.SOCKET;

function Chatbox(){

    const socketRef = useRef();
    const [id, setId] = useState();
    const [mess, setMess] = useState([]);
    const [Idget, setIdget] = useState('1');
    const [Idsend, setIdsend] = useState('');
    const [inputValue, setInputValue] = useState('');
    const scrollableRef = useRef(null);



    const scrollToBottom = () => {
      if (scrollableRef.current) {
        const scrollableElement = scrollableRef.current;
        scrollableElement.scrollTop = scrollableElement.scrollHeight;
      }
    };

    

    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(!isActive);
    };
    
    const classacti = `collapsible ${isActive ? 'active' : ''}`;
    const styke = `contentt ${isActive ? 'addheight' : ''}`;

    const getmsg = async (idip) => {
      if(!idip){
        console.log("not finded IdIp")
      }
      else{
        try {
          const response = await axios.get("/api/get-all-chat", { params: {id: idip}});
          const data = response.data;
          setMess(data.user)
        } catch (err) {
          console.log(err);
        }
      }
    };

    const fetchIpAddress = async () => {

      try {
        const response = await axios.get('http://ip-api.com/json');
        const ip = response.data;
        if(ip){
          const idIp = ip.query.replace(/\./g, '')
          setIdsend(idIp)
          getmsg(idIp);
        }
      } catch (err) {
        console.log(err);
      }
    }

    useEffect(() => {
        socketRef.current = socketIOClient.connect(socketURL)
        fetchIpAddress();
        socketRef.current.on('getId', data => {

          setId(data)
        }) // phần này đơn giản để gán id cho mỗi phiên kết nối vào page. Mục đích chính là để phân biệt đoạn nào là của mình đang chat.
    
        socketRef.current.on('sendDataServer', dataGot => {
          setMess(oldMsgs => [...oldMsgs, dataGot.data])
        }) // mỗi khi có tin nhắn thì mess sẽ được render thêm 
        scrollToBottom();
  
        return () => {
          socketRef.current.disconnect();
        };   
    }, []);

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
          sendMessage();
        }
    };
    
    const handleChange = (event) => {
    setInputValue(event.target.value);
    };
    
    const sendMessage = () => {
    if(inputValue !== null) {
        const msg = {
        incoming_msg_id: Idsend,
        outcoming_msg_id: Idget,
        content: inputValue,
        }
        socketRef.current.emit('sendDataClient', msg)
    }
    console.log("Tin nhắn đã được gửi:", inputValue);
    setInputValue("");
    };

  

    return( 
    <div className=" chat-bar-collapsible">
      <div className='loadding'></div>
        <button onClick={handleClick} id="chat-button" type="button" className={classacti} >Chat with us!
            {/* <i id="chat-icon" style="color: #fff;" className="fa fa-fw fa-comments-o"></i> */}
        </button>

        <div className={styke}>
            <div ref={scrollableRef} className="full-chat-block">

                <div className="outer-container">
                    <div className="chat-container">
                        <div id="chatbox">
                            {mess.map(item => (
                                item.incoming_msg_id == Idsend ?<p  className="userText"><span>{item.content}</span></p>:<p  className="botText"><span>{item.content}</span></p>
                            ))} 
                        </div> 
                        <div className="chat-bar-input-block">
                            <div id="userInput">
                                <input id="textInput"
                                    value={inputValue}
                                    onKeyDown={handleKeyDown}
                                    onChange={handleChange} className="input-box" type="text" name="msg"
                                    placeholder="Tap 'Enter' to send a message"/>
                                <p></p>
                            </div>

                            <div className="chat-bar-icons">
                                {/* <i id="chat-icon" style="color: crimson;" className="fa fa-fw fa-heart"
                                    />
                                <i id="chat-icon" style="color: #333;" className="fa fa-fw fa-send"
                                   /> */}
                            </div>
                        </div>

                        <div id="chat-bar-bottom">
                            <p></p>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </div>  
);}
export default Chatbox;