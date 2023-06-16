import "./share.css";
import axios from "axios";
import {AuthContext} from "../../context/Authcontext"
import { useContext, useRef, useState } from "react";
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel,
} from "@material-ui/icons";


export default function Share() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {user} = useContext(AuthContext)
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e)=>{
    e.preventDefault();
    const newPost ={
      userId: user._id,
      desc: desc.current.value,
    }

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("/posts", newPost);
      
    } catch (err) {}
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
        <img
            className="shareProfileImg"
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
          />
          <input className="shareInput"
           placeholder={"Hello " + user.username + ", Bạn đang gặp vấn đề gì?"}
           ref={desc}
            
          />
        </div>
        <hr className="shareHr" />
       
        <form className="shareBottom"  onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia style={{color:"#FFCC33"}} htmlColor="file" className="shareIcon" />
              <span className="shareOptionText">Hình ảnh, video</span>
              <input style={{display:"none"}} type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e)=>setFile(e.target.files[0])}></input>

            </label>
          </div>
          <button className="shareButton" type="submit">
            Chia sẻ
          </button>
        </form>
      </div>
    </div>
  );
}
