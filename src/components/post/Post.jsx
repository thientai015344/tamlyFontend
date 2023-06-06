import "./post.css";
import { MoreVert } from "@material-ui/icons";
import {  useEffect } from "react";
import {  useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import { colors } from "@material-ui/core";
import {Link} from 'react-router-dom';


export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const [cmt, setCmt]= useState(false);
  const [value, setCmt1]= useState("Bình luận");
  const [cmtbtn, setCmtbtn]= useState(false);
  const [inputValue, setInputValue] = useState("");
  const [color, setColor] = useState("");
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const likeHandler = () => {
    
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
    setColor("red");
  };

  useEffect(() => {
    const fetchUser = async () => {
    const res= await axios.get(`users/${post.userId}`);
    setUser(res.data)
    };
   
    fetchUser();
  }, [] )

  const handleClick= ()=>{
    setCmt(cmt ? false: true);
    console.log(cmt)

  }
  
  const handleClickCMT= ()=>{
    setCmtbtn(cmtbtn ? false: true);
    setInputValue("");

  }
  
  const handleUserInput = (e) => {
    setInputValue(e.target.value);
  };

  // Reset Input Field handler
  const resetInputField = () => {
    setInputValue("");
  };

 
  
  return (
    
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img className="shareProfileImg" src={user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"}
               
              />

            </Link>
            
            <span className="postUsername">
              {user.username}
            </span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span style={{marginLeft:"0px"}} className="postText ml3">{post?.desc}</span>
          <img  className="postImg" src={PF+post.img} />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft ml3">
            <FavoriteBorderRoundedIcon
              className="likeIcon"
              src={`${PF}heart.png`}
              onClick={likeHandler}
              style={{color:{color}}}
            ></FavoriteBorderRoundedIcon>
            <span className="postLikeCounter"> {like} người thích điều này</span>
          </div>
          <div className="postBottomRight">
          <ModeCommentOutlinedIcon onClick={handleClick}></ModeCommentOutlinedIcon>
            <span className="postCommentText"> {post.comment} bình luận</span>
           
          </div>
            
        </div>
        {
              cmt? 
              ( 
                <>
                <div style={{marginLeft:"30px", marginTop:"20px"}} className="media mb-4">
                    <img style={{width:'45px', height:'45px'}}className="d-flex mr-3 rounded-circle" src="assets/person/1.jpeg" alt="..." />
                    <div className="media-body">
                    <h6 className="mt-0">Ly Ly</h6>
                    Nguy hiểm lắm bạn ơi, mình lên đi khám bác sĩ gấp.
                    </div>
                </div>
                <div style={{marginLeft:"30px", marginTop:"20px"}} className="media mb-4">
                <div id="rightbarProfileImgContainer">
        <img id="rightbarProfileImg"  alt="" src="assets/doctors/doctors-3.jpg" />
        <span id="rightbarOnline"></span>
      </div>
                    <div className="media-body">
                    <h6 className="mt-0">Chuyên Gia {<i style={{color:"#3AE7E1"}} class="fas fa-check-square"></i>}</h6>
                    Bị bọ cạp cắn rất nguy hiểm, bạn nên đến gặp bác sĩ sớm để có cách điều trị hợp lý nhất
                    </div>
                </div>
                {
                                                      cmtbtn?
                                                      (
                                                        <>
                                                        <div style={{marginLeft:"30px", marginTop:"20px"}} className="media mb-4">
                <div id="rightbarProfileImgContainer">
        <img id="rightbarProfileImg"  alt="" src="assets/person/13.jpg" />
        <span id="rightbarOnline"></span>
      </div>
                    <div className="media-body">
                    <h6 className="mt-0">Anh Duy {<i style={{color:"#3AE7E1", fontSize:"1.2em"}} class="fas fa-check-square"></i>}</h6>
                   bạn nên đi khám bác sĩ
                    </div>
                </div>
                                                        </>
                                                      )
                                                      : <p></p>
                                                    }
               
                  <div className="row">
                                                    <div style={{marginLeft:"40px"}} className="form-group col-9">
                                                        <textarea className="form-control" name="message" rows={1} data-rule="required" data-msg="Please write something for us" placeholder="Bình luận" defaultValue={""} value={inputValue} onChange={handleUserInput}/>
                                                        <div className="validate" />
                                                    </div>
                                                        <button onClick={handleClickCMT} style={{width:"100px", height:"46px"}} className="btn  btn_normal" >
                                                             <i style={{fontSize:"10px"}} className="fab fa-telegram-plane"></i> &nbsp; Gửi
                                                        </button>
                                                        </div>
                                                   

                                                  
                </>)
              :<p></p>
            }
      </div>
    </div>
  );
}
