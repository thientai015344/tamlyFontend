import Intro from "../Intro";
import "./searchNews.css";
import InTroJS from "./InTroCSS.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function SearchNews() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [articles, setArticle] = useState([]);
  const [search, setSearch] = useState("");
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const filteredTag = articles.filter((article) => {
    return article.tag.toLowerCase().includes(search.toLowerCase());
  });
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get("articles/all/all");
      setArticle(res.data);
    };

    fetchUser();
  }, []);

  return (
    <div className="sidebar">
      <div className="row">
        <div className="ml5 mt5">
          <div className="d-flex position-relative float-left">
            <h1 className="section-title">Các bài viết về sức khỏe, tâm lý</h1>
          </div>
        </div>
      </div>

      {/* Search widget*/}

      <div style={{ marginTop: "10px" }} className="field" id="searchform">
        <input
          style={{ height: "55px", fontSize: "19px" }}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          id="searchterm"
          placeholder="Tìm kiếm theo triệu chứng"
        />
        <button type="button" id="search">
          Find!
        </button>
      </div>

      <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Bài viết
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Video
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          {filteredTag.map((article) => (
        <div>
          <div>
            <div className="blog-card mt3">
              <div className="meta">
                <div className="photo" style={{}} />

                <img src={PF + article.img} className="photo" />
                {/* <Link to={"/article/"+article._id}> */}

                <a href={article.link}>
                  <ul className="details">
                    <li>
                      <i class="far fa-user"></i> &nbsp; {article.comp}
                    </li>
                    <li>
                      {" "}
                      <i class="far fa-calendar-alt"> &nbsp; </i>{" "}
                      {new Date(Date.parse(article.time)).toDateString()}
                    </li>
                    <li>
                      <ul>
                        <li>
                          <i class="fas fa-tag"></i>
                        </li>
                        <li>
                          <>&nbsp;{article.tag}</>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </a>

                {/*  </Link>*/}
              </div>
              <div className="description">
                <h5>{article.title}</h5>
                <h6>{article.more}</h6>
                <p> {article.summary}</p>
                <p className="read-more">
                  <a href="#">Đọc thêm</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
           <div className="blog-card mt3">
              <div className="meta">
                <div className="photo" style={{}} />

                <div class="container">
                <div class="row xamin-bg">
                    <div class="col-sm-12 offset-md-1 offset-lg-1 col-md-10 col-lg-10 wow fadeInUp text-center">
                        <div>
                            <div class="scroll-effect">
                                <img style={{marginTop:'25px'}} src='assets/img-video/food.jpg' class="img-fluid img-one" alt="#" />
                                <div class="main-video">
                                    <div class="video-img">
                                        <div class="consult-video video-btn">
                                            <div class="btn-waves">
                                                <div class="waves wave-1"></div>
                                                <div class="waves wave-2"></div>
                                                <div class="waves wave-3"></div>
                                            </div>
                                            <a href="http://www.youtube.com/watch?v=0O2aH4XLbto" class="iq-video popup-youtube"><i class="fa fa-play"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                {/*  </Link>*/}
              </div>
              <div className="description">
                <h5>Cách làm trà gừng trị cảm cúm</h5>
                <h6>Tham khảo suckhoe.com</h6>
                <p> Nguyên liệu: Trà túi lọc: 1 gói, Gừng: 1 củ nhỏ, Mật ong: 30ml, Chanh: ½ quả</p>
                <p className="read-more">
                  <a href="#">Đọc thêm</a>
                </p>
              </div>
            </div>

            <div className="blog-card mt3">
              <div className="meta">
                <div className="photo" style={{}} />

                <div class="container">
                <div class="row xamin-bg">
                    <div class="col-sm-12 offset-md-1 offset-lg-1 col-md-10 col-lg-10 wow fadeInUp text-center">
                        <div>
                            <div class="scroll-effect">
                                <img style={{marginTop:'25px'}} src='assets/img-video/food.jpg' class="img-fluid img-one" alt="#" />
                                <div class="main-video">
                                    <div class="video-img">
                                        <div class="consult-video video-btn">
                                            <div class="btn-waves">
                                                <div class="waves wave-1"></div>
                                                <div class="waves wave-2"></div>
                                                <div class="waves wave-3"></div>
                                            </div>
                                            <a href="http://www.youtube.com/watch?v=0O2aH4XLbto" class="iq-video popup-youtube"><i class="fa fa-play"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                {/*  </Link>*/}
              </div>
              <div className="description">
                <h5>Cách làm trà gừng trị cảm cúm</h5>
                <h6>Tham khảo suckhoe.com</h6>
                <p> Nguyên liệu: Trà túi lọc: 1 gói, Gừng: 1 củ nhỏ, Mật ong: 30ml, Chanh: ½ quả</p>
                <p className="read-more">
                  <a href="#">Đọc thêm</a>
                </p>
              </div>
            </div>
            
        </div>
      </div>
    </div>
    </div>
  );
}
