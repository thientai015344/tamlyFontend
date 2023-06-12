import { useContext, useRef } from "react";
import "./admin.css";
// import ReactTable from 'react-table'
// import 'react-table/react-table.css'

export default function Post() {
  const username = useRef();
  const password = useRef();

 

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   loginCall(
  //     { username: username.current.value, password:password.current.value },
  //     dispatch
  //   );
  //   if(checklogin.user === null){
  //     console.log("đăng nhập thất bại")
  //   }
  //   else{
  //     history.push("/");
  //   }
    
  // };

  return (
    <div className="adminRight">
      <h1>Post</h1>
    </div>
   
  );
}
