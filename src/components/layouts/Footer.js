
import styled from "styled-components"
import logo from '../../../src/logo.png'
import homecss from '../pages/homecss.css'
import { Link } from 'react-router-dom';
function Footer(){
    return(
        <FooterContainer>
           
        <footer className="bg-light text-center text-lg-start">
        <div className='footer'>
			<div className='grid wide footer-top'>
				<div className='row '>
					<div className='col l-8'>
						<div className='row'>
							<div className='col l-4'>
								<h2 className='footer-title'>Về chúng tôi</h2>
								<ul className='footer-list'>
									<li className='footer-item'>
										<Link to='#' className='footer-link'>
											Nguyễn Anh Duy
										</Link>
									</li>
									
								</ul>
							</div>
							<div className='col l-4'>
								<h2 className='footer-title'>Liên hệ chúng tôi</h2>
								<ul className='footer-list'>
									<li className='footer-item'>
										<Link to='#' className='footer-link'>
											Khu phố 6, Linh Trung
										</Link>
									</li>
									<li className='footer-item'>
										<Link to='#' className='footer-link'>
											0355205436
										</Link>
									</li>
								</ul>
							</div>
							<div className='col l-4'>
								<h2 style={{marginLeft:"20px"}} className='footer-title'>Lý do chọn Savior?</h2>
								<ul className='footer-list'>
									<li className='footer-item'>
										<Link to='#' className='footer-link'>
											Tận Tâm
										</Link>
									</li>
									<li className='footer-item'>
										<Link to='#' className='footer-link'>
											Chuyên nghiệp
										</Link>
									</li>
									<li className='footer-item'>
										<Link to='#' className='footer-link'>
											Nhanh chóng
										</Link>
									</li>
									<li className='footer-item'>
										<Link to='#' className='footer-link'>
											Miễn phí
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='col l-4'>
						<h2 className='footer-title'>
							Theo dõi, nhận các thông tin quan trọng về mail{' '}
						</h2>
						<form >
							<div style={{width:"320px", marginLeft:"100px"}} className=''>
								<input
									id='email'
									name='email'
									type='text'
									placeholder='Nhập email của bạn'
									className='form-control'
									
								/>
								<br />
								
								
							</div>
							<button style={{marginLeft:'-351px'}} className='btn-confirm'>Subscribe</button>
						</form>
					</div>
				</div>

				<div className='social'>
					<Link to='#' className='social-link'>
						<i  className='fab fa-facebook-f'/>
					</Link>
					<Link to='#' className='social-link'>
						<i  className='fab fa-google-plus-g'/>
					</Link>
					<Link to='#' className='social-link'>
						<i  className='fab fa-instagram'/>
					</Link>
				</div>

				<div className='policy'>
					<Link to='#' className='policy-link'>
						Terms and condition
					</Link>
					<Link to='#' className='policy-link'>
						Privacy Policy
					</Link>
				</div>
			</div>
		</div>

            
            </footer>
           
            </FooterContainer>
            
    );
}
export default Footer;

const FooterContainer = styled.footer `
.footer {
    width: 100%;
    background-color: #282828;
}
.footer-top {
    padding: 50px 0;
}
.footer-title {
    text-transform: uppercase;
    color: #32e6dd;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 20px;
}

ul {
    list-style-type: none;
}

.footer-link {
    color: #fff;;
    font-weight: 400;
    font-size: 14px;
    padding: 6px 0;
    display: inline-block;
}
.footer-link:hover {
    color: #32e6dd;
}

.btn-confirm {
    height: 40px;
    color: #fff;
    background-color: #32e6dd;
    margin-top: 10px;
    border-radius: 2px;
    outline: none;
    font-size: 16px;
    line-height: 40px;
    padding: 0 20px;
}

.social {
    text-align: center;
    margin: 20px 0px;
}
.social-link {
    color: #32e6dd;
    padding: 0 12px;

}
.social-link i {
    font-size: 26px;

}
.policy {
    text-align: center;
 
}
.policy-link {
    color: #fff;
    padding: 0 10px;
    position: relative;
}
.policy-link:hover {
    color: #32e6dd;
}
.policy-link:first-child::after {
    content: "";
    position: absolute;
    height: 20px;
    right: 0;
    width: 2px;
    background-color: #fff;
    top: 50%;
    transform: translateY(-40%);
}
`;
