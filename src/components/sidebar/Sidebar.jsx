import "./sidebar.css";
import {Users} from '../../dummyData'

import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
import CloseFriend from "../closeFriend/CloseFriend";
import SearchLeft from "../searchLeft/SearchLeft";


export default function Sidebar() {
  return (
    <div className="sidebar">
      <SearchLeft></SearchLeft>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Phản hồi</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Tin nhắn</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Cộng đồng</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Câu hỏi</span>
          </li>
          
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Sự kiện</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Nhiều hơn</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
        {Users.map(u=>(
        <CloseFriend key ={u.id} user={u}></CloseFriend>
      ))}

        </ul>
      </div>
    </div>
  );
}
