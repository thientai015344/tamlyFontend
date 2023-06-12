import { useContext, useRef } from "react";
import "./login.css";
import { CircularProgress } from "@material-ui/core";
import "../homecss.css";
import { loginCall } from "../../../apiCalls";
import { AuthContext } from "../../../context/Authcontext";
import {Link} from 'react-router-dom';
import { useHistory } from "react-router";

export default function Login() {
  const username = useRef();
  const password = useRef();
  const { isFetching, dispatch} = useContext(AuthContext);
  const checklogin = useContext(AuthContext);
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    
    await loginCall(
      { username: username.current.value, password: password.current.value },
      dispatch
    );
    
    if (checklogin.user === null) {
      console.log("Đăng nhập thất bại");
    } else {
      history.push("/");
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Savior</h3>
          <span className="loginDesc">
            Ứng dụng hỗ trợ sức khỏe, tâm lý sinh viên.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox">
            <input 
              placeholder="username"
              type="username"
              required
              className="loginInput"
              ref={username}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput mt-20"
              ref={password}
            />
            <button className="loginButton" type="submit" onClick={handleClick} >
              { isFetching ? <CircularProgress color='white'></CircularProgress> :"Đăng nhập"}
            </button>
            <span className="loginForgot mt-20">Quên mật khẩu?</span>
            <Link to ={"/register"}>
            <button style={{marginLeft:"90px"}} className="loginRegisterButton mb5">
           Tạo tài khoản
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
