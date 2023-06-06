import React, { Component } from 'react'

import{placeInfo, reviews, detailInfo, news} from '../data'
const InforContext=React.createContext();

//provider
//consumer

class InforProvider extends Component {

    state={
        info: placeInfo,
        reviews: reviews,
        detailInfo : detailInfo,
        new: news,
       
    };

    getItem =id=>{
        const item = this.state.info.find(item =>item.id === id);
        return item;
    };

    handleDetail = id =>{
        const item=this.getItem(id);
        this.setState(
            ()=>{
                return{
                    detailInfo:item
                };
            }
        );
    };

    render() {
        return (
           <InforContext.Provider value={{
               info: this.state.info,
               reviews: this.state.reviews,
               detailInfo: this.state.detailInfo,
               news: this.state.news,
               handleDetail: this.handleDetail,
           }}>
               {
                   this.props.children
               }
           </InforContext.Provider>
        )
    }
}

const InforConSumer = InforContext.Consumer;
export{InforProvider, InforConSumer};
