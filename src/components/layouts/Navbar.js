import logo from '../../../src/new1logo.png'
import logo1 from '../../../src/newlogo.png'
import {Link} from 'react-router-dom';
import homecss from '../pages/homecss.css'


function Navbar(){
    return(
            
<nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
<div className="container">
<Link className="navbar-brand" to="/home">
      <img src={logo} style={{width:'130px', height:'40px'}}/>
      </Link>
  {/*this is three dask button*/}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarResponsive">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link active" to="/home">Trang chủ</Link>
      </li>

      <li className="nav-item">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Tâm lý
        </a>
        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
          <li><Link className="dropdown-item" to="/search">Nhắn tin với chuyên gia</Link></li>
          <li><Link className="dropdown-item" to="/books_management">Đặt lịch hẹn chuyên gia</Link></li>
        </ul>
      </li>
      </li>

      <li className="nav-item">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Sức Khỏe
        </a>
        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
          <li><Link className="dropdown-item" to="/BMI">Tính BMI</Link></li>
          <li><Link className="dropdown-item" to="/books_management">Tính BMR</Link></li>
        </ul>
      </li>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/news">Bản tin</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/search">Tra cứu</Link>
      </li>

      <li className="nav-item">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Tài khoản
        </a>
        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
          <li><Link className="dropdown-item" to="/books_management">Đăng Xuất</Link></li>
          <li><Link className="dropdown-item" to="/search">Cài đặt</Link></li>
         
        </ul>
      </li>
      </li>

     {/* <li className="nav-item">
        <Link className="nav-link" to="/contacts">Liên hệ</Link>
      </li>
    */}

    </ul>
  </div>
</div>
</nav>
    );
}
export default Navbar;