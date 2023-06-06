import React, { Component } from 'react'
import InTroJS from '../pages/InTroCSS.scss'
import Swiper from 'swiper';
import Stress from './images/stress4.png'
import {Link} from 'react-router-dom';

export default function Intro(intro) {
   
   
     
        return (

            <div> 
                <div>
                
                    <div className="blog-card mt3">
                      <div className="meta">
                        <div className="photo" style={{}} 
                         />

                         <img src={Stress}  className="photo" />
                         <Link to={"/details"}>
                        <ul className="details">
                          <li ><i class="far fa-user"></i><a href="#"> &nbsp; Anh Duy</a></li>
                          <li > <i class="far fa-calendar-alt"> &nbsp; </i>Aug. 24, 2021</li>
                          <li >
                            <ul>
                            <li><i class="fas fa-tag"></i></li>
                              <li><a href="#">CăngThẳng</a></li>
                              <li><a href="#">MệtMỏi</a></li>
                              <li><a href="#">LoNghĩ</a></li>
                            </ul>
                          </li>
                        </ul>
                        </Link>
                      </div>
                      <div className="description">
                        <h5>Stress</h5>
                        <h6>Dễ rơi vào bệnh Trầm Cảm.</h6>
                        <p> Nhắc đến stress người ta thường nghĩ đến sự căng thẳng, mệt mỏi, lo n mỏi, lo n...</p>
                        <p className="read-more">
                          <a href="#">Đọc thêm</a>
                        </p>
                      </div>
                    </div>

                   
                  </div>
            </div>
        );
    
    
}
