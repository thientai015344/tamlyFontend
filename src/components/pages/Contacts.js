import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
import Homecss from '../pages/homecss.css'

class Contacts extends Component {
    render() {
        return (
            
            <section style={{background:'white'}}>
                <Navbar></Navbar>
                <div className="container">
                    <div className="well well-sm">
                        <h3 >
                            <strong>Địa chỉ</strong>
                        </h3>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                             <iframe allowFullSceen src="https://www.google.com/maps/d/embed?mid=1YQxLoQRODop0Pp1W5LE71FI2Xx1AUVja" width="500" height="480"></iframe>
                        </div>
                        <div className="col-md-6">
                            <h4 className="contact-us"> <strong>Liên hệ</strong></h4>
                            <form>
                                <div className="form-group">
                                <input className="form-control" type="text" placeholder="Tên" aria-label="default input example" required Name/>
                                </div>

                                <div className="form-group">
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email"/>
                                </div>

                                <div className="form-group">
                                <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="Số điện thoại"/>
                                </div>

                                <div>
                                    <textarea cols='30' rows="3" placeholder="Lời nhắn, vấn đề" className="form-control" id="exampleFormControlTextarea1" >

                                    </textarea>
                                </div>

                                <button className="btn  btn_normal mr5 mb3 mt3" onClick={this.test} >
                                                <i className="fab fa-telegram-plane"></i>  &nbsp;  &nbsp;&nbsp; &nbsp; &nbsp; Gửi
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </section>
        )
    }
}

export default Contacts;
