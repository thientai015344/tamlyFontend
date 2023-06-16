import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();
  const phonenumber = useRef();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        phonenumber: phonenumber.current.value,
        password: password.current.value,
      };
      try {
        console.log(user)
        await axios.post("/api/create-new-userAdm", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Savior</h3>
          <span className="loginDesc">
            Ứng dụng hỗ trợ tâm lý, sức khỏe sinh viên.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox">
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="phonenumber"
              required
              ref={phonenumber}
              className="loginInput"
              type="phonenumber"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Nhập lại Password"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" onClick={handleClick} >
              Đăng kí
            </button>
            <button className="loginRegisterButton">Đăng nhập</button>
          </form>
        </div>
      </div>
    </div>
  );
}
