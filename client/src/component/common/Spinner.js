import React, { Component }  from "react";
import spinner  from './img/Loading_icon.gif';
// import 


export class Spinner extends Component{

    render(){

        return(
            <img src={spinner} alt="loading" style={{width : '200px' , margin  :'auto' , display : 'block'}} />
        );
    }
}

export default Spinner;