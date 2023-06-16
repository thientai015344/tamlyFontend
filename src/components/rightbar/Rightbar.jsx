import "./rightbar.css";
import {Users} from '../../dummyData'
import Online from '../online/Online.jsx'
import Navbar from "../layouts/Navbar";

export default function Rightbar({profile}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {
    return (
      <>
         <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Người liên hệ</h4>
        <ul className="rightbarFriendList">
        {Users.map(u=>(
        <Online key ={u.id} user={u}></Online>
      ))}

         
        </ul>
      </>
      );
  }

  const ProfileRightbar = () => {

    return (
      <>
        <h4 className="rightbarTitle">Thông tin người dùng</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Thành phố:</span>
            <span className="rightbarInfoValue">Ho Chi Minh</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Quê Quán:</span>
            <span className="rightbarInfoValue">Ho Chi Minh</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Tình trạng mối quan hệ:</span>
            <span className="rightbarInfoValue">
                Độc thân
            </span>
          </div>
        </div>
       
        <h4 className="rightbarTitle">Các chuyên gia hàng đầu</h4>
        <div className="rightbarFollowings">
        
              <div className="rightbarFollowing">
                <img
                  src={`${PF}person/4.jpeg`}
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">KhanhLy</span>
              </div>

              <div className="rightbarFollowing">
                <img
                  src={`${PF}person/6.jpeg`}
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">KhanhLy</span>
              </div>

              <div className="rightbarFollowing">
                <img
                  src={`${PF}person/4.jpeg`}
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">KhanhLy</span>
              </div>

              <div className="rightbarFollowing">
                <img
                  src={`${PF}person/5.jpeg`}
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">KhanhLy</span>
              </div>

              <div className="rightbarFollowing">
                <img
                  src={`${PF}person/3.jpeg`}
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">KhanhLy</span>
              </div>

              <div className="rightbarFollowing">
                <img
                  src={`${PF}person/2.jpeg`}
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">KhanhLy</span>
              </div>
           
         
       
         
        </div>
         </>
      );
    
  }
   return (
      <>
      <div className='rightbar'>
       {profile? <ProfileRightbar></ProfileRightbar>: <HomeRightbar></HomeRightbar>}
        </div>
      </>
    );
  
}
