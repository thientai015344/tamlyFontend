import { useContext, useRef, useState, useEffect } from "react";
import "./admin.css";
import DisplayChat from "./displayChat";
import avatagu from "./profile.png"
import axios from "axios";
import socketIOClient from "socket.io-client";

export default function ChatU() {
  const socketURL = process.env.SOCKET;

  const [Id, setId] = useState([]);
  const [name, setname] = useState();

  const [mess, setMess] = useState([]);
  const [listuser, setlistuser] = useState([]);
  const [listIduser, setlistIduser] = useState([]);
  const socketRe = useRef();

  const Idadmin = sessionStorage.getItem('Id');

  const handleClick = (event) => {
    event.preventDefault();
    let aa =[];
    const Id = event.currentTarget.id;
    const namel = event.currentTarget.childNodes[0].wholeText;
    aa.push(Id)
    aa.push(namel)
    console.log(aa)
    setId(aa);
    
  };

  useEffect(() => {
    socketRe.current = socketIOClient.connect(socketURL)
    socketRe.current.on('getId', data => {
      setId(data);
    });
  
    socketRe.current.on('sendDataServer', dataGot => {
      setMess(oldMsgs => [...oldMsgs, dataGot.data]);
    });
    handleClick()

    return () => {
      socketRe.current.disconnect();
    };

    getAlluserChat();
  }, []);


  const getAlluserChat = async () => {
  
    try {
      const response = await axios.get("/api/get-all-chat", { params: {id: Idadmin}});
      const data = response.data.user.reverse();
      let arrId = [];
      let listtexxt = [];

      for (let i = 0; i < data.length; i++) {
        const item = data[i];
       if(!arrId.includes(item.incoming_msg_id) && item.incoming_msg_id !== Idadmin.toString()&& item.incoming_msg_id !== null){
        arrId.push(item.incoming_msg_id)
        listtexxt.push(item)


       }
       else if(!arrId.includes(item.outcoming_msg_id) && item.outcoming_msg_id !== Idadmin.toString()&& item.outcoming_msg_id !== null){
            arrId.push(item.outcoming_msg_id)
            listtexxt.push(item)
       }else{
        console.log("hehe")
       }
     
      }
      console.log(arrId)
      console.log(listtexxt)

      setlistIduser(arrId)
      setlistuser(listtexxt)

 
      setMess(data.user)
    } catch (err) {
      console.log(err);
    }
  
  };

  return (
    <div className="adminRight dplflex">
      <div className="adminLeft">
        <ul className="luchat">

          
          {listuser.map((item, index) => {
            if (item !== null) {
              return (
                <li id={item.incoming_msg_id !== Idadmin.toString()? item.incoming_msg_id : item.outcoming_msg_id} onClick={handleClick} className="itemchat">
                  Khách hàng {index+1}
                  <span className="textHistory">{item.content}</span>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div className="adminRight ">

        <DisplayChat getId={Id} ></DisplayChat>
        
      </div>
        
    </div>
   
  );
}
