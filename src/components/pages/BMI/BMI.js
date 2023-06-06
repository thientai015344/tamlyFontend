import React, { Component } from 'react';
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";
import './BMI.css';
import TextField from '@material-ui/core/TextField';

const PF = process.env.REACT_APP_PUBLIC_FOLDER;
class BMI extends Component {
    
    constructor(props) {
        super(props);
        this.state = { name: 'Guest', weight: 90, height: 180, bmi: 27, message: '', optimalweight: '', time: new Date().toLocaleTimeString() };
        this.submitMe = this.submitMe.bind(this);
        this.heightchange = this.heightchange.bind(this);
        this.weightchange = this.weightchange.bind(this);
        this.change = this.change.bind(this);  
        this.ticker = this.ticker.bind(this); 
        this.blur = this.blur.bind(this); 
        this.calculateBMI = this.calculateBMI.bind(this); 

     }
     
     heightchange(e){
        this.setState({height: e.target.value});
        e.preventDefault();
      }
    
      blur(e){
       this.calculateBMI();
      }
       weightchange(e){
        this.setState({weight: e.target.value});
        e.preventDefault();
      }
    
      calculateBMI(){
    
          var heightSquared = (this.state.height/100  * this.state.height/100);
          var bmi = this.state.weight / heightSquared;
          var low = Math.round(18.5 * heightSquared);                                                         
          var high = Math.round(24.99 * heightSquared);    
          var message = "";
          if( bmi >= 18.5  && bmi <= 24.99 ){
              message = "Bạn đang ở trong mức cân nặng hợp lý";
             
          }
          else if(bmi >= 25 && bmi <= 29.9){
            message = "Bạn hơi nặng kí rồi đó";
          }
          else if(bmi >= 30){
              message ="Bạn béo phì rồi";
          }
          else if(bmi < 18.5){
            message = "Bạn đang thiếu cân  rồi đó";
          }
          this.setState({message: message});  
          this.setState({optimalweight: "Phạm vi cân nặng được đề xuất của bạn nằm trong khoảng  "+low+ " - "+high});    
          this.setState({bmi: Math.round(bmi * 100) / 100});   
    
      }
    
      submitMe(e) {
         e.preventDefault();
         this.calculateBMI();
      }
    
      ticker() {
        this.setState({time: new Date().toLocaleTimeString()})
      }
     
      componentDidMount(){
        setInterval(this.ticker, 60000);
      }
    
      change(e){
        e.preventDefault();
        console.log(e.target);
        this.setState({name: e.target.value});
      }

     
    render() {
        return (
            <div className="Background">
                <Navbar></Navbar>
            <div className="AppBMI">
        <div className="App-header">
         
        </div>
          <form style={{margin:"10px"}} className="form1" onSubmit={this.submitMe}>
           
            <label  className="label">
              Chọn giới tính của bạn
            </label>

            <div className="col-md-12">
                <div className="row">
                     <label className="option_item label">
                        <input type="checkbox" className="checkbox input" defaultChecked />
                            <div  style={{ background: "url({`${PF}/female.png`}) no-repeat center center"}} className="option_inner twitter">
                                <div className="tickmark" />
                                <img style={{height:'130px', width:"130px"}} src={`${PF}/female.png`} alt="Girl"></img>
                            </div>
                    </label>      

                    <label className="option_item label" style={{width:"230px", height:"250px"}}>
                        <input type="checkbox" className="checkbox input" />
                            <div className="option_inner facebook">
                                <div className="tickmark" />
                                <img style={{height:'150px', width:"150px"}} src={`${PF}/male.png`} alt="Girl"></img>
                            </div>
                    </label>

                </div>
            </div>

      <label className="label"  style={{marginTop:"60px"}}> 
             Nhập chiều cao của bạn (cm): 
            </label>
            <div className="col-md-6 form-group">
                    <input type="text" name="height" value={this.state.height} onBlur={this.blur} onChange={this.heightchange} className="form-control input"  placeholder="cm" data-rule="minlen:2" data-msg="Please enter at least 4 chars" />
                    <div className="validate" />
                  </div>

             <label className="label">
             Nhập cân nặng của bạn (kg) : 
            </label>

            <div className="col-md-6 form-group">
                    <input type="text" name="weight" value={this.state.weight}  onChange={this.weightchange} className="form-control input"  placeholder="cm" data-rule="minlen:2" data-msg="Please enter at least 4 chars" />
                    <div className="validate" />
                  </div>
                  <input className='btn  btn_normal input' type="submit" value="Tính MBI"/>

            <label  className="label" >{this.state.checked} Hello, Hôm nay bạn như thế nào? Chỉ số BMI của bạn là  {this.state.bmi} </label>
              <label  className="label" >{this.state.message}</label>
              <label  className="label" >{this.state.optimalweight}</label>
             
            
          </form>
      
      </div>
      <Footer></Footer>
      </div>
        )
    }
}

export default BMI;