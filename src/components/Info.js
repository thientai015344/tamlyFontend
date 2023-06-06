import React, { Component } from 'react'
import {InforConSumer} from './Context'
import homecss from './pages/homecss.css'
import {Link} from 'react-router-dom';

class Info extends Component {
    render() {
        const
        {
            id,
            headerTitle,
            headSubTitle,
            headerText,
            img,
        }=this.props.item;
        return (
            <InforConSumer>
                {

                    value=>(
                        
                        <div className="col-md-4 col-lg-4">
                           {/* <div className="card_ card-info" style={{width: '18rem'}}>
                                <img src={img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                <h5 className="card-title">{headerTitle}</h5>
                                <p className="card-text">{headerText}</p>
                                <Link
                                onClick={()=>value.handleDetail(id)}
                                 to="/details" className="btn btn-outline-primary text-newbook">More Infor...</Link>
                                </div>
                            </div>

                            */}

<div className="profile-card" style={{width: '15rem'}}>
        <div className="profile-img">
          <img style={{width:'300px', height:'360px'}}src={img} />
        </div>
        <div className="profile-content">
          <h2 className="title">{headerTitle}
            <span>{headerText}</span>
          </h2>
          <ul className="social-link">
          <Link
                                onClick={()=>value.handleDetail(id)}
                                 to="/details" className="btn btn_normal">Đọc thêm</Link>
          </ul>
        </div>
      </div>
                        </div>
                        

                    )
                        
                    
                }
            </InforConSumer>
        )
    }
}

export default  Info;