import { useContext, useRef } from "react";
import "./login.css";
import { CircularProgress } from "@material-ui/core";
import "../homecss.css";
import { loginCall } from "../../../apiCalls";
import { AuthContext } from "../../../context/Authcontext";
import {Link} from 'react-router-dom';

export default function Login() {
  const email = useRef();
  const password = useRef();
  const {user, isFetching, dispatch, error } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password:password.current.value },
      dispatch
    );
    
   
  };
  console.log(user)
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
          <form className="loginBox" onSubmit={handleClick}>
            <input 
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput mt-20"
              ref={password}
            />
            <button className="loginButton" type="submit" >
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
