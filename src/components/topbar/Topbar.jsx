import "./topbar.css";
import { Search, Chat } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {AuthContext} from "../../context/Authcontext"
import { useContext } from "react";


export default function Topbar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {user} = useContext(AuthContext);
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">SaviorNews</span>
        </Link>
      </div>
      <div className="topbarCenter">
       
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
         
        </div>
        <div className="topbarIcons">
          
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          
        </div>
       <Link to="/profile" ><img className='topbarImg'  src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }></img> </Link>
      </div>
    </div>
  );
}
