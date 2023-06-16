import "./profile.css";


import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Topbar from "../../topbar/Topbar";
import Sidebar from "../../sidebar/Sidebar";
import Rightbar from "../../rightbar/Rightbar";
import Feed from "../../feed/Feed";
import Navbar from "../../layouts/Navbar";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;

 

  return (
    <>
     <Navbar></Navbar>
     <Topbar></Topbar>
     <div style={{background:'white'}} className="profile">
     <Sidebar/>
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                 src={`${PF}post/2.jpeg`}
                alt=""
              />
              <img
                className="profileUserImg"
                src={`${PF}person/1.jpeg`}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName"></h4>
              <span className="profileInfoDesc"></span>
            </div>
          </div>
          <div className="profileRightBottom">
          <Feed></Feed>
          <Rightbar profile= 'profile'></Rightbar>
          </div>
          </div>
        </div>
        
    </>
  );
}
