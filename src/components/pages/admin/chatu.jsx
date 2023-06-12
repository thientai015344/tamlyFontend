import { useContext, useRef, useState } from "react";
import "./admin.css";
import DisplayChat from "./displayChat";
import axios from "axios";


export default function ChatU() {

  const [Id, setId] = useState();

  const handleClick = (event) => {
    event.preventDefault();
    const href = event.target.id;
    setId(href);
  };

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   loginCall(
  //     { username: username.current.value, password:password.current.value },
  //     dispatch
  //   );
  //   if(checklogin.user === null){
  //     console.log("đăng nhập thất bại")
  //   }
  //   else{
  //     history.push("/");
  //   }
    
  // };

  return (
    <div className="adminRight dplflex">
      <div className="adminLeft">
        <ul className="luchat">
          <li id="1" onClick={handleClick} className="itemchat">
            User1
          </li>

          <li id="42114205217" onClick={handleClick} className="itemchat">
            User2
          </li>

          <li id="42114205137" onClick={handleClick} className="itemchat">
            User3
          </li>

          <li id="4" onClick={handleClick} className="itemchat">
            User4
          </li>
          
        </ul>
      </div>
      <div className="adminRight ">

        <DisplayChat getId={Id} ></DisplayChat>
        
      </div>
        
    </div>
   
  );
}
