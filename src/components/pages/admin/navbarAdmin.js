import { useContext} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import homecss from '../../pages/homecss.css'
import Admin from './admin'
import Post from './post'
import ChatU from './chatu'
import Index from ".";
import CreatChat from "./creatPost"




function NavbarAdmin(){
//   const check = useContext(AuthContext);
//     console.log(check.user)
    return( 
<Router>  
    <div className="adminLeft"> 
        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto adminnn">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/admin">Trang chủ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/admin/post">Quản lý bài viết</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/admin/chat">Chat</Link>
                        </li>
                        
                    </ul>
                </div>
               
            </div>
        </nav>
    </div>  
    <Switch>
        <Route exact path="/admin/chat">
            < ChatU/>
        </Route>
        <Route exact path="/admin/post">
            <Post />
        </Route>
        <Route exact path="/admin">
            <Index></Index>
        </Route>
        <Route exact path="/admin/creatPost">
            <CreatChat></CreatChat>
        </Route>
    </Switch>        
    </Router>
);}
export default NavbarAdmin;