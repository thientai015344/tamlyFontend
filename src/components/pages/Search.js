import React, { Component } from 'react'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
import Infor from '../pages/Intro'
import homecss from '../pages/style.css'
import SearchLeft from '../searchLeft/SearchLeft'
import SearchNews from './searchNews/searchNews'
class Search extends Component {
   
    render() {
        return (
            <div style={{background:'white'}}> 
                <Navbar></Navbar>
                <div className='row'>
                    <div className='col-md-4'>
                        <SearchLeft></SearchLeft>
                    </div>
                    <div className='col-md-8'>
                        <SearchNews></SearchNews>
                    </div>
                </div>
               
                <Footer></Footer>

            </div>
        )
    }
    
}

export default Search;