import "./searchLeft.css";
import {Link} from 'react-router-dom';


export default function SearchLeft() {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
      <>
    <div className="sidebar">

        {/* Search widget*/}

  <div className="card-body mt3">
    <div className="input-group">
      <input className="form-control" type="text" placeholder="Tìm kiếm..." />
      <span className="input-group-append"><button className="btn btn-secondary" type="button">Tìm</button></span>
    </div>
  </div>

      {/* Popular News Start */}
<div className="pb-3">
                      <div className="row">
                        <div className="ml5">
                          <div className="d-flex position-relative float-left">
                            <h1 className="section-title">Phổ biến nhất</h1>
                          </div>
                        </div>
                      </div>

  <div className="position-relative overflow-hidden ml3 mb3" style={{"height":"220px", width:'365px'}}>
  <img className="img-fluid w-100 h-100" src="assets/img/tramcam.jpg"  style={{"object-fit":"cover"}} />
  <div className="overlay">
    <div className="mb-1" style={{"font-size":"13px"}}>
      <a className="text-white" href>Tâm Lý</a>
      <span className="px-1 text-white">/</span>
      <a className="text-white" href>05-05-2021</a>
    </div>
    <a className="h4 m-0 text-white" href>Tự vượt qua trầm cảm bạn không hề đơn độc</a>
  </div>
</div>


<div className="border-top ml3 mr3">
  <div className="row mt3">
    <div className="col-sm-4">
      <div className="position-relative image-hover">
        <img style={{width:"230px"}} src="assets/images/news/news-6.jpg" alt="news" className="img-fluid" />
        <span className="thumb-title1">Sức khỏe</span>
      </div>
    </div>
    <div className="col-sm-8">
      <div className="position-relative image-hover">
        <h6 className="font-weight-600">
          Mẹo giải tỏa mệt mỏi?
        </h6>
        <p style={{fontSize:'17px'}}className="fs-15">Căng thẳng mệt mỏi chắc hẳn ai trong chúng ta cũng đều... </p>
      </div>
    </div>
  </div>
</div>

<div className="border-top ml3 mr3">
  <div className="row mt3">
    <div className="col-sm-4">
      <div className="position-relative image-hover">
        <img src="assets/images/news/news-7.jpg" alt="news" className="img-fluid" />
        <span className="thumb-title1">Sức khỏe</span>
      </div>
    </div>
    <div className="col-sm-8">
      <div className="position-relative image-hover">
        <h6 className="font-weight-600">
          Lạnh chân là vấn đề gì?
        </h6>
        <p style={{fontSize:'17px'}}className="fs-15">chân bị lạnh vào mùa đông còn do những yếu tố...</p>
      </div>
    </div>
  </div>
</div>

<div className="border-top ml3 mr3">
  <div className="row mt3">
    <div className="col-sm-4">
      <div className="position-relative image-hover">
        <img src="assets/images/news/news-2.jpg" alt="news" className="img-fluid" />
        <span className="thumb-title1">Sức khỏe</span>
      </div>
    </div>
    <div className="col-sm-8">
      <div className="position-relative image-hover">
        <h6 className="font-weight-600">
          Hay bị bầm tím là do?
        </h6>
        <p style={{fontSize:'17px'}}className="fs-15">Bạn hay bị bầm tím dưới da không rõ nguyên nhân?...</p>
      </div>
    </div>
  </div>
</div>

  
</div>
{/* Popular News End */}


<div className="d-flex align-items-center justify-content-between py-2 px-4 mb-3">
    <h5 className="m-0">Danh mục</h5>
    <a className="text-secondary font-weight-medium text-decoration-none" href>View All</a>
  </div>
  <div className="position-relative overflow-hidden mb-3 ml3 mr3" style={{"height":"80px"}}>
    <img className="img-fluid w-100 h-100" src="assets/img/cat-500x80-1.jpg" style={{"object-fit":"cover"}} />
    <a href className="overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none">
      Rối loạn âu lo
    </a>
  </div>
  <div className="position-relative overflow-hidden mb-3 ml3 mr3" style={{"height":"80px"}}>
    <img className="img-fluid w-100 h-100" src="assets/img/cat-500x80-2.jpg" style={{"object-fit":"cover"}} />
    <a href className="overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none">
      Quản lý căng thẳng
    </a>
  </div>
  <div className="position-relative overflow-hidden mb-3 ml3 mr3" style={{"height":"80px"}}>
    <img className="img-fluid w-100 h-100" src="assets/img/cat-500x80-3.jpg" style={{"object-fit":"cover"}} />
    <a href className="overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none">
      Tạo mối quan hệ
    </a>
  </div>
  <div className="position-relative overflow-hidden ml3 mr3" style={{"height":"80px"}}>
    <img className="img-fluid w-100 h-100" src="assets/img/cat-500x80-4.jpg" style={{"object-fit":"cover"}} />
    <a href className="overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none">
      Tập luyện thể thao
    </a>
  </div>

{/* Social Follow Start */}
<div className="pb-3">
  <div className=" py-2 px-4 mb-3">
    <h5 className="m-0">Theo dõi chúng tôi</h5>
  </div>
  <div className="d-flex mb-3 ml3">
    <a href className="d-block w-49 py-2 px-3 text-white text-decoration-none mr-2" style={{"background":"#39569E"}}>
      <small className="fab fa-facebook-f mr-2" /><small>12,34885 Fans</small>
    </a>
    <a href className="d-block  py-2 px-3 text-white text-decoration-none ml-2" style={{"background":"#52AAF4"}}>
      <small className="fab fa-twitter mr-2" /><small>12,345 Followers</small>
    </a>
  </div>
  <div className="d-flex mb-3 ml3">
    <a href className="d-block py-2 px-3 text-white text-decoration-none mr-2" style={{"background":"#0185AE"}}>
      <small className="fab fa-linkedin-in mr-2" /><small>125 Connects</small>
    </a>
    <a href className="d-block py-2 px-3 text-white text-decoration-none ml-2" style={{"background":"#C8359D"}}>
      <small className="fab fa-instagram mr-2" /><small>12,345 Followers</small>
    </a>
  </div>
  <div className="d-flex mb-3 ml3">
    <a href className="d-block py-2 px-3 text-white text-decoration-none mr-2" style={{"background":"#DC472E"}}>
      <small className="fab fa-youtube mr-2" /><small>1 Subscribers</small>
    </a>
    <a href className="d-block py-2 px-3 text-white text-decoration-none ml-2" style={{"background":"#1AB7EA"}}>
      <small className="fab fa-vimeo-v mr-2" /><small>12,345 Followers</small>
    </a>
  </div>
</div>
{/* Social Follow End */}

    </div>
    </>
  );
}
