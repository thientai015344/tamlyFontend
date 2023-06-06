import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Avatar, TextField } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import BackspaceIcon from "@material-ui/icons/Backspace";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import { format } from "timeago.js";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {  useEffect } from "react";
import axios from "axios";
import { ALL_POST, EDIT_COMMENT_POST, DELETE_COMMENT_POST, MY_POST, FRIEND_POST } from "../../../../graphql/posts";
import { notEmpty } from "../../../../alert";
import { userSelector } from "../../../../store/userSlice";

const Comment = ({ cmt, Pid }) => {
  
    const [user, setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="postAllComments">
      <Avatar  className="postAvatar" alt="User" src={user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"} />
      <div>
        <span className="postNameUserComment">{cmt.username}</span>
        <span className="postCommentAgo">{format(cmt.createdAt)}</span>
        <br />
        { 
          <div className="postChipContainer">
            <TextField
              className="postChipEditTxt"
             
              size="small"
              autoFocus
              id="outlined-secondary"
              // variant="filled"
              // color="secondary"
            />
           
          </div>
}
      </div>
    </div>
  );
};

export default Comment;